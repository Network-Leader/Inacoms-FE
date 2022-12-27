import styled from "@emotion/styled";

const ImageDiv = styled.div<{ type: string }>`
  z-index: 33;
  width: 628px;
  height: 379px;
  display: flex;
  gap: 20px;
`;

const IdentityItem = styled.div<{ url: string }>`
  cursor: pointer;
  flex-grow: 1;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
  transition: 0.4s;
  &:hover {
    flex-grow: 6;
    transition: 0.4s;
  }
`;
const IllusItem = styled.div<{ url: string }>`
  cursor: pointer;
  flex-grow: 1;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
  transition: 0.4s;
  &:hover {
    flex-grow: 6;
    transition: 0.4s;
  }
`;
const ServiceItem = styled.div<{ url: string }>`
  cursor: pointer;
  flex-grow: 1;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
  transition: 0.4s;
  &:hover {
    flex-grow: 6;
    transition: 0.4s;
  }
`;
const EditItem = styled.div<{ url: string }>`
  cursor: pointer;
  flex-grow: 1;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
  transition: 0.4s;
  &:hover {
    flex-grow: 6;
    transition: 0.4s;
  }
`;

const identityImg = [
  "/images/item/about/identity1.png",
  "/images/item/about/identity2.png",
  "/images/item/about/identity3.png",
];
const illusImg = [
  "/images/item/about/illus1.png",
  "/images/item/about/illus2.png",
  "/images/item/about/illus3.png",
];
const serviceImg = [
  "/images/item/about/service1.png",
  "/images/item/about/service2.png",
  "/images/item/about/service3.png",
];
const editImg = [
  "/images/item/about/edit1.png",
  "/images/item/about/edit2.png",
  "/images/item/about/edit3.png",
];
const DesignImage = ({ type }: { type: string }) => {
  console.log(type);
  return (
    <ImageDiv type={type}>
      {type === "identity"
        ? identityImg.map((item, index) => (
            <IdentityItem url={item} key={index} />
          ))
        : type === "illus"
        ? illusImg.map((item, index) => <IllusItem url={item} key={index} />)
        : type === "service"
        ? serviceImg.map((item, index) => (
            <ServiceItem url={item} key={index} />
          ))
        : editImg.map((item, index) => <EditItem url={item} key={index} />)}
    </ImageDiv>
  );
};

export default DesignImage;
