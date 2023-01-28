import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o más")
            .max(15, "El nombre no puede superar los 15 caracteres")
            .required("Requerido"),
          email: Yup.string().email("Email no válido").required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe de tener un minimo de 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las constraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Eduardo" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="john@google.com"
            />
            <MyTextInput
              type="password"
              label="Contraseña"
              name="password1"
              placeholder="******"
            />
            <MyTextInput
              type="password"
              label="Confirmar Contraseña"
              name="password2"
              placeholder="******"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
