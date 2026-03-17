import { Helmet } from "react-helmet-async";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const canonicalUrl = `https://sanat-yayinn.vercel.app${location.pathname}`;

  return (
    <div className="app">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
