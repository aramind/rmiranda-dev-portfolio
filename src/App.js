import FloatingNav from "./components/navbar/FloatingNav";
import Navbar from "./components/navbar/Navbar";
import Footer from "./layout/Footer";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Navbar />
      <MainLayout />
      <FloatingNav />
      <Footer />
    </>
  );
}

export default App;
