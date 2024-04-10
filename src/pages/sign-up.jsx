import SEO from "../components/seo";
import { Wrapper } from "../layout";
import SignUpMain from "../components/sign-up";

export default function SignUn() {
  return (
    <Wrapper>
      <SEO pageTitle={"Đăng ký"} />
      <SignUpMain />
    </Wrapper>
  );
}
