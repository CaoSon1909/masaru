import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_course } from "../../redux/features/cart-slice";
import {
  add_to_wishlist,
  wishlistItems,
} from "../../redux/features/wishlist-slice";

const CourseTypeOne = ({ data, classes, image_location_path = "01" }) => {
  const { cartCourses } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const wishlists = useSelector(wishlistItems);
  const isWishlistSelected = wishlists.find(
    (w) => Number(w.id) === Number(data.id)
  );

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
              <img
                src={`/assets/images/course/course-${image_location_path}/${data.img}`}
                alt="Course Meta"
              />
            </a>
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {data.duration}
            </span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{data.level}</span>
          <div className="title">
            <h6>
              <a href="#">{data.title}</a>
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
            <i className="icon-60"></i> Mức lương: {data.course_price} VNĐ/Tháng
          </div>
          <ul className="course-meta">
            <li>
              <i className="icon-37"></i>
              Thời gian: {data.work_hour_per_day} H/ngày
            </li>
            <li>
              <i class="ri-line-chart-line"></i>
              Tăng ca: {data.overtime_salary} VNĐ/H
            </li>
            <li>
              <i className="icon-33"></i>
              Hạn nộp hồ sơ: {data.expire_date}
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
          <span className="course-level">{data.level}</span>
          <h6 className="title">
            <Link href={`/course-details/${data.id}`}>
              <a>{data.title}</a>
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
          <div className="course-price">
            <span className="label">
              <i className="icon-60"></i> Mức lương: {data.course_price}{" "}
              VNĐ/Tháng
            </span>
          </div>
          <p>{data.short_desc}</p>
          <ul className="course-meta">
            <li>
              <i className="icon-37"></i>
              Thời gian làm việc: {data.lesson} H/ngày
            </li>
            <li>
              <i className="icon-25"></i>
              Tăng ca: {data.student} VNĐ/H
            </li>
            <li>
              <i className="icon-33"></i>
              Hạn nộp hồ sơ: {data.expire_date}
            </li>
          </ul>
          <a
            onClick={() => handleAddToCart(data)}
            className="edu-btn btn-secondary btn-small"
            style={{ cursor: "pointer" }}
          >
            {cartCourses.some((item) => item.id === data.id)
              ? "Tiếp tục thêm vào giỏ hàng"
              : "Thêm vào giỏ hàng"}
            <i className="icon-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeOne;
