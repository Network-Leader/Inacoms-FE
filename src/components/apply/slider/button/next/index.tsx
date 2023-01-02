import styled from "@emotion/styled";
import { useSwiper } from "swiper/react";
import Image from "next/image";
const Btn = styled.div`
  position: absolute;
  top: 45%;
  right: 25%;
  cursor: pointer;
  z-index: 333;
`;

const SwiperNextBtn = () => {
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
        height={52}
      />
    </Btn>
  );
};

export default SwiperNextBtn;
