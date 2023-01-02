import Link from "../components/apply/link";
import Plan from "../components/apply/plan";
import ApplySlider from "../components/apply/slider";
import ApplyTitle from "../components/apply/title";
import ApplyTitleText from "../components/apply/titleText";
import Welcome from "../components/apply/welcome";
import MainApply from "../components/main/apply";

const Apply = () => {
  return (
    <>
      <ApplyTitle />
      <ApplyTitleText />
      <Welcome />
      <Plan />
      <div
        style={{ width: "100%", backgroundColor: "black", height: "368px" }}
      />
      <MainApply />
      <div
        style={{ width: "100%", backgroundColor: "black", height: "345px" }}
      />
      <Link />
      <ApplySlider />
    </>
  );
};

export default Apply;
