import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_course } from "../../redux/features/cart-slice";
import {
  add_to_wishlist,
  wishlistItems,
} from "../../redux/features/wishlist-slice";
import { BASE_API_URL } from "../../utils/base-api-url";
import { VNDFormatCurrency } from "../../utils/format-currency";

const CourseTypeOne = ({ data, classes, image_location_path = "01" }) => {
  const { cartCourses } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const wishlists = useSelector(wishlistItems);
  //start process data props

  const imgValue = data?.attributes?.img.data[0].attributes.url;
  const imageUrl = `${BASE_API_URL}${imgValue}`;
  const title = data?.attributes?.title;
  const duration = data?.attributes?.duration;
  const level = data?.attributes?.level;
  const course_price = data?.attributes?.course_price;
  const work_hour_per_day = data?.attributes?.work_hour_per_day;
  const overtime_salary = data?.attributes?.overtime_salary;
  const expire_date = data?.attributes?.expire_date;
  const short_desc = data?.attributes?.short_desc;
  //end process data props
  const isWishlistSelected = wishlists.find(
    (w) => Number(w.id) === Number(data.id)
  );
  const router = useRouter();

  const handleWishlist = (course_item) => {
    if (wishlists.find((i) => i.id === course_item.id)) {
      dispatch(
        add_to_wishlist({
          change_type: "remove_wishlist",
          item: {
            id: course_item.id,
            img: `/assets/images/course/course-06/${course_item.img}`,
            title: course_item.title,
            price: course_item.course_price,
          },
        })
      );
    } else {
      dispatch(
        add_to_wishlist({
          change_type: "add_wishlist",
          item: {
            id: course_item.id,
            img: `/assets/images/course/course-06/${course_item.img}`,
            title: course_item.title,
            price: course_item.course_price,
          },
        })
      );
    }
  };

  // handle add to cart
  const handleAddToCart = (course) => {
    dispatch(
      cart_course({
        id: course.id,
        img: `/assets/images/course/course-06/${course.img}`,
        price: course.course_price,
        title: course.title,
      })
    );
  };

  //handle view detail
  const handleViewDetail = (course) => {
    console.log("course: ", course);
    router.push(`/course-details/${course.id}`);
  };

  return (
    <div
      className={`edu-course course-style-1 ${
        classes ? classes : ""
      } hover-button-bg-white`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/course-details/${data.id}`}>
            <a>
              <img src={imageUrl} alt="Course Meta" />
            </a>
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {duration}
            </span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{level}</span>
          <div className="title">
            <h6>
              <a href="#">{title}</a>
            </h6>
          </div>
          {/* <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">
              ({data.rating} /{data.rating_count} ⭐)
            </span>
          </div> */}
          <div className="course-price">
            <i className="icon-60"></i> Mức lương:{" "}
            {VNDFormatCurrency(course_price)}
          </div>
          <ul className="course-meta">
            <li>
              <i className="icon-37"></i>
              Thời gian: {work_hour_per_day} h/ngày
            </li>
            <li>
              <i class="ri-line-chart-line"></i>
              Tăng ca: {VNDFormatCurrency(overtime_salary)}
            </li>
            <li>
              <i className="icon-33"></i>
              Hạn nộp hồ sơ: {expire_date}
            </li>
          </ul>
        </div>
      </div>

      <div className="course-hover-content-wrapper">
        <button
          onClick={() => handleWishlist(data)}
          className={`wishlist-btn ${isWishlistSelected ? "active" : ""}`}
        >
          <i className="icon-22"></i>
        </button>
      </div>

      <div className="course-hover-content">
        <div className="content">
          <button
            onClick={() => handleWishlist(data)}
            className={`wishlist-btn ${isWishlistSelected ? "active" : ""}`}
          >
            <i className="icon-22"></i>
          </button>
          <span className="course-level">{level}</span>
          <h6 className="title">
            <Link href={`/course-details/${data.id}`}>
              <a>{title}</a>
            </Link>
          </h6>
          {/* <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">
              ({data.rating} /{data.rating_count} ⭐)
            </span>
          </div> */}
          <p>{short_desc}</p>
          <div className="course-price">
            <span className="label">
              <i className="icon-60"></i> Mức lương:{" "}
              {VNDFormatCurrency(course_price)}
            </span>
          </div>
          <ul className="course-meta">
            <li>
              <i className="icon-37"></i>
              Thời gian làm việc: {work_hour_per_day} h/ngày
            </li>
            <li>
              <i className="icon-25"></i>
              Tăng ca: {VNDFormatCurrency(overtime_salary)} /h
            </li>
            <li>
              <i className="icon-33"></i>
              Hạn nộp hồ sơ: {expire_date}
            </li>
          </ul>
          <a
            onClick={() => handleViewDetail(data)}
            className="edu-btn btn-secondary btn-small"
            style={{ cursor: "pointer" }}
          >
            Xem thông tin
          </a>
          {/* <a
            onClick={() => handleAddToCart(data)}
            className="edu-btn btn-secondary btn-small"
            style={{ cursor: "pointer" }}
          >
            {cartCourses.some((item) => item.id === data.id)
              ? "Tiếp tục thêm vào giỏ hàng"
              : "Thêm vào giỏ hàng"}
            <i className="icon-4"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CourseTypeOne;
