import Ads from "../../components/Ads";
import Ads2 from "../../components/Ads2";
import Arrivals from "../../components/arrivals/Arrivals";
import BannerCat from "../../components/BannerCat";
import Popular from "../../components/popular/Popular";
import TopStores from "../../components/topStores/TopStores";
import Trend from "../../components/trending/Trend";
import TrendMen from "../../components/trending/TrendMen";
import "../../sass/pages/_home.scss";

const Home = () => {
  return (
    <section className="wrapper home">
      <BannerCat />
      <Trend />
      <Popular />
      <Ads />
      <TopStores />
      <TrendMen />
      <Ads2 />
      <Arrivals />
    </section>
  );
};

export default Home;
