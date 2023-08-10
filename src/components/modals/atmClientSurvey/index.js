import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ATMClientSurvey from "src/surveys/clientExitInterview";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1200,
  width: "100%",
  height: "100%",
  overflow: "auto",
  bgcolor: "#E9E9E9",
  boxShadow: 24,
};

function ATMClientSurveyModal(props) {
  const { isOpen, handleClose, name } = props;
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              p: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{ width: "60px", height: "60px", background: "black" }}
              ></Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography fontSize="0.9em" color="#4F4F4F">
                  Preview Survey:
                </Typography>
                <Typography fontWeight="700" color="#4F4F4F">
                  C19RM/RSSH COMMUNITY LED MONITORING IN ATM INTERVENTION
                </Typography>
              </Box>
            </Box>
            <Button
              color="error"
              sx={{ fontSize: 24, borderRadius: "50%" }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>
          {/* survey content */}
          <Box
            sx={{
              marginTop: 4,
              width: "100%",
              background: "white",
              borderRadius: "5px",
              margin: "20px auto",
              p: 2,
              fontSize: "1em",
            }}
          >
            <ATMClientSurvey name={name} startedAt={new Date().toISOString()} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ATMClientSurveyModal;
