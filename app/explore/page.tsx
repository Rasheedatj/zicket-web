import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/explore/MainContent";

function page() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] min-h-screen">
      <MainContent />
    </div>
  );
}

export default page;
