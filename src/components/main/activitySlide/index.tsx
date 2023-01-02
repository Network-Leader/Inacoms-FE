import styled from "@emotion/styled";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const ActivitySlideSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding-bottom: 266px;
  overflow: hidden;
  .title {
    font-size: 60px;
    font-weight: 700;
    line-height: 114.72px;
    color: ${(props) => props.theme.color.white};
    text-align: center;
    margin-bottom: 60px;
  }
  .slideBox {
    width: 3136px;
    margin-left: 14.4%;
  }
`;

const slideList = [
  { id: 1, uri: "/images/item/main/act_slide2.png" },
  { id: 2, uri: "/images/item/main/act_slide3.png" },
  { id: 3, uri: "/images/item/main/act_slide1.png" },
];

const ActivitySlide = () => {
  return (
    <ActivitySlideSection>
      <div className="title">대표 활동 사진</div>
      <div className="slideBox">
        <Swiper
          slidesPerView={3}
          initialSlide={1}
          // spaceBetween={100}
          // centeredSlides
          loop={true}
          loopAdditionalSlides={2}
        >
          {slideList.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.uri} alt="slide" width={1024} height={530} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ActivitySlideSection>
  );
};

export default ActivitySlide;
