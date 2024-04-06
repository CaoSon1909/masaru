import Link from 'next/link';
import React from 'react';
import FooterSocial from './component/footer-social';

const widgets = [
    {
        col: '3',
        class: 'explore-widget',
        widget_title: 'Nền tảng học trực tuyến',
        footer_links: [
            { link: 'about-1', title: 'Về chúng tôi' },
            { link: 'course-style-1', title: 'Khóa học' },
            { link: 'team-1', title: 'Đội ngũ giảng viên' },
            { link: 'event-grid', title: 'Sự kiện' },
            { link: 'team-details', title: 'Hồ sơ giảng viên' },
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

const FooterThree = () => {
    return (
        <footer className="edu-footer footer-kindergarten footer-style-6">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img className="logo-dark" src='/assets/images/logo/logo-masaru-original-light.png' alt="logo" />
                                            <img className="logo-light" src='/assets/images/logo/logo-masaru-original-dark.png' alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.</p>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => 
                                                <li key={i}>
                                                    <Link href={`/${l.link}`}><a>{l.title}</a></Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="edu-footer-widget">
                            <h6 className="widget-title">Liên hệ</h6>
                                <div className="inner">
                                    <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor dolore.</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Địa chỉ:</span>70-80 Upper St Norwich NR2</li>
                                            <li><span>SĐT:</span><a href="tel:+011235641231">+01 123 5641 231</a></li>
                                            <li><span>Email:</span><a href="mailto:info@edublink.com" target="_blank" rel="noreferrer">info@edublink.com</a></li>
                                        </ul>
                                    </div>

                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>
                                    Bản quyền {new Date().toDateString()} 
                                    <a href="https://masaruhr.vn" rel="noreferrer" target="_blank"> thuộc về Masaru</a> Thiết kế bởi <a href="https://masaruhr.vn" target="_blank" rel="noreferrer">Son Pham - Masaru</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterThree;