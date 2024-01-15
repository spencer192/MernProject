import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import { RouterCom } from './RouterCom'
import Contact from '../Pages/ContactUs/Contact'
import Login from '../component/Auth/Login'
import SignUp from '../component/Auth/SignUp'

const MainRouter = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path={RouterCom.homePage} element={<HomePage />} />
                <Route path={RouterCom.contactUs} element={<Contact />} />
                <Route path={RouterCom.login} element={<Login />} />
                <Route path={RouterCom.signUp} element={<SignUp />} />

            </Routes>
        </Router>
    </>
  )
}

export default MainRouter