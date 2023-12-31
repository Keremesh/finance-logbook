import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
// import MiniDrawer from "./MiniDrawer";
import PlayerDetail from "./PlayerDetail";
import CreatePlayer from "./CreatePlayer";
import PlayerList from "./PlayerList";
import CreateStatsy from "./CreateStatsy";


// import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    // <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
        <Route path="/player/add" element={<CreatePlayer />} />
        <Route path="/player" element={<PlayerList />} />
        <Route path="/statsy/add" element={<CreateStatsy />} />

        {/* <Route path="/drawer" element={<MiniDrawer />} /> */}

      </Routes>
    </BrowserRouter>
    // </ChakraProvider>
  );
}

export default App;