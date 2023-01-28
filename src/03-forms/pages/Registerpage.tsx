import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const Registerpage = () => {

    const {formData, onChange, name, email, password1, password2, resetForm, isValidEmail} = useForm({
        name: "",
        email: "",
        password1: "",
        password2: "",
      });
    
  

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>Register page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email no válido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
