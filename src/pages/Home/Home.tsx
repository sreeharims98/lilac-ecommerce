import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import BestDeals from "./BestDeals";
import ClassifiedProds from "./ClassifiedProds";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <BestDeals />
      <ClassifiedProds />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
