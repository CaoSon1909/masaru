import React from "react";
import { useFormik } from "formik";
import useFirebase from "../../hooks/use-firebase";
import { registerSchema } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  // register With Email Password
  const { registerWithEmailPassword } = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { name: "", email: "", password: "", terms: false },
      validationSchema: registerSchema,
      onSubmit: (values, { resetForm }) => {
        registerWithEmailPassword(values.email, values.password, values.name);
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reg-name">Họ và tên*</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
          id="reg-name"
          placeholder="Nhập họ và tên"
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>

      <div className="form-group">
        <label htmlFor="log-email">Tên đăng nhập hoặc email*</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="log-email"
          placeholder="Nhập tên đăng nhập hoặc email"
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="form-group">
        <label htmlFor="log-password">Mật khẩu*</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type={showPass ? "text" : "password"}
          name="password"
          id="log-password"
          placeholder="Nhập mật khẩu"
        />
        <span onClick={() => setShowPass(!showPass)} className="password-show">
          <i className="icon-76"></i>
        </span>
      </div>
      {touched.password && <ErrorMsg error={errors.password} />}

      <div className="form-group chekbox-area">
        <div className="edu-form-check">
          <input
            value={values.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            type="checkbox"
            name="terms"
            id="terms-condition"
          />
          <label htmlFor="terms-condition">
            Tôi đã đọc và đồng ý những nội dung trong
            <Link href="/terms-condition">
              <a>Điều khoản & Dịch vụ của Masaru</a>
            </Link>
          </label>
        </div>
      </div>
      {touched.terms && <ErrorMsg error={errors.terms?.split("true,")[1]} />}

      <div className="form-group">
        <button type="submit" className="edu-btn btn-medium">
          Đăng ký tài khoản <i className="icon-4"></i>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
