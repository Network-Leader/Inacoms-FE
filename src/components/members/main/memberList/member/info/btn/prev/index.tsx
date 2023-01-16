import styled from "@emotion/styled";
import { useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";
const Btn = styled.div`
  position: fixed;
  left: 409px;
  bottom: 73px;
  cursor: pointer;
  z-index: 333;
`;

const PrevBtn = () => {
  const swiper = useSwiper();
  const slide = useSwiperSlide();
  return (
    <Btn
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <Image
        src={"/images/icons/apply/left_arrow.png"}
        alt="arrow"
        width={5}
        height={11}
      />
    </Btn>
  );
};

export default PrevBtn;
