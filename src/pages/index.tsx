import ActivitySlide from "../components/main/activitySlide";
import MainApply from "../components/main/apply";
import Be from "../components/main/be";
import FloatingFilm from "../components/main/floating";
import Orientation from "../components/main/orientation";
import Status from "../components/main/status";
import Title from "../components/main/title";
import TitleText from "../components/main/titleText";

const Home = () => {
  return (
    <>
      <Title />
      <TitleText />
      <Status />
      <Orientation />
      <ActivitySlide />
      <FloatingFilm />
      <Be />
      <MainApply />
    </>
  );
};

export default Home;
