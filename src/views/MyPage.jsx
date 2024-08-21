import React, { useState } from "react";
import { Grid, Paper, Typography, Button, Modal, Box } from "@mui/material";
import CardForm from "../components/CardForm";
import LineChart from "../components/LineChart";
import ReminderCalendar from "../components/ReminderCalendar";
import 'react-calendar/dist/Calendar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddchartIcon from '@mui/icons-material/Addchart';
import CareTeam from "../components/CareTeam";

export const MyPage = () => {
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [openChartModal, setOpenChartModal] = useState(false);

  const handleOpenCalendarModal = () => setOpenCalendarModal(true);
  const handleCloseCalendarModal = () => setOpenCalendarModal(false);

  const handleOpenChartModal = () => setOpenChartModal(true);
  const handleCloseChartModal = () => setOpenChartModal(false);

  return (
    <Grid container spacing={2} sx={{
      padding: 2,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100vh",
      overflow: "hidden" // Prevents overflow on the main container
    }}>
      {/* Column with xs=8 */}
      <Grid item xs={6}
        sx={{
          padding: 2,
          height: "100vh",
          overflow: "auto" // Allows scrolling if content overflows
        }}
      >
        <Paper sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardForm />
        </Paper>
      </Grid>

      {/* Buttons to open modals */}
      <Grid item xs={4}
        sx={{
          padding: 2,
          height: "100vh",
          overflow: "auto" // Allows scrolling if content overflows
        }}
      >
        <Paper sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div">
            Care Team and Recent Providers
          </Typography>
          <CareTeam />
          <Button variant="contained" color="primary" onClick={handleOpenCalendarModal} sx={{ mb: 2 }}>
            <CalendarMonthIcon /> Open Calendar
          </Button>
          <Button variant="contained" color="primary" onClick={handleOpenChartModal}>
            <AddchartIcon /> Open Line Chart
          </Button>
        </Paper>
      </Grid>

      {/* Modal for Calendar */}
      <Modal
        open={openCalendarModal}
        onClose={handleCloseCalendarModal}
        aria-labelledby="calendar-modal-title"
        aria-describedby="calendar-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxHeight: '70vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ReminderCalendar />
        </Box>
      </Modal>

      {/* Modal for Line Chart */}
      <Modal
        open={openChartModal}
        onClose={handleCloseChartModal}
        aria-labelledby="chart-modal-title"
        aria-describedby="chart-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxHeight: '70vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography id="chart-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            <h3>Check your BMI</h3>
            <p>Line will turn RED if you have an unhealthy BMI</p>
          </Typography>
          <Box sx={{ width: '100%', maxWidth: '600px', height: '400px' }}>
            <LineChart />
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

export const pages = [
  { title: "My Page", href: "/my-page" },
  { title: "Messages", href: "/messages" },
  { title: "Summary", href: "/summary" },
  { title: "Patient Information", href: "/patient-info" },
  { title: "Patient Summary", href: "/patient-summary" },
  { title: "Profile", href: "/profile" },
];
