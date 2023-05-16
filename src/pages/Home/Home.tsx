import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import BestDeals from "./BestDeals";
import ClassifiedProds from "./ClassifiedProds";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <BestDeals />
      <ClassifiedProds />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
