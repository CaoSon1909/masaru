import SEO from '../components/seo';
import { Wrapper } from '../layout';
import TermsConditionMain from '../components/terms-condition';

export default function TermsCondition() {
    return (
        <Wrapper>
            <SEO pageTitle={'Điều khoản & Dịch vụ'} />
            <TermsConditionMain/>
        </Wrapper>
    )
}
