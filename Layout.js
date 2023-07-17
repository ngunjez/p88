import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
  <>
    <Navbar />
    <main>{children}</main>
  </>
  )
}

export default Layout;