import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="absolute bottom-0 top-0">
      <Header />
      <main className="main-height">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
