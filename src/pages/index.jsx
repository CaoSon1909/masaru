import HomeMain from '../components/homes/home';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Masaru - Chuyển giao nguồn nhân lực chất lượng Nhật Bản'} />
            <HomeMain />
        </Wrapper>
    )
}