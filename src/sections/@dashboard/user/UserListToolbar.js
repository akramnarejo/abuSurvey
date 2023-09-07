import PropTypes from "prop-types";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useEffect, useState } from "react";
// component
import Iconify from "../../../components/iconify";
import Select from "react-select";
import ErrorMessage from "src/utils/errorMessage";
import SelectStyling from "src/utils/selectStyling";
import {
  ORGANIZATIONS,
  ROLES,
  STATUS,
  STATES,
  LGAs,
  RESERVED_STATES,
  RESERVED_ORGANIZATIONS,
} from "src/constants";
import { useStore } from "src/store";
// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 2,
  padding: theme.spacing(3, 3, 3, 3),
  background: "#F9FAFB",

  // Move the media query styles inside the "sx" prop
  // Set responsive width using media queries
  width: { xs: "100%", md: "30%", lg: "20%" },

  // Add additional styles as needed
}));

const StyledFiltersbar = styled(Toolbar)(({ theme }) => ({
  height: 26,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
  background: "#F9FAFB",
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: "auto",
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
  handleFilterSurveys = () => {},
  handleFilterUsers = () => {},
  filteredSurveys,
}) {
  const users = useStore((state) => state?.users);
  const surveys = useStore((state) => state?.surveys);
  const userInfo = useStore((state) => state?.userInfo);

  const [userOptions, setUserOptions] = useState([]);
  const [reservedOrgOptions, setReservedOrgOptions] = useState([]);
  const [reservedOrgFilter, setReservedOrgFilter] = useState(null);
  const [organizationFilter, setOrganizationFilter] = useState(null);
  const [userFilter, setUserFilter] = useState(null);
  const [stateFilter, setStateFilter] = useState(null);
  const [lgaFilter, setLgaFilter] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  useEffect(() => {
    if (userInfo?.role === "supervisor") {
      setOrganizationFilter(userInfo?.organization);
      setStateFilter(userInfo?.state);
    }
  }, []);
  useEffect(() => {
    setReservedOrgOptions(RESERVED_ORGANIZATIONS[organizationFilter]);
  }, [organizationFilter]);

  useEffect(() => {
    handleFilterSurveys({
      organizationFilter,
      reservedOrgFilter,
      userFilter,
      dateFrom,
      dateTo,
    });
    handleFilterUsers({
      organizationFilter,
      reservedOrgFilter,
      userFilter,
      dateFrom,
      dateTo,
    });
  }, [
    organizationFilter,
    reservedOrgFilter,
    userFilter,
    dateFrom,
    dateTo,
    stateFilter,
    lgaFilter,
  ]);

  const FlexContainer = styled(Box)({
    display: "flex",
    flexDirection: "row", // Or "column" if you want the boxes stacked vertically
    gap: "8px", // Adjust the gap between the boxes as needed
    flexWrap: "wrap", // Allow boxes to wrap to the next row if needed
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "center", // Center items horizontally on smaller screens
    // },
  });

  const handleChangeNameFilter = e => onFilterName(e.target.value)

  return (
    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: "primary.main",
          bgcolor: "primary.lighter",

          // Set responsive width using media queries
          width: { xs: "100%", md: "30%", lg: "20%" },
        }),
      }}
    >
      {["/submission", "/user-permissions"]?.includes(
        window.location.pathname
      ) && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <FlexContainer>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: 2,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {/* <Box sx={{ width: "100%", height: "40px"}}>
            <StyledSearch
            value={filterName}
            onChange={onFilterName}
            placeholder="Search..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
              }
            />     
            </Box> */}

              <Box sx={{ width: "100%", height: "40px" }}>
                <Select
                  name="atmNetwork"
                  placeholder="ATM Network"
                  isClearable
                  options={ORGANIZATIONS?.map((item) => ({
                    label: item.label,
                    value: item.value,
                  }))}
                  styles={SelectStyling}
                  // components={{
                  //   IndicatorSeparator: () => null,
                  // }}

                  //Abubakar: I enabled the Network for a Supervisor
                  //isDisabled={userInfo?.role === 'supervisor'}
                  value={
                    organizationFilter
                      ? ORGANIZATIONS?.find(
                          (item) => item?.value === organizationFilter
                        )
                      : null
                  }
                  // onBlur={handleBlur}
                  onChange={(e) => {
                    setOrganizationFilter(e?.value);
                    // setUserOptions(users?.filter(user => user?.organization === e?.value))
                    if (!e) {
                      setStateFilter(null);
                    }
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", height: "40px" }}>
                <Select
                  name="organization"
                  placeholder="Organization"
                  isClearable
                  options={reservedOrgOptions ?? []}
                  styles={SelectStyling}
                  // components={{
                  //   IndicatorSeparator: () => null,
                  // }}
                  // isDisabled={userInfo?.role === 'supervisor'}
                  value={
                    reservedOrgOptions?.find(
                      (item) => item?.value === reservedOrgFilter
                    ) ?? null
                  }
                  // onBlur={handleBlur}
                  onChange={(e) => {
                    setReservedOrgFilter(e?.value);
                    if (!e) {
                      setReservedOrgFilter(null);
                    }
                  }}
                />
              </Box>

              <Box sx={{ width: "100%", height: "40px" }}>
                <Select
                  name="state"
                  placeholder="State"
                  isClearable
                  options={
                    organizationFilter
                      ? RESERVED_STATES[organizationFilter]
                      : []
                  }
                  styles={SelectStyling}
                  // components={{
                  //   IndicatorSeparator: () => null,
                  // }}
                  isDisabled={userInfo?.role === "supervisor"}
                  value={
                    stateFilter
                      ? RESERVED_STATES[organizationFilter]?.find(
                          (item) => item?.value === stateFilter
                        )
                      : null
                  }
                  // onBlur={handleBlur}
                  onChange={(e) => {
                    if (e) {
                      setStateFilter(e?.value);
                      // setUserOptions(userOptions?.filter(user => user?.state === e?.value))
                    } else {
                      setStateFilter(null);
                      setLgaFilter(null);
                    }
                  }}
                />
              </Box>

              <Box sx={{ width: "100%", height: "40px" }}>
                <Select
                  name="lga"
                  placeholder="LGA"
                  isClearable
                  options={LGAs[`${stateFilter}`]}
                  styles={SelectStyling}
                  // components={{
                  //   IndicatorSeparator: () => null,
                  // }}
                  value={
                    lgaFilter
                      ? LGAs[`${stateFilter}`]?.find(
                          (item) => item?.value === lgaFilter
                        )
                      : null
                  }
                  // onBlur={handleBlur}
                  onChange={(e) => {
                    setLgaFilter(e?.value);
                    setUserOptions(
                      users?.filter((user) => user?.lga === e?.value)
                    );
                  }}
                />
              </Box>

              {window.location.pathname === "/submission" && (
                <Box sx={{ width: "100%", height: "40px" }}>
                  <Select
                    name="user"
                    placeholder="User"
                    isClearable
                    options={userOptions?.map((item) => ({
                      label: item?.firstName + " " + item?.lastName,
                      value: item?.email,
                    }))}
                    styles={SelectStyling}
                    // components={{
                    //   IndicatorSeparator: () => null,
                    // }}
                    value={
                      userFilter
                        ? userOptions?.find(
                            (item) => item?.value === userFilter
                          )
                        : null
                    }
                    // onBlur={handleBlur}
                    onChange={(e) => {
                      setUserFilter(e?.value);
                    }}
                  />
                </Box>
              )}
            </Box>

            {window.location.pathname === "/submission" && (
              <>
                <Box>
                  <p style={{ margin: 0, color: "gray" }}>Date From</p>
                  <input
                    type="date"
                    style={{
                      borderRadius: 5,
                      border: "1px solid #cccccc",
                      padding: "10px",
                    }}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                </Box>

                <Box>
                  <p style={{ margin: 0, color: "gray" }}>Date To</p>
                  <input
                    type="date"
                    style={{
                      borderRadius: 5,
                      border: "1px solid #cccccc",
                      padding: "10px",
                    }}
                    min={dateFrom}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </Box>
              </>
            )}

            {/* <Box>
              <StyledSearch
                value={filterName}
                onChange={handleChangeNameFilter}
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <Iconify
                      icon="eva:search-fill"
                      sx={{ color: "text.disabled", width: 20, height: 20 }}
                    />
                  </InputAdornment>
                }
              />
            </Box> */}
          </FlexContainer>

          {window.location.pathname === "/submission" && (
            <FlexContainer style={{ overflowY: "auto" }}>
              <Box
                sx={{
                  width: "100%",
                  marginTop: 3,
                  display: "flex",
                  gap: 4,
                  flexDirection: "row",
                  flexWrap: "",
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #CCCCCC",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Total CEI</p>
                  <p style={{ fontWeight: 700, fontSize: 22 }}>
                    {filteredSurveys?.filter(
                      (item) =>
                        item?.name === "ATM Client Exist Interview Survey"
                    )?.length ?? 0}
                  </p>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #CCCCCC",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Total KII - Health Facility</p>
                  <p style={{ fontWeight: 700, fontSize: 22 }}>
                    {filteredSurveys?.filter(
                      (item) => item?.name === "Kii Health Facility"
                    )?.length ?? 0}
                  </p>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    borderRadius: "5px",
                    border: "1px solid #CCCCCC",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Total KII - LGA</p>
                  <p style={{ fontWeight: 700, fontSize: 22 }}>
                    {filteredSurveys?.filter((item) => item?.name === "Kii Lga")
                      ?.length ?? 0}
                  </p>
                </Box>
              </Box>
            </FlexContainer>
          )}
        </div>
      )}

      {/* {window.location.pathname === "/user-permissions" && (
        <div
          style={{ width: "100%", display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          <Box sx={{ width: "100%", height: "40px" }} sm={{width:"300px"}}>
            <Select
              name="state"
              placeholder="State"
              isClearable
              options={STATES?.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
              styles={SelectStyling}
              // components={{
              //   IndicatorSeparator: () => null,
              // }}
              isDisabled={userInfo?.role === 'supervisor'}
              value={
                stateFilter
                  ? STATES?.find((item) => item?.value === stateFilter)
                  : null
              }
              // onBlur={handleBlur}
              onChange={(e) => {
                if(e){
                  setStateFilter(e?.value);
                }else{
                  setStateFilter(null)
                  setLgaFilter(null)
                }
              }}
            />
          </Box>
          <Box sx={{ width: "100%", height: "40px" }} sm={{width:"300px"}}>
            <Select
              name="lga"
              placeholder="LGA"
              isClearable
              options={LGAs[`${stateFilter}`]}
              styles={SelectStyling}
              // components={{
              //   IndicatorSeparator: () => null,
              // }}
              value={
                lgaFilter
                  ? LGAs[`${stateFilter}`]?.find(
                      (item) => item?.value === lgaFilter
                    )
                  : null
              }
              // onBlur={handleBlur}
              onChange={(e) => {
                setLgaFilter(e?.value);
              }}
            />
          </Box>
        </div>
      )} */}
    </StyledRoot>
  );
}
