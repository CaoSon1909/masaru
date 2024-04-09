import React from "react";

const Navigation = () => {
  return (
    <>
      <nav id="navbar-example2" class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  Về chúng tôi
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#courses">
                  Đơn hàng đang tuyển
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#counter-up">
                  Counter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">
                  Cảm nghĩ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Đội ngũ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
