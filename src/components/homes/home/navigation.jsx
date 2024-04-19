import React from "react";

const Navigation = () => {
  return (
    <>
      <nav id="navbar-example2" class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#about">
                1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#courses">
                2
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
      </nav>
    </>
  );
};

export default Navigation;
