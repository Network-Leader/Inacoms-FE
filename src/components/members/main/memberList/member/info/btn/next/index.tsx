import styled from "@emotion/styled";
import { useSwiper } from "swiper/react";
import Image from "next/image";
const Btn = styled.div`
  position: fixed;
  left: 493px;
  bottom: 73px;
  cursor: pointer;
  z-index: 333;
`;

const NextBtn = () => {
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
        width={5}
        height={11}
        style={{ zIndex: 333 }}
      />
    </Btn>
  );
};

export default NextBtn;
