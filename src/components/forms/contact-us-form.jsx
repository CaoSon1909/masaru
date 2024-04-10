import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p
      className="success-message"
      style={{ color: "#1ab69d", marginTop: "20px", marginBottom: "0" }}
    >
      Cảm ơn bạn đã chọn Masaru. Chúng tôi sẽ liên hệ với bạn trong thời gian
      sớm nhất
    </p>
  );
};

const ContactUsForm = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bxh6md3",
        "template_1g7v07n",
        e.target,
        "user_8Lx0gfI1ktOoeEN8DTV10"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 10000);

  return (
    <form
      className="rnt-contact-form rwt-dynamic-form"
      action=""
      onSubmit={sendEmail}
    >
      <div className="row row--10">
        <div className="form-group col-12">
          <input
            type="text"
            name="fullname"
            placeholder="Họ và tên (*)"
            required
          />
        </div>
        <div className="form-group col-12">
          <input
            type="email"
            name="email"
            placeholder="Email của bạn (*)"
            required
          />
        </div>
        <div className="form-group col-12">
          <input type="tel" name="phone" placeholder="Số điện thoại" />
        </div>
        <div className="form-group col-12">
          <textarea
            name="message"
            cols="30"
            rows="4"
            placeholder="Lời nhắn của bạn"
          ></textarea>
        </div>
        <div
          className="form-group col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="rn-btn edu-btn btn-medium submit-btn"
            name="submit"
            type="submit"
          >
            Gửi thông tin<i className="icon-4"></i>
          </button>
        </div>
        {result ? (
          <div className="form-group">
            <Result />
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactUsForm;
