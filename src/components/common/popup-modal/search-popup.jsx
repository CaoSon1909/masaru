import React from "react";
import { course_data } from "../../../data";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { add_course } from "../../../redux/features/search-slice";

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const courses = course_data.filter(
    (arr, index, self) =>
      index ===
      self.findIndex((i) => i.img === arr.img && i.State === arr.State)
  );

  const all_titles = courses.map((item) => {
    return {
      id: item.id,
      name: item.title,
    };
  });

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    const result = courses.find((course) => course.title == item.name);
    dispatch(add_course(result));
    router.push("/course-style-4");
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className={`edu-search-popup ${isSearchOpen ? "open" : ""}`}>
      <div className="content-wrap">
        <div className="site-logo">
          <img
            className="logo-light"
            src="/assets/images/logo/logo-masaru-original-dark.png"
            alt="logo"
          />
          <img
            className="logo-dark"
            src="/assets/images/logo/logo-masaru-original-light.png"
            alt="logo"
          />
        </div>
        <div className="close-button" onClick={() => setIsSearchOpen(false)}>
          <button className="close-trigger">
            <i className="icon-73"></i>
          </button>
        </div>
        <div className="inner">
          {/* <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="searchValue"
              className="edublink-search-popup-field"
              placeholder="Thử tìm kiếm gì đó..."
            />
            <button className="submit-button">
              <i className="icon-2"></i>
            </button>
          </form> */}
          <ReactSearchAutocomplete
            items={all_titles}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            showNoResultsText={"Không tim thấy"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
