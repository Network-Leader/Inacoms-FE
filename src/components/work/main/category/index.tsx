import styled from "@emotion/styled";
import { useEffect } from "react";

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

const CategoryItem = styled.div<{ category: any; eachCate: any }>`
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) =>
    props.category?.includes(props.eachCate)
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
  setResCategory,
  resCategory,
}: {
  category: any;
  setCategory: any;
  resCategory: any;
  setResCategory: any;
}) => {
  const handleCategory = (e: any) => {
    const categoryId = e.target.id;
    setCategory({
      categoryTags: {
        ...category.categoryTags,
        [categoryId]: !category.categoryTags[categoryId],
      },
    });
  };
  useEffect(() => {
    const clicked = [];
    const now = category.categoryTags;
    for (let i in now) {
      if (now[i]) {
        clicked.push(i);
      }
    }
    setResCategory(clicked);
  }, [category.categoryTags]);

  return (
    <CategorySection>
      <div className="categoryBox">
        {categoryArr.map((item) => (
          <CategoryItem
            id={item.text}
            key={item.id}
            onClick={handleCategory}
            category={resCategory}
            eachCate={item.text}
          >
            {item.text}
          </CategoryItem>
        ))}
      </div>
    </CategorySection>
  );
};

export default WorkCategory;
