import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/explore/MainContent";
function page() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default page;
