import Activity from "../components/about/activity";
import Bottom from "../components/about/bottom";
import Title from "../components/about/title";
import TitleText from "../components/about/titleText";
import Track from "../components/about/track";
import Plan from "../components/apply/plan";
const About = () => {
  return (
    <>
      <div style={{ minHeight: "4500px", backgroundColor: "black" }}>
        <Title />
      </div>
      <TitleText />
      <Track />
      <Activity />
      <Plan />
      <Bottom />
    </>
  );
};

export default About;
