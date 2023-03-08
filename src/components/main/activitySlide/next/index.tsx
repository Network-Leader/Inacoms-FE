import styled from "@emotion/styled";
import { useSwiper } from "swiper/react";
import Image from "next/image";
const Btn = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  cursor: pointer;
  z-index: 333;
`;

const MainSwiperNextBtn = () => {
  const swiper = useSwiper();
  return (
    <Btn
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <Image
        src={"/images/icons/apply/right_arrow.png"}
        alt="arrow"
        width={24}
        height={36}
      />
    </Btn>
  );
};

export default MainSwiperNextBtn;
