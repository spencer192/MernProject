import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'

const LayoutComp = ({children}) => {
  return (
    <>
        <Header />
            <main style={{minHeight: "90vh" }}>
                {children}
            </main>
        <Footer />
    </>
  )
}

export default LayoutComp