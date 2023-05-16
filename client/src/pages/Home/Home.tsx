import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import BestDeals from "./BestDeals";
import ClassifiedProds from "./ClassifiedProds";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div className="bg-[#E5E5E5]">
      <Header />
      <Navbar />
      <Carousel />
      <BestDeals />
      <ClassifiedProds />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
