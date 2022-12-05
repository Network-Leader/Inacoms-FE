import Apply from "../components/main/apply";
import Be from "../components/main/be";
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
      <Be />
      <Apply />
    </>
  );
};

export default Home;
