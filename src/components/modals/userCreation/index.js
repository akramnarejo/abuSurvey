import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Divider,
  useTheme,
} from "@mui/material";
import {LoadingButton} from '@mui/lab'
import { useFormik } from "formik";
import * as yup from "yup";
import Select from "react-select";
import ErrorMessage from "src/utils/errorMessage";
import SelectStyling from "src/utils/selectStyling";
import { ATMNETWORKS, ORGANIZATIONS, RESERVED_ORGANIZATIONS, ROLES, STATUS, STATES, LGAs } from "src/constants";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {useUserAuth} from 'src/context'
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { getFunctions, httpsCallable } from "firebase/functions";
const style = {
  maxWidth: "xl",
  width: "100%",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: "10px 40px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const CreateUser = (props) => {
  const { open, handleClose, isEditing={}, isUserCreated } = props;
  const {user, signUp, db, createUser} = useUserAuth();
  const { setLoading, loading, users, updateUser, setNotify } = useStore(
    (state) => ({
      setLoading: state?.setLoading,
      loading: state?.loading,
      users: state?.users,
      updateUser: state?.updateUser,
      setNotify: state?.setNotify,
    }),
    shallow
  );
  const [reservedOrgOptions, setReservedOrgOptions] = useState([])
  const functions = getFunctions()
  const updateUserByUid = httpsCallable(functions, 'updateUser')
  const data = users?.find(item => item?._id === isEditing?._id)
  useEffect(() => {
    if(isEditing?._id){
      setValues({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        organization: ATMNETWORKS?.find(item => item?.value === data?.organization)?.value,
        role: data?.role,
        status: data?.status,
        state: data?.state,
        lga: data?.lga,
        ward: data?.ward ?? data?.postalCode,
        address: data?.address,
        reservedOrg: data?.reservedOrg,
      })
      setReservedOrgOptions(RESERVED_ORGANIZATIONS?.[data?.organization])
    }
  }, [])

//Abubakar
// Step 3: Filter organizations based on selected ATM Network
// const filteredOrganizations = RESERVED_ORGANIZATIONS.filter((org) => {
//   // Assuming each organization has a property called "network" that stores the ATM Network it belongs to
//   return org.network === ATMNETWORKS;
// });

// // Step 4: Update Organization Dropdown Options based on the filtered organizations
// const organizationOptions = filteredOrganizations.map((org) => ({
// label: org.label,
// value: org.value,
// }));

// Set the organizationOptions state variable
// 

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: null,
      organization: "",
      reservedOrg: "",
      role: "",
      status: "",
      state: "",
      lga: "",
      ward: "",
      address: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string(),
      lastName: yup.string(),
      email: yup.string(),
      password: yup.string(),
      organization: yup.string(),
      reservedOrg: yup.string(),
      role: yup.string(),
      status: yup.string(),
      state: yup.string(),
      lga: yup.string(),
      address: yup.string(),
      ward: yup.string(),
    }),
    onSubmit: (values) => {
      const {firstName, lastName, email, password, organization, role, status, state, lga, ward, address, reservedOrg} = values
      if(email){
        if(isEditing?._id){
          // update user
          const userData = {email, password}
          try {
            const payload = {
              uid: isEditing?.uid,
              userData,
            }
            setLoading(true)
            updateUserByUid(payload).then(data => {
              const payload = {
                uid: isEditing?.uid,
                firstName,
                lastName,
                email,
                organization,
                role,
                status,
                state,
                lga,
                ward,
                address,
                reservedOrg,
              }
              updateUser(db, isEditing?._id, payload).then(data => {
                isUserCreated()
                setNotify({ open: true, message: 'User updated successfully!', type: 'success' })
                handleClose()
                setLoading(false)
              }).catch(() => setLoading(false))
            })
          } catch (error) {
            console.log('-------udpating user error-----: ', error)
            setNotify({ open: true, message: error?.message, type: 'error' })
            setLoading(false)
          }
        }else{
          // create new user
            try {
              signUp(email, password).then(data => {
                // setLoading(false)
                console.log('-----------user created: ', data)  
                const payload = {
                  uid: data?.user?.uid,
                  firstName,
                  lastName,
                  email,
                  organization,
                  role,
                  status,
                  state,
                  lga,
                  ward,
                  address,
                  reservedOrg,
                }
                createUser(payload).then(() => {
                  setLoading(false)
                  setNotify({ open: true, message: 'User created successfully!', type: 'success' })
                  isUserCreated()
                  handleClose()
                  // console.log('------------------user response: ', response)
                })
              })
            } catch (error) {
              setLoading(false)
              setNotify({ open: true, message: error?.message, type: 'error' })
            }
        }
      }
    },
  });

  const { values, errors, touched, setFieldValue, handleSubmit, handleBlur, setValues } =
    formik;

   // Access the theme
   const theme = useTheme();

   // Set the maximum width of the modal at a specific breakpoint (sm in this case)
   const modalMaxWidth = theme.breakpoints.up("sm") ? "70%" : "100%";
 

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "modalMaxWidth",
          }}
        >
          <h2>Add User</h2>
          <CancelOutlinedIcon
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Divider />
        <form onSubmit={handleSubmit}>
          <Box>
            <h3>User Information</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="firstName" className="label">
                    First Name
                  </p>
                  <input
                    id="firstName"
                    placeholder="First Name"
                    className="styled-input"
                    value={values?.firstName}
                    onChange={e => setFieldValue('firstName', e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="lastName" className="label">
                    Last Name
                  </p>
                  <input
                    id="lastName"
                    placeholder="Last Name"
                    className="styled-input"
                    value={values?.lastName}
                    onChange={e => setFieldValue('lastName', e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="email" className="label">
                    Email address
                  </p>
                  <input
                    id="email"
                    placeholder="Email Address"
                    className="styled-input"
                    type='email'
                    required
                    value={values?.email}
                    onChange={e => setFieldValue('email', e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="password" className="label">
                    Password
                  </p>
                  <input
                    id="password"
                    placeholder="Password"
                    className="styled-input"
                    type='password'
                    required
                    value={values?.password}
                    onChange={e => setFieldValue('password', e.target.value)}
                  />
                </Box>
              </Grid>             

              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    ATM Network
                  </p>
                  <Select
                    name="organization"
                    placeholder="Select"
                    isClearable
                    
                    options={ATMNETWORKS}

                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={values.organization ? ATMNETWORKS?.find(item => item?.value === values?.organization) : null}
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("organization", e?.value);
                      setReservedOrgOptions(RESERVED_ORGANIZATIONS?.[e?.value])
                    }}
                  />
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    name="organization"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    Organization
                  </p>
                  <Select
                    name="reservedOrg"
                    placeholder="Select"
                    isClearable
                    options={reservedOrgOptions}

                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={values.reservedOrg ? reservedOrgOptions?.find(item => item?.value === values?.reservedOrg) : null}
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("reservedOrg", e?.value);
                    }}
                  />
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    name="reservedOrg"
                  />
                </Box>
              </Grid>


            </Grid>
          </Box>
          <Box>
            <h3>Permission</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    Role
                  </p>
                  <Select
                    name="role"
                    placeholder="Select"
                    isClearable
                    options={ROLES?.map((item) => ({
                      label: item.label,
                      value: item.value,
                    }))}
                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={
                      values?.role
                        ? ROLES?.find((item) => item?.value === values?.role)
                        : null
                    }
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("role", e?.value);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    Status
                  </p>
                  <Select
                    name="role"
                    placeholder="Select"
                    isClearable
                    options={STATUS?.map((item) => ({
                      label: item.label,
                      value: item.value,
                    }))}
                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={
                      values?.status
                        ? STATUS?.find((item) => item?.value === values?.status)
                        : null
                    }
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("status", e?.value);
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <h3>Contact Information</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="address" className="label">
                    Address
                  </p>
                  <input
                    id="address"
                    placeholder="Address"
                    className="styled-input"
                    value={values?.address}
                    onChange={e => setFieldValue('address', e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    State
                  </p>
                  <Select
                    name="state"
                    placeholder="Select"
                    isClearable
                    options={STATES?.map((item) => ({
                      label: item.label,
                      value: item.value,
                    }))}
                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={
                      values?.state
                        ? STATES?.find((item) => item?.value === values?.state)
                        : null
                    }
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("state", e?.value);
                      setFieldValue("lga", null);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p className="label">
                    LGA
                  </p>
                  <Select
                    name="lga"
                    placeholder="Select"
                    isClearable
                    options={LGAs[`${values?.state}`]}
                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={
                      values?.lga
                        ? LGAs[`${values?.state}`]?.find((item) => item?.value === values?.lga)
                        : null
                    }
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("lga", e?.value);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: "100%" }}>
                  <p htmlFor="ward" className="label">
                    Ward
                  </p>
                  <input
                    id="ward"
                    placeholder="Ward"
                    className="styled-input"
                    value = {values?.ward}
                    onChange={(e) => {
                      setFieldValue('ward', e?.target?.value)
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{margin: '40px 0px', display: 'flex', gap: 2, justifyContent:'flex-end'}}>
            <LoadingButton onClick={handleClose} variant='outlined' color='error' sx={{width: 150}}>Discard</LoadingButton>
            <LoadingButton type="submit" variant='outlined' sx={{width: 200}} loading={loading}>{isEditing?._id ? 'Update' : 'Create'}</LoadingButton>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateUser;
