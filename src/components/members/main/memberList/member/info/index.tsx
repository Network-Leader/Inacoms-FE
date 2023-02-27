import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PrevBtn from "./btn/prev";
import NextBtn from "./btn/next";

const InfoBox = styled.div<{ activeIndex: number }>`
  position: relative;
  background-color: ${(props) => props.theme.color.black};
  border-radius: 20px;
  width: 1024px;
  height: 642.06px;
  padding: 58.73px 70.5px 0 73px;
  display: flex;
  gap: 77.47px;
  .x_icon {
    position: absolute;
    top: 40.03px;
    right: 32.29px;
  }
  .swiper-thumb {
    width: 345.2px;
    height: 518.37px;
    background-color: #343434;
    border-radius: 12px;
    .bullet {
      display: flex;
      gap: 10.03px;
      position: absolute;
      left: 235px;
      bottom: 42.71px;
      .each {
        width: 6.31px;
        height: 6.31px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color.gray_8E};
        &:first-of-type {
          background-color: ${(props) =>
            props.activeIndex === 0
              ? props.theme.color.white
              : props.theme.color.gray_8E};
        }
        &:last-of-type {
          background-color: ${(props) =>
            props.activeIndex === 1
              ? props.theme.color.white
              : props.theme.color.gray_8E};
        }
      }
    }
  }
`;
const ContentBox = styled.div`
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 19px;
    .name {
      font-size: 24px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-right: 22px;
    }
    .role {
      font-size: 12px;
      font-weight: 500;
      color: ${(props) => props.theme.color.black};
      padding: 5px 11px;
      background-color: ${(props) => props.theme.color.gray_D9};
      border-radius: 5px;
      margin-right: 16px;
    }
    .stuId {
      color: ${(props) => props.theme.color.gray_F3};
    }
  }
  .intro {
    color: ${(props) => props.theme.color.gray_F3};
    font-size: 12px;
    width: 457.83px;
    height: 74.15px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 22.32px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.black_30};
    line-height: 156.2%;
    margin-bottom: 22.85px;
  }
  .subInfo1 {
    display: flex;
    gap: 141px;
    height: 103.25px;
    margin-bottom: 45px;
    .track {
      width: 90.16px;
    }
  }
  .subInfo2 {
    display: flex;
    gap: 135px;
    margin-bottom: 19px;
    .behance {
      width: 101px;
    }
  }
  .title {
    color: ${(props) => props.theme.color.gray_7A};
    font-size: 12px;
    line-height: 22.94px;
  }
  .list {
    color: ${(props) => props.theme.color.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 26.77px;
  }
  .etc {
    display: flex;
    gap: 17px;
    .item {
      width: 220px;
      height: 130px;
      background-color: #888;
      border-radius: 10px;
    }
  }
`;
const Info = ({ member }: { member: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <InfoBox activeIndex={activeIndex}>
      <div className="x_icon">
        <Link href="/members">
          <Image
            src="/images/icons/members/members_x.png"
            alt="prev"
            width={16}
            height={16}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="swiper-thumb">
        <div className="bullet">
          <div className="each"></div>
          <div className="each"></div>
        </div>
        <Swiper
          slidesPerView={1}
          initialSlide={0}
          centeredSlides
          onSlideChange={(e) => {
            setActiveIndex(e.activeIndex);
          }}
          style={{ height: "546.37px" }}
        >
          <PrevBtn />
          <NextBtn />
          <SwiperSlide
            style={{
              color: "white",
              fontSize: "24px",
              height: "518.37px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={member[0]?.thumbB}
              width={345.2}
              height={518.37}
              alt="썸네일"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              color: "white",
              fontSize: "24px",
              height: "518.37px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={member[0]?.thumbC}
              width={345.2}
              height={518.37}
              alt="썸네일"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <ContentBox>
        <div className="profile">
          <span className="name">{member[0]?.name}</span>
          <span className="role">{member[0]?.role}</span>
          <span className="stuId">{member[0]?.studentId}학번</span>
        </div>
        <div className="intro">{member[0]?.intro}</div>
        <hr style={{ marginBottom: "19px" }} />
        <div className="subInfo1">
          <div className="track">
            <div className="title">선호 트랙</div>
            {member[0]?.track?.map((item: any, index: number) => (
              <div className="list" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="contact">
            <div className="title">컨택</div>
            {member[0]?.contact?.map((item: any, index: number) => (
              <a
                href={`${item.link}`}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <div className="list" style={{ cursor: "pointer" }}>
                  {item?.mark}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="subInfo2">
          <div className="behance">
            <div className="title">비핸스</div>
            <a
              href={`${member[0]?.behance?.link}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="list"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {member[0]?.behance?.mark}
              </div>
            </a>
          </div>
          <div className="email">
            <div className="title">이메일</div>
            <div className="list">{member[0]?.email}</div>
          </div>
        </div>
      </ContentBox>
    </InfoBox>
  );
};

export default Info;
