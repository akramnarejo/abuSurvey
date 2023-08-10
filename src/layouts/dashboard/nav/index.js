import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
// mock
import account from "../../../_mock/account";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Logo from "../../../components/logo";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section";
//
import navConfig from "./config";
import { useUserAuth } from "src/context";
import { useStore } from "src/store";
// ----------------------------------------------------------------------

const NAV_WIDTH = 350;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const navigate = useNavigate();
  const { logOut } = useUserAuth();

  const userInfo = useStore((state) => state?.userInfo);
  const userRole = userInfo?.role === 'super-admin' || userInfo?.role === 'supervisor';
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          width: "90%",
          // border: "1px solid",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <Box
          sx={{
            mb: 10,
            display: "flex",
            alignItems: "center",
            // justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <Logo />
          <Typography variant="h4">
            {userInfo?.organization?.toUpperCase()} NETWORK
          </Typography>
        </Box>
        {/* </Box> */}

        {/* <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {account.role}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box> */}

        <NavSection
          data={
            userRole
              ? navConfig?.filter((item) => item?.path !== "/survey" && item?.path !== "/file-upload")
              : navConfig?.filter(
                  (item) =>
                    item?.path !== "/submission" &&
                    item?.path !== "/user-permissions" &&
                    item?.path !== "/admin-filemanager"
                )
          }
          sx={{ width: "100%", px: 2, flex: 3 }}
        />

        {/* <Box sx={{ flexGrow: 1 }} /> */}

        <Box sx={{ px: 2.5, pb: 0, mt: 10 }}>
          <Stack
            alignItems="center"
            spacing={3}
            sx={{ pt: 5, borderRadius: 2, position: "relative" }}
          >
            <Box
              component="img"
              src={require("../../../assets/images/profile.png")}
              sx={{ width: 100, position: "absolute", top: -50 }}
            />

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6">{userInfo?.name}</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {userInfo?.email}
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Box
              sx={{ boxShadow: 16, p: 1, borderRadius: 1, cursor: "pointer" }}
            >
              <img
                src={require("../../../assets/icons/settings.png")}
                alt="settings"
              />
            </Box>
            <Box
              sx={{ boxShadow: 16, p: 1, borderRadius: 1, cursor: "pointer" }}
              onClick={handleLogout}
            >
              <img
                src={require("../../../assets/icons/logout.png")}
                alt="logout"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "white",
              borderRightStyle: "none",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
