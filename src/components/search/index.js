import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Iconify from "../iconify/Iconify";

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

const Search = ({filterName, handleFilterByName}) => {
  return (
    <StyledSearch
      value={filterName}
      onChange={e => handleFilterByName(e.target.value)}
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
  );
};

export default Search;
