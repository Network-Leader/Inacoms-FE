import styled from "@emotion/styled";

const CategorySection = styled.div`
  width: 100vw;
  margin-bottom: 152px;
  .categoryBox {
    width: 601px;
    height: 36px;
    margin: 0 auto;
    display: flex;
    gap: 19px;
  }
`;

const CategoryItem = styled.div<{ category: string }>`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) =>
    props.category === "스터디" || props.category === "워크샵"
      ? props.theme.color.red
      : props.theme.color.black_2E};
  padding: 8px 14.5px;
  border-radius: 5px;
`;

const categoryArr = [
  { id: 1, text: "스터디", value: "study" },
  { id: 2, text: "정기전시", value: "exhibition" },
  { id: 3, text: "워크샵", value: "workshop" },
  { id: 4, text: "세미나", value: "seminar" },
  { id: 5, text: "대외활동", value: "activity" },
  { id: 6, text: "공모전", value: "competition" },
];

const WorkCategory = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: any;
}) => {
  return (
    <CategorySection>
      <div className="categoryBox">
        {categoryArr.map((item) => (
          <CategoryItem
            key={item.id}
            onClick={() => setCategory(item.text)}
            category={item.text}
          >
            {item.text}
          </CategoryItem>
        ))}
      </div>
    </CategorySection>
  );
};

export default WorkCategory;
