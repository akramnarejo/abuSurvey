import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Grid,
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
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import CreateUser from "src/components/modals/userCreation";
import { useUserAuth } from "src/context";
import { collection, documentId, getDocs } from "firebase/firestore";
import { auth } from "../firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "organizaion", label: "Network", alignRight: false },
  { id: "reservedOrg", label: "Organization", alignRight: false },
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
      (_user) =>
        (_user?.firstName)?.toLowerCase().indexOf(query?.toLowerCase()) !== -1 ||
        _user?.lastName?.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user?.role?.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user?.organization?.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user?.reservedOrg?.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}

export default function UserPermissions() {
  const functions = getFunctions();
  const deleteUserByUid = httpsCallable(functions, "deleteUser");
  const {
    surveys,
    loading,
    getUsers,
    setLoading,
    users,
    deleteUser,
    setNotify,
  } = useStore(
    (state) => ({
      surveys: state?.surveys,
      loading: state?.loading,
      getUsers: state?.getUsers,
      setLoading: state?.setLoading,
      users: state?.users,
      deleteUser: state?.deleteUser,
      setNotify: state?.setNotify,
    }),
    shallow
  );

  console.log('2222222222222222222222222')

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

  const [isEditing, setIsEditing] = useState({});

  const [filterUsers, setFilterUsers] = useState(users);

  // const [surveys, setSurveyList] = useState([]);
  // const [loading, setLoading] = useState(false);
  
  
  //Commented and replaced the function in the firestore
  // const fetchUsers = async () => {
  //   const data = await getDocs(collection(db, "users"));
  //   return data;
  // };

  const handleGetUsers = () => {
    getUsers(db).then((data) => {
      setLoading(false);
      console.log("------------we get users: ", data?.docs);
    });
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  console.log("---------users: ", users);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);

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
      const newSelecteds = filterUsers?.map((n) => n.name);
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

  const handleFilterByName = (name) => {
    setPage(0);
    setFilterName(name);
  };

  const handleFilterUsers = (filters) => {
    const { stateFilter, lgaFilter,organizationFilter, reservedOrgFilter } = filters;
    if (stateFilter || lgaFilter || organizationFilter || reservedOrgFilter) {
      let data = users;
      if (stateFilter) {
        data = data?.filter((item) => item?.state === stateFilter);
      }
      if (lgaFilter) {
        data = data?.filter((item) => item?.lga === lgaFilter);
      }
      if(organizationFilter){
        data = data?.filter(item => item?.organization === organizationFilter)
      }
      if(reservedOrgFilter){
        data = data?.filter(item => item?.reservedOrg === reservedOrgFilter)
      }
      setFilterUsers(data);
    } else {
      setFilterUsers(users);
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filterUsers?.length) : 0;

  const filteredUsers = applySortFilter(
    filterUsers,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound =
    (!filteredUsers?.length && !!filterName) || filterUsers?.length === 0;

  const handleDeleteUser = (documentId, uid) => {
    console.log("-----------------UID: ", uid);
    deleteUser(db, documentId, uid).then(() => {
      deleteUserByUid({ uid })
        .then((data) => {
          setNotify({
            open: true,
            message: "User deleted successfully!",
            type: "success",
          });
          console.log(
            "-----------------------------deleted the user throught functions: ",
            data
          );
          handleGetUsers();
          setLoading(false);
        })
        .catch((error) => {
          console.log("-------------------erorr in function: ", error);
          setNotify({ open: true, message: error?.message, type: "error" });
          setLoading(false);
        });
    });
  };

  return (
    <>
      {isModalOpen && (
        <CreateUser
          open={isModalOpen}
          handleClose={toggleModal}
          isUserCreated={handleGetUsers}
        />
      )}
      {isEditModalOpen && isEditing && (
        <CreateUser
          open={isEditModalOpen}
          handleClose={toggleEditModal}
          isUserCreated={handleGetUsers}
          isEditing={isEditing}
        />
      )}
      <Helmet>
        <title> User | ATM Networks </title>
      </Helmet>

      <Container maxWidth="xl">
      <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography variant="h4" gutterBottom>
            User Permissions
          </Typography>

          <Grid item xs={12} sm={6} md={4}>
          <Stack sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
             variant="contained"
             disableElevation
             sx={{
             width: { xs: "100%", sm: "300px" },
             height: "60px",
             fontSize: "18px",
             fontWeight: "700",
             }}
              onClick={toggleModal}
            >
              + New User
            </Button>
          </Stack>
          </Grid>
          
        </Box>

        <Card>
          <UserListToolbar
            numSelected={selected?.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            handleFilterUsers={handleFilterUsers}
            filterUsers={filterUsers}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={filterUsers?.length}
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
                          _id,
                          firstName,
                          lastName,
                          role,
                          organization,
                          reservedOrg,
                          status,
                          uid,
                        } = row;
                        const selectedUser = selected.indexOf(_id) !== -1;
                        return (
                          <TableRow
                            hover
                            key={_id}
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
                                  {`${firstName} ${lastName}`}
                                </Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align="left">{role}</TableCell>

                            <TableCell align="left">
                              {!organization ? "-" : organization}
                            </TableCell>

                            <TableCell align="left">
                              {reservedOrg}
                            </TableCell>

                            {/* <TableCell align="left">
                            {isVerified ? "Yes" : "No"}
                          </TableCell> */}

                            <TableCell align="left">
                              <Label
                                color={
                                  status === "active" ? "success" : "error"
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
                                <img
                                  src={require("../assets/icons/edit.png")}
                                  alt="edit user"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    toggleEditModal();
                                    setIsEditing({ _id, uid });
                                  }}
                                />
                                <img
                                  src={require("../assets/icons/delete.png")}
                                  alt="delete user"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Are you sure, you want to delete user?"
                                      )
                                    ) {
                                      handleDeleteUser(_id, uid);
                                    }
                                  }}
                                />
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

                {!loading && (isNotFound || filteredUsers?.length < 1) && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 20 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h4" paragraph>
                            No Users Found
                          </Typography>

                          <Typography variant="h6">Create a User.</Typography>
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
            count={filterUsers?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      {/* <Popover
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
      </Popover> */}
    </>
  );
}
