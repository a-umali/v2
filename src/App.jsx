import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LoginForm } from "./views/LoginForm";
import { WelcomePage } from "./views/WelcomePage";
import { MainProvider } from "./store/mainStore";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "./themes/baseTheme";
import { PatientInformation } from "./views/PatientInformation";
import { MyPage } from "./views/MyPage";
import SummaryPage from './views/SummaryPage'; 
import { PatientSummary } from "./components/PatientSummary";

const App = () => {
  return (
    <MainProvider>
      <ThemeProvider theme={baseTheme}>
        <Box display="flex" flexDirection="column" height="100vh">
          <Navbar />

          <Box flex="1" overflow="auto">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/messages" element={<WelcomePage />} />
              <Route path="/patient-info" element={<PatientInformation />} />
              <Route path="/summary" element={<SummaryPage />} />
              <Route path="/patient-summary" element={<PatientSummary />} />
              <Route path="*" element={<div>Hey, this path doesn't exist yet...</div>} />
            </Routes>
          </Box>
          {/* <Footer /> */}
        </Box>
      </ThemeProvider>
    </MainProvider>
  );
};

export default App;
