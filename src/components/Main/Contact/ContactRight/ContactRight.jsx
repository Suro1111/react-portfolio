import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

//* css
import style from "./ContactRight.module.css";

export const ContactRight = () => {
  const validationSchem = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("write your email").required("required"),
  });

  return (
    <div className={style.box}>
      <h2 className={style.grey}>I'm always open to discussing product</h2>
      <h2>design work or partnerships</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={validationSchem}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values)), resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={errors.name && touched.name ? style.errBorder : ""}
            />
            <ErrorMessage name="name" className={style.err} component={"p"} />
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={errors.email && touched.email ? style.errBorder : ""}
            />
            <ErrorMessage name="email" className={style.err} component={"p"} />
            <button className="btn-grad" type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
