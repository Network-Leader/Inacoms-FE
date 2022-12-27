import styled from "@emotion/styled";
import { useState } from "react";
import DesignImage from "./designImage";
import DesignType from "./designType";

const TrackSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding-bottom: 433px;
  .trackBox {
    width: 1021px;
    margin: 0 auto;
    .title {
      font-size: 60px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      text-align: center;
      margin-bottom: 95px;
    }
    .content {
      display: flex;
      gap: 81px;
      width: 100%;
    }
  }
`;

const Track = () => {
  const [type, setType] = useState("identity");
  return (
    <TrackSection>
      <div className="trackBox">
        <div className="title">참여트랙</div>
        <div className="content">
          <DesignType type={type} setType={setType} />
          <DesignImage type={type} />
        </div>
      </div>
    </TrackSection>
  );
};

export default Track;
