import './App.css';

import { Route, Routes } from 'react-router-dom';

// import RequireAuth from './Components/Auth/RequireAuth';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CourseDescription from './Pages/Course/CourseDescription';
import CourseList from './Pages/Course/CourseList';
import DisplayLectures from "./Pages/Course/DisplayLectures";
import MyCourses from './Pages/Course/MyCourses';
import Denied from './Pages/Denied';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Checkout from './Pages/Payment/Checkout';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import Signup from './Pages/Signup';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/course/description" element={<CourseDescription />} />
        <Route path="/mycourses" element={<MyCourses />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />



        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/success' element={<CheckoutSuccess />} />
        <Route path='/checkout/fail' element={<CheckoutFailure />} />
        <Route path='/course/displaylectures' element={<DisplayLectures />} />

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
