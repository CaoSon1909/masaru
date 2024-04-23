import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import MainMenu from "../headers/component/main-menu";
import HeaderTopRight from "../headers/component/header-top-right";
import HeaderTopLeft from "../headers/component/header-top-left";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import useSticky from "../../hooks/use-sticky";
import { wishlistItems } from "../../redux/features/wishlist-slice";
import useCartInfo from "../../hooks/use-cart-info";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import Cart from "./component/cart";
import ContactUsForm from "../../components/forms/contact-us-form";

const categories = [{ link: "/course-style-1", title: "Đơn hàng đang tuyển" }];

const Header = ({
  header_style,
  no_top_bar,
  disable_full_width,
  disable_category,
}) => {
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const wishlists = useSelector(wishlistItems);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        className={`edu-header header-style-${
          header_style ? header_style : "1"
        } ${
          disable_full_width ? "disbale-header-fullwidth" : "header-fullwidth"
        } ${no_top_bar ? "no-topbar" : ""}`}
      >
        {/* {!no_top_bar && (
          <div className="header-top-bar">
            <div className="container-fluid">
              <div className="header-top">
                <div className="header-top-left">
                  <HeaderTopLeft />
                </div>
                <div className="header-top-right">
                  <HeaderTopRight />
                </div>
              </div>
            </div>
          </div>
        )} */}
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href={"/"}>
                    <a>
                      <img
                        className="logo-dark"
                        src="/assets/images/logo/logo-masaru-original-light.png"
                        alt="logo"
                      />
                      <img
                        className="logo-light"
                        src="/assets/images/logo/logo-masaru-original-dark.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>

                {!disable_category && (
                  <div className="header-category">
                    <nav className="mainmenu-nav">
                      <ul className="mainmenu">
                        <li className="has-droupdown">
                          <a href="#">
                            <i className="icon-1"></i>Danh mục
                          </a>
                          <ul className="submenu">
                            {categories.map((category, i) => (
                              <li key={i}>
                                <Link href={`${category.link}`}>
                                  <a>{category.title}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  {/* main menu start */}
                  <MainMenu />
                  {/* main menu end */}
                </nav>
              </div>
              <div className="header-right">
                <ul className="header-action">
                  <li className="search-bar">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="search-btn" type="button">
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </li>
                  <li className="icon search-icon">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsSearchOpen(true)}
                      className="search-trigger"
                    >
                      <i className="icon-2"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <Link href="/wishlist">
                      <a className="wishlist">
                        <i className="icon-22"></i>
                        <span className="count">{wishlists?.length}</span>
                      </a>
                    </Link>
                  </li>
                  <li className="icon cart-icon">
                    <Link href="/cart">
                      <a className="cart-icon">
                        <i className="icon-3"></i>
                        <span className="count">{quantity}</span>
                      </a>
                    </Link>
                    <Cart />
                  </li>
                  <li className="header-btn">
                    <button
                      type="button"
                      class="edu-btn btn-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Liên hệ nhận tư vấn
                      <i className="icon-4"></i>
                    </button>
                    {/* <a
                      href="https://forms.gle/PxkUndXB7ycaHgX47"
                      rel="noreferrer"
                      target="_blank"
                      class="edu-btn btn-medium"
                    >
                      Liên hệ nhận tư vấn
                      <i className="icon-4"></i>
                    </a> */}
                  </li>
                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
      {/* Start Contact Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header" style={{ padding: "2rem" }}>
              <h5 class="modal-title" id="exampleModalLabel">
                Gửi thông tin của bạn
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body"
              style={{ padding: "3rem", width: "max-content" }}
            >
              {/* <ContactUsForm /> */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf9AexFVf8NIhB6AZYEogKUvnwD3F6872rmjzGfQa3VPcFnHA/viewform?embedded=true"
                width="640"
                height="851"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Đang tải…
              </iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Modal */}
    </>
  );
};

export default Header;
