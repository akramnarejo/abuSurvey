import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ATMClientSurveyModal from "../atmClientSurvey";
import KiiHealthFacilitySurveyModal from "../kiiHealthSurvey";
import KiiLgaSurveyModal from "../kiiLgaSurvey";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 672,
  bgcolor: "background.paper",
  borderRadius: 2,
  width: "80%", // Set the width to 80% of the parent container's width
  boxShadow: 24,
  p: 2,
};

function SelectSurvey(props) {
  const { isOpen, handleClose } = props;
  const [openATMClient, setOpenATMClient] = useState(false);
  const [openKiiHealth, setKiiHealth] = useState(false)
  const [openKiiLga, setKiiLga] = useState(false)

  const toggleATMClientModal = () => setOpenATMClient(!openATMClient);
  const toggleLgaModal = () => setKiiLga(!openKiiLga);
  const toggleKiiHealthModal = () => {
    console.log('kii helath modal toggled.')
    setKiiHealth(!openKiiHealth)
  }

  return (
    <div>
      {openATMClient && <ATMClientSurveyModal
        isOpen={openATMClient}
        handleClose={toggleATMClientModal}
        name="ATM Client Exist Interview Survey"
      />}
      {openKiiHealth && <KiiHealthFacilitySurveyModal
        isOpen={openKiiHealth}
        handleClose={toggleKiiHealthModal}
        name="Kii Health Facility"
      />}
      {
        openKiiLga && <KiiLgaSurveyModal
        isOpen={openKiiLga}
        handleClose={toggleLgaModal}
        name="Kii Lga" 
        />
      }
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              background: "#2C3F8D",
              display: "flex",
              gap: 2,
              alignItems: "center",
              borderRadius: 2,
              p: "18px 24px",
              color: "white",
            }}
          >
            <img
              src={require("../../../assets/icons/survey.png")}
              alt="survey"
            />
            <Box>
              <Typography component="h3" fontSize="26px" fontWeight={700}>
                Start a Survey
              </Typography>
              <Typography fontSize="1em">
                Choose one of the survey template options below, So you can
                continue to fill out the survey.
              </Typography>
            </Box>
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            sx={{ marginTop: 2 }}
          >
            Survey Template Categories
          </Typography>
          {/* tempaltes */}
          <Box sx={{ marginTop: 2 }}>
            <Box
              sx={{
                background: "#F2F5FF",
                display: "flex",
                gap: "18px",
                alignItems: "center",
                padding: "18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                toggleATMClientModal();
                // handleClose();
              }}
            >
              <img
                src={require("../../../assets/icons/template.png")}
                alt="template"
                width="31px"
                height="36px"
              />
              <Typography component="h4" fontSize="18px" fontWeight="700">
                ATM Client Exist Interview Survey
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Box
              sx={{
                background: "#F2F5FF",
                display: "flex",
                gap: "18px",
                alignItems: "center",
                padding: "18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                toggleKiiHealthModal();
                // handleClose();
              }}
            >
              <img
                src={require("../../../assets/icons/template.png")}
                alt="template"
                width="31px"
                height="36px"
              />
              <Typography component="h4" fontSize="18px" fontWeight="700">
                KII Health
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Box
              sx={{
                background: "#F2F5FF",
                display: "flex",
                gap: "18px",
                alignItems: "center",
                padding: "18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                toggleLgaModal();
                // handleClose();
              }}
            >
              <img
                src={require("../../../assets/icons/template.png")}
                alt="template"
                width="31px"
                height="36px"
              />
              <Typography component="h4" fontSize="18px" fontWeight="700">
                KII LGA
              </Typography>
            </Box>
          </Box>
          <Button
            color="error"
            variant="outlined"
            sx={{ width: "100%", marginTop: 2 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default SelectSurvey;
