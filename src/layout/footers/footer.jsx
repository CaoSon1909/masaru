import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    // logoLight: '/assets/images/logo/logo-dark.png',
    // logoDark: '/assets/images/logo/logo-white.png',
    logoDark: '/assets/images/logo/logo-masaru-original-light.png',
    logoLight: '/assets/images/logo/logo-masaru-original-dark.png',
    desc: 'Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.',
    add: '70-80 Upper St Norwich NR2',
    call: '+01 123 5641 231',
    email: 'info@edublink.com',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Nền tảng học trực tuyến',
            footer_links: [
                { link: 'about-1', title: 'Về chúng tôi' },
                { link: 'course-style-1', title: 'Khóa học' },
                { link: 'team-1', title: 'Đội ngũ giảng viên' },
                { link: 'event-grid', title: 'Sự kiện' },
                { link: 'team-details', title: 'Thông tin giảng viên' },
                { link: 'purchase-guide', title: 'Hướng dẫn mua hàng' }
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Liên kết',
            footer_links: [
                { link: 'contact-us', title: 'Liên hệ chúng tôi' },
                { link: 'gallery-grid', title: 'Kho ảnh' },
                { link: 'blog-standard', title: 'Tin tức và bài viết' },
                { link: 'faq', title: "FAQ" },
                { link: 'sign-in', title: 'Đăng nhập/Đăng ký' },
                { link: 'coming-soon', title: 'Sắp có' }
            ]
        }
    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg,home_4 }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                                <img className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                            </>}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a>
                                            {dark_bg && <img className="logo-light" src={home_4?'/assets/images/logo/logo-white.png' :'/assets/images/logo/logo-light-2.png'} alt="Corporate Logo" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description">{desc}</p>
                                <div className="widget-information">
                                    <ul className="information-list">
                                        <li><span>Địa chỉ:</span>{add}</li>
                                        <li><span>SĐT:</span><a href="tel:+011235641231">{call}</a></li>
                                        <li><span>Email:</span><a href="mailto:info@edublink.com" rel="noreferrer" target="_blank">{email}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Liên hệ</h4>
                                <div className="inner">
                                    <p className="description">Nhập email để nhận được những thông tin ưu đãi mới nhất từ Masaru</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Email của bạn" />
                                        <button className={`edu-btn ${dark_bg && !home_4?'btn-secondary':''} btn-medium`} type="button">Đăng ký <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Bản quyền {new Date().getFullYear()} <a href="https://masaruhr.vn" rel="noreferrer" target="_blank">thuộc về Masaru</a> Thiết kế bởi <a href="https://masaruhr.vn" rel="noreferrer" target="_blank">Son Pham - Masaru</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;