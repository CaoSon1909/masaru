import { useFormik } from "formik";
import React from "react";
import { blogCommentSchema } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";

const BlogCommentForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { name: "", email: "", msg: "" },
      validationSchema: blogCommentSchema,
      onSubmit: (values, { resetForm }) => {
        toast.success(`${values.name} your comment added successfully`, {
          position: "top-left",
        });
        resetForm();
      },
    });

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="row g-5">
        <div className="form-group col-lg-6">
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="name"
            id="contact-name"
            placeholder="Tên của bạn"
          />
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>

        <div className="form-group col-lg-6">
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            id="contact-email"
            placeholder="Email của bạn"
          />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="form-group col-12">
          <textarea
            value={values.msg}
            onChange={handleChange}
            onBlur={handleBlur}
            name="msg"
            id="comm-message"
            cols="30"
            rows="5"
            placeholder="Để lại bình luận"
          ></textarea>
          {touched.msg && <ErrorMsg error={errors.msg} />}
        </div>

        <div className="form-group">
          <div className="edu-form-check">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">
              Lưu tên, email và website của tôi trên trình duyệt này cho lần
              bình luận tiếp theo.
            </label>
          </div>
        </div>
        <div className="form-group col-12">
          <button type="submit" className="edu-btn submit-btn">
            Gửi bình luận <i className="icon-4"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogCommentForm;
