import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import SwiperPrevBtn from "./button/prev";
import SwiperNextBtn from "./button/next";
import { useState } from "react";

const ApplySlideSection = styled.section`
  padding: 46px 0;
  background-color: ${(props) => props.theme.color.black};
  position: relative;
  height: 588px;
  overflow: hidden;

  .slideBox {
    position: relative;
    .active {
      position: absolute;
      height: 496px;
      width: 882px;
      right: 0;
      top: 0;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.8);
    }
    position: absolute;
    left: 50%;
    width: calc((882px * 3) + 30px);
    height: 496px;
    margin-left: calc((882px * 3 + 30px) / -2);
  }
`;

const slideList = [
  { id: 1, uri: "/images/item/apply/apply_slide2.png" },
  { id: 2, uri: "/images/item/apply/apply_slide1.png" },
  { id: 3, uri: "/images/item/apply/apply_slide3.png" },
];

const ApplySlider = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <ApplySlideSection>
        <div className="slideBox">
          <Swiper
            onSlideChange={(e) => {
              setActiveIndex(e.activeIndex);
            }}
            spaceBetween={40}
            slidesPerView={3}
            initialSlide={1}
            centeredSlides
          >
            {activeIndex === 0 || <SwiperPrevBtn />}
            {activeIndex === 2 || <SwiperNextBtn />}
            {slideList.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <>
                    <Image
                      src={item.uri}
                      alt="slide"
                      width={799}
                      style={{ borderRadius: "16px" }}
                      height={496}
                    />
                    {isActive || <div className="active"></div>}
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ApplySlideSection>
    </>
  );
};

export default ApplySlider;
