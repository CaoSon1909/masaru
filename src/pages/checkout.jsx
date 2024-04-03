import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CheckoutMain from '../components/checkout';

const Checkout = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Thanh toán'} />
            <CheckoutMain />
        </Wrapper>
    )
}

export default Checkout;