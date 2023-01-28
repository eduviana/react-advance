import { useFormik } from "formik";
import * as Yup from 'yup';
import "../styles/styles.css";


export const FormikYupPage = () => {
  
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Required'),
      lastName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Required'),
      email: Yup.string().email('Email no tiene un formato válido').required('Email is required')
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          { ...getFieldProps('firstName') }
        />
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Lirst Name</label>
        <input
          type="text"
          { ...getFieldProps('lastName') }
        />
        { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          { ...getFieldProps('email') }
        />
        { touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
