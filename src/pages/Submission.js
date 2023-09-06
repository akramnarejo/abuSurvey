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
import SelectSurvey from "src/components/modals/selectSurvey";
import moment from "moment";
import { useStore} from "src/store";
import {deleteSurvey} from "src/store";
import { shallow } from "zustand/shallow";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useUserAuth } from "src/context";
import ViewSurveyModal from "src/components/modals/viewModal";
import { RESERVED_ORGANIZATIONS } from "src/constants";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Survey Type", alignRight: false },
  { id: "facilityname", label: "Facility Name", alignRight: false },  
  { id: "organization", label: "ATM Network", alignRight: false },
  { id: "reservedOrg", label: "Organizations", alignRight: false },
  { id: "started", label: "Started", alignRight: false },
  { id: "submitted", label: "Finished", alignRight: false },
  // { id: "status", label: "Status", alignRight: false },
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
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || 
      _user.organization.toLowerCase().indexOf(query.toLowerCase()) !== -1
      
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}

export default function Submission() {
  const { surveys, users, loading, setLoading, fetchSurveys, getSurveys, setNotify, deleteSurvey } = useStore(
    (state) => ({
      surveys: state?.surveys,
      loading: state?.loading,
      setLoading: state?.setLoading,
      fetchSurveys: state?.fetchSurveys,
      getSurveys: state?.getSurveys,
      setNotify: state?.setNotify,
      users: state?.users,
      deleteSurvey: state?.deleteSurvey,
    }),
    shallow
  );

  const { db } = useUserAuth();

  console.log("-----------Surveys: ", surveys);
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(8);

  const [isModalOpen, setModalOpen] = useState(false);

  const [filteredSurveys, setFilteredSurveys] = useState(
    surveys
  );
  const [modalData, setModalData] = useState(null)
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => setOpen(!open);
  const toggleSurveyModal = () => setModalOpen(!isModalOpen);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleFilterSurveys = (filters) => {
    console.log('--------------handling filter: ', filters)
    const {organizationFilter, reservedOrgFilter, userFilter, dateFrom, dateTo} = filters
    // filter by organization
    let previewSurveys = surveys
    if(organizationFilter || reservedOrgFilter|| userFilter || dateFrom || dateTo){
      
      if(organizationFilter){
        previewSurveys = previewSurveys?.filter(item => item?.organization === organizationFilter)
      }
      if(reservedOrgFilter){
        const usersWithReservedOrg = users?.filter(item => item?.reservedOrg === reservedOrgFilter)?.map(item => item?.email)
        const reservedOrgSurveys = []
        previewSurveys?.map(item => {
          if(usersWithReservedOrg?.includes(item?.createdBy)){
            reservedOrgSurveys.push(item)
          }
        })
        previewSurveys = reservedOrgSurveys
      }
      if(userFilter){
        previewSurveys = previewSurveys?.filter(item => item?.createdBy === userFilter)
      }
      if(dateFrom && dateTo){
        previewSurveys = previewSurveys?.filter(item => ((new Date(item?.submittedAt).getTime() >= new Date(dateFrom).getTime()) && (new Date(item?.submittedAt).getTime() <= new Date(dateTo).getTime())))
      }else if(dateFrom){
        previewSurveys = previewSurveys?.filter(item => (new Date(item?.submittedAt).getTime() >= new Date(dateFrom).getTime()))
      }else if(dateTo){
        previewSurveys = previewSurveys?.filter(item => ((new Date(item?.submittedAt).getTime() <= new Date(dateTo).getTime())))
      }
      setFilteredSurveys(previewSurveys)
    }else{
      setFilteredSurveys(surveys)
    }
  };
  const acceptSurvey = async (id) => {
    setLoading(true)
    const docRef = doc(db, "surveys", id);
    const data = {
      ...surveys?.find((item) => item?.id === id),
      status: "Approved",
    }
    console.log('-----------------data: ', data)
    await updateDoc(docRef, data)

  };

  const handleAcceptSurvey = id => {
    try {
      acceptSurvey(id).then(() => {
        setLoading(false)
        setNotify({ open: true, message: 'Survey accepted successfully!', type: 'success' })
        getSurveys(surveys?.map(survey => {
          if(survey?.id === id){
            return {
              ...survey,
              status: 'Approved',
            }
          }
          return survey
        }))
      }).catch(() => setLoading(false))
    } catch (error) {
      setLoading(false)
    }
  }
  const handleViewSurvey = (id, name) => {
    setModalData({surveyId: id, name: name});
    setEditModalOpen(!isEditModalOpen);
  };

// Define the handleDeleteSurvey function
const handleDeleteSurvey = async (id, name) => {
  if (window.confirm(`Are you sure you want to delete this survey ?`)) {
    try {
      await deleteSurvey(db, id);

      // Handle success, show a notification, or update the UI as needed
      setNotify({ open: true, message: `Survey "${id}" deleted successfully!`, type: 'success' });

      // You may also want to refresh the list of surveys after deletion
      // You can call the fetchSurveys function or update your state here.
    } catch (error) {
      // Handle errors here, show an error message, or log the error
      console.error('Error deleting survey:', error);
    }
  }
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
      const newSelecteds = filteredSurveys?.map((n) => n.name);
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
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredSurveys?.length)
      : 0;

  const filteredUsers = applySortFilter(
    filteredSurveys,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound =
    (!filteredUsers?.length && !!filterName) || filteredSurveys?.length === 0;

  return (
    <>
      {isEditModalOpen && (
        <ViewSurveyModal
          isOpen={isEditModalOpen}
          handleClose={handleViewSurvey}
          modalData={modalData}
        />
      )}
      <Helmet>
        <title> User | ATM Network </title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Submissions
          </Typography>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected?.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            handleFilterSurveys={handleFilterSurveys}
            filteredSurveys={filteredSurveys}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={filteredSurveys?.length}
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
                          organization,
                          reservedOrg,
                          startedAt,
                          status,
                          submittedAt,
                          avatarUrl,
                          data,
                          createdBy,
                        } = row;
                        const selectedUser = selected.indexOf(id) !== -1;
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
                            <TableCell align="left">{JSON.parse(data)?.facilityname ?? "-"}</TableCell>
                            <TableCell align="left">{organization}</TableCell>
                            <TableCell align="left">{users?.find(item => item?.email === createdBy)?.reservedOrg ?? "-"}</TableCell>
                            <TableCell align="left">
                              {startedAt && moment(startedAt).format("lll")}
                            </TableCell>

                            <TableCell align="left">
                              {submittedAt && moment(submittedAt).format("lll")}
                            </TableCell>

                            {/* <TableCell align="left">
                            {isVerified ? "Yes" : "No"}
                          </TableCell> */}

                            {/* <TableCell align="left">
                              <Label
                                color={
                                  status === "Approved"
                                    ? "success"
                                    : status === "Preview"
                                    ? "info"
                                    : "error"
                                }
                              >
                                {status}
                              </Label>
                            </TableCell> */}

                            <TableCell sx={{ padding: "5px 0px" }}>
                              <Stack gap={0.5}>
                                {
                                  status === 'Approved' ? (<Button
                                    variant="contained"
                                    color="info"
                                    disabled={true}
                                    onClick={() => handleAcceptSurvey(id)}
                                  >
                                    Accepted
                                  </Button>) : (<Button
                                  variant="contained"
                                  color="info"
                                  onClick={() => handleAcceptSurvey(id)}
                                >
                                  Accept
                                </Button>)
                                }
                                <Button
                                  variant="outlined"
                                  color="info"
                                  onClick={() => handleViewSurvey(id, name)}
                                >
                                  View
                                </Button>

                                <Button
                                  variant="contained"
                                  color="error"
                                  onClick={() => handleDeleteSurvey(id, name)}
                                >
                                  Delete
                                </Button>

                                {/* <Button variant="outlined" color="error">
                                  Reject
                                </Button> */}
                              </Stack>
                            </TableCell>

                            {/* <TableCell
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Stack direction="row" gap={2}>
                                <img
                                  src={require("../assets/icons/edit.png")}
                                  alt="edit survey"
                                  style={{ cursor: "pointer" }}
                                />
                                <img
                                  src={require("../assets/icons/view.png")}
                                  alt="view survey"
                                  style={{ cursor: "pointer" }}
                                />
                              </Stack>
                              <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleOpenMenu}
                              >
                                <Iconify icon={"eva:more-vertical-fill"} />
                              </IconButton>
                            </TableCell> */}
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

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
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
            count={filteredSurveys?.length}
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
