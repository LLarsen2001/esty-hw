import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Hooks from "./demos/Hooks.js";
import { normalize } from 'styled-normalize'

import { createGlobalStyle } from "styled-components";
import Available from "./pages/available/Available";
import { Container } from "semantic-ui-react";
import Categories from "./pages/Categories/Categories";
import Buyers from "./pages/buyers/Buyers";

const GlobalStyle = createGlobalStyle`
   ${normalize}
`;




const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <>
      <Container>
        <FetchUser>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/available" element={<Available />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<UserAccount />} />
            </Route>
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </FetchUser>
      </Container>
    </>
  </>
);

export default App;

