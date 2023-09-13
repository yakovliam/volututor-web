import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import FourOhFourPage from "./pages/404Page";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import HowItWorksPage from "./pages/HowItWorksPage";

function App() {
  return (
    <ChakraProvider>
      <RouteContainer />
    </ChakraProvider>
  );
}

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/404" element={<FourOhFourPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const AppLayout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box>
        <AppHeader />
      </Box>
      <Flex flex="1">
        <Outlet />
      </Flex>
      <Box>
        <AppFooter />
      </Box>
    </Box>
  );
};

export default App;
