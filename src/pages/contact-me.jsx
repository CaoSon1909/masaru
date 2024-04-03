import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactMeMain from '../components/contact-me';

const ContactMe = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Liên hệ với Masaru'} />
            <ContactMeMain/>
        </Wrapper>
    )
}

export default ContactMe;