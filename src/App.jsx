// import React from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import Forget from './Forget'
// import Reset from './Reset'
// import Navbar from './components/Navbar'
// // import Otp from './Otp'

// const App = () => {
//   return (
//     <div>

//       <Navbar />
//       <Routes>
//         {/* <Route  path='/' element={<Otp/>}/> */}
//         <Route path='/' element={<SignUp />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/forget' element={<Forget />} />
//         <Route path='/reset/:resetToken' element={<Reset />} />





//       </Routes>
//     </div>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Default from "./pages/Default";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/default" element={<Default />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
