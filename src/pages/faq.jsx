import SEO from '../components/seo';
import { Wrapper } from '../layout';
import FaqMain from '../components/faq';

export default function Faq() {
    return (
        <Wrapper>
            <SEO pageTitle={'Câu hỏi thường gặp'} />
            <FaqMain />
        </Wrapper>
    )
}
