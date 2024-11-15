import React from "react";
import { useFormik } from "formik";
import useFirebase from "../../hooks/use-firebase";
import { loginSchema } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import { useState } from "react";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  // use firebase
  const { loginWithEmailPassword, resetPassword } = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: (values, { resetForm }) => {
        loginWithEmailPassword(values.email, values.password);
        resetForm();
      },
    });

  // handleResetPass
  const handleResetPass = (email) => {
    resetPassword(email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="current-log-email">Tên đăng nhập hoặc email*</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          placeholder="Nhập email hoặc tên đăng nhập"
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="form-group">
        <label htmlFor="current-log-password">Mật khẩu*</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Nhập mật khẩu"
        />
        <span onClick={() => setShowPass(!showPass)} className="password-show">
          <i className="icon-76"></i>
        </span>
      </div>
      {touched.password && <ErrorMsg error={errors.password} />}

      <div className="form-group chekbox-area">
        <div className="edu-form-check">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Lưu thông tin đăng nhập</label>
        </div>
        <a
          href="#"
          onClick={() => handleResetPass(values.email)}
          className="password-reset"
        >
          Quên mật khẩu?
        </a>
      </div>

      <div className="form-group">
        <button type="submit" className="edu-btn btn-medium">
          Đăng nhập <i className="icon-4"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
