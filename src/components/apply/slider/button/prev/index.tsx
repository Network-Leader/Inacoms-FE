import styled from "@emotion/styled";
import { useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";
const Btn = styled.div`
  position: absolute;
  top: 45%;
  left: 25%;
  cursor: pointer;
  z-index: 333;
`;

const SwiperPrevBtn = () => {
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
        width={24}
        height={52}
      />
    </Btn>
  );
};

export default SwiperPrevBtn;
