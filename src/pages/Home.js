import { Container } from "@mui/material";
import React, { useContext } from "react";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { user, loading } = useContext(GlobalContext);

  
  return loading ? (
    <Loading />
  ) : (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <p>{user.user !== '' ? user.user : 'no user'}</p>
      </Container>
    </>
  );
}

export default Home