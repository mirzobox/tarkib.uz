import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayouts() {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
