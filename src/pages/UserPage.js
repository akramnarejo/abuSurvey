import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Box,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Skeleton,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";
// mock
// import surveys from "../_mock/user";
import ViewSurveyModal from "src/components/modals/viewModal";
import moment from "moment";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { useUserAuth } from "src/context";
import ATMClientSurveyModal from "src/components/modals/atmClientSurvey";
import SelectSurvey from "src/components/modals/selectSurvey";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "started", label: "Started", alignRight: false },
  { id: "submitted", label: "Submission", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "option", label: "Option", alignRight: false },
  // { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}

export default function UserPage() {
  const { surveys, loading, userInfo, setLoadSurveys, offlineSurveys, clearOfflineSurveys, setNotify } =
    useStore(
      (state) => ({
        surveys: state?.surveys,
        loading: state?.loading,
        userInfo: state?.userInfo,
        setLoadSurveys: state?.setLoadSurveys,
        offlineSurveys: state?.offlineSurveys,
        clearOfflineSurveys: state?.clearOfflineSurveys,
        setNotify: state?.setNotify,
      }),
      shallow
    );
  console.log(
    "==================================OFFLINE SURVEYS================================: ",
    offlineSurveys
  );
  const { db } = useUserAuth();
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(8);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [modalData, setModalData] = useState({ surveyId: null, name: null });

  // const [surveys, setSurveyList] = useState([]);
  // const [loading, setLoading] = useState(false);

  console.log("+++++++++++++++++++Surveys from store: ", surveys);
  const toggleModal = () => setOpen(!open);
  const toggleSurveyModal = () => setModalOpen(!isModalOpen);
  const toggleEditSurveyModal = (id, name) => {
    setModalData({ surveyId: id, name: name });
    setEditModalOpen(!isEditModalOpen);
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = surveys?.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected?.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - surveys?.length) : 0;

  const filteredUsers = applySortFilter(
    surveys?.filter((survey) => survey?.createdBy === userInfo?.email),
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers?.length && !!filterName;

  const handleDeleteSurvey = async (document) => {
    await deleteDoc(doc(db, userInfo?.name, document));
  };

  const handleOfflineSurveys = async () => {
    if (offlineSurveys?.length) {
      try {
        const promises = offlineSurveys.map(async (survey, index) => {
          try {
            await addDoc(collection(db, "surveys"), survey);
            return index; // Return the index of successfully added survey
          } catch (error) {
            // Handle error if needed
            return null; // Return null for failed survey
          }
        });
        const successfulIndices = (await Promise.all(promises)).filter(index => index !== null);
        // Remove successfully added surveys from offlineSurveys
        const remainingSurveys = offlineSurveys.filter((_, index) => !successfulIndices.includes(index));
        clearOfflineSurveys(remainingSurveys)
        setNotify({ open: true, message: 'Surveys uploaded successfully!', type: 'success' })
      } catch (error) {
        // Handle error if needed
        setNotify({ open: true, message: 'Surveys failed to upload', type: 'error' })
      }
    }
  };
  
  

  return (
    <>
      {isModalOpen && (
        <SelectSurvey isOpen={isModalOpen} handleClose={toggleSurveyModal} />
      )}
      {isEditModalOpen && (
        <ViewSurveyModal
          isOpen={isEditModalOpen}
          handleClose={toggleEditSurveyModal}
          modalData={modalData}
        />
      )}
      <Helmet>
        <title> User | ATM Network </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          mb={5}
          gap={{ xs: 2, sm: 0 }}
        >
          <Typography variant="h4" gutterBottom>
            Survey
          </Typography>
          <Stack direction="row" gap={2}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: { xs: "100%", sm: "300px" },
                height: "60px",
                fontSize: "18px",
                fontWeight: "700",
              }}
              onClick={toggleSurveyModal}
            >
              Start Survey
            </Button>
            <Button
              variant="outlined"
              disableElevation
              disabled={!navigator.onLine || !offlineSurveys?.length}
              sx={{
                width: { xs: "100%", sm: "300px" },
                height: "60px",
                fontSize: "18px",
                fontWeight: "700",
              }}
              onClick={handleOfflineSurveys}
            >
              {offlineSurveys?.length ? `(${offlineSurveys?.length})` : ""}{" "}
              Synchronize {/* Upload Pending Survey */}
            </Button>
          </Stack>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected?.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={surveys?.length}
                  numSelected={selected?.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {loading ? (
                    <>
                      {[...Array(3)].map((_, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell>
                              <Skeleton
                                animation="wave"
                                width="100%"
                                height={40}
                              />
                            </TableCell>
                            <TableCell>
                              <Skeleton
                                animation="wave"
                                width="100%"
                                height={40}
                              />
                            </TableCell>
                            <TableCell>
                              <Skeleton
                                animation="wave"
                                width="100%"
                                height={40}
                              />
                            </TableCell>
                            <TableCell>
                              <Skeleton
                                animation="wave"
                                width="100%"
                                height={40}
                              />
                            </TableCell>
                            <TableCell>
                              <Skeleton
                                animation="wave"
                                width="100%"
                                height={40}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </>
                  ) : (
                    filteredUsers
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map((row) => {
                        const {
                          id,
                          name,
                          startedAt,
                          status,
                          submittedAt,
                          avatarUrl,
                        } = row;
                        const selectedUser = selected.indexOf(name) !== -1;
                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={selectedUser}
                          >
                            {/* <TableCell padding="checkbox">
                            <Checkbox
                              checked={selectedUser}
                              onChange={(event) => handleClick(event, name)}
                            />
                          </TableCell> */}

                            <TableCell component="th" scope="row">
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                              >
                                {/* <Avatar alt={name} src={avatarUrl} /> */}
                                <Typography variant="subtitle2" noWrap>
                                  {name}
                                </Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align="left">
                              {startedAt && moment(startedAt).format("lll")}
                            </TableCell>

                            <TableCell align="left">
                              {submittedAt && moment(submittedAt).format("lll")}
                            </TableCell>

                            {/* <TableCell align="left">
                            {isVerified ? "Yes" : "No"}
                          </TableCell> */}

                            <TableCell align="left">
                              <Label
                                color={
                                  status === "pending"
                                    ? "default"
                                    : status === "Preview"
                                    ? "info"
                                    : "success"
                                }
                              >
                                {status}
                              </Label>
                            </TableCell>

                            <TableCell
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Stack direction="row" gap={2}>
                                {/* <img
                                  src={require("../assets/icons/edit.png")}
                                  alt="edit survey"
                                  style={{ cursor: "pointer" }}
                                /> */}
                                {status === "Preview" && (
                                  <Box
                                    onClick={() =>
                                      toggleEditSurveyModal(id, name)
                                    }
                                  >
                                    <img
                                      src={require("../assets/icons/edit.png")}
                                      alt="view survey"
                                      style={{ cursor: "pointer" }}
                                    />
                                  </Box>
                                )}
                                <Box
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Are you sure, you want to delete survey?"
                                      )
                                    ) {
                                      handleDeleteSurvey(id).then(() =>
                                        setLoadSurveys()
                                      );
                                    }
                                  }}
                                >
                                  <img
                                    src={require("../assets/icons/delete.png")}
                                    alt="delete survey"
                                    style={{ cursor: "pointer" }}
                                  />
                                </Box>
                              </Stack>
                              {/* <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleOpenMenu}
                              >
                                <Iconify icon={"eva:more-vertical-fill"} />
                              </IconButton> */}
                            </TableCell>
                          </TableRow>
                        );
                      })
                  )}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {(isNotFound || filteredUsers?.length < 1) && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 20 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h4" paragraph>
                            Not Surveys Found
                          </Typography>

                          <Typography variant="h6">Create a survey.</Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[8, 15, 25]}
            component="div"
            count={surveys?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
