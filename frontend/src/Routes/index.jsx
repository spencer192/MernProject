import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import { RouterCom } from './RouterCom'
import Contact from '../Pages/ContactUs/Contact'

const MainRouter = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path={RouterCom.homePage} element={<HomePage />} />
                <Route path={RouterCom.contactUs} element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}

export default MainRouter