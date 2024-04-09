import SEO from "../components/seo";
import { Wrapper } from "../layout";
import CourseDetailsThreeMain from "../components/course-details-3";

const CourseDetailsThree = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Thông tin đơn hàng 3"} />
      <CourseDetailsThreeMain />
    </Wrapper>
  );
};

export default CourseDetailsThree;
