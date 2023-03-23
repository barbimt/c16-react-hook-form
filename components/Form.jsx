import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [success, setSuccess] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    user: "",
    age: 0,
    password: "",
    term: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFields({
      name: data.name,
      email: data.email,
      user: data.user,
      age: data.age,
      password: data.password,
      term: data.term,
    });
    setSuccess(true);
    console.log(fields);
  };

  console.log(errors);
  const showEmailRequiredErrorMessage =
    errors["email"] && errors["email"].type === "required";
  const showNameRequiredErrorMessage =
    errors["name"] && errors["name"].type === "required";
  const showUserRequiredErrorMessage =
    errors["user"] && errors["user"].type === "required";
  const showAgeRequiredErrorMessage =
    errors["age"] && errors["age"].type === "required";
  const showPasswordRequiredErrorMessage =
    errors["password"] && errors["password"].type === "required";
  const showTermRequiredErrorMessage =
    errors["term"] && errors["term"].type === "required";

  return (
    <>
      <main>
        <h1>Cadastro blog de receitas</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name is </p>
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            {...register("name", { required: true })}
          />
          {showNameRequiredErrorMessage && <span>Name is required</span>}

          <p>Write your email</p>
          <input
            type="email"
            placeholder="Write your email"
            id="email"
            {...register("email", { required: true })}
          />
          {showEmailRequiredErrorMessage && <span>Email is required</span>}

            <p>Select user</p>
          <select {...register("user", { required: true })}>
            <option value="">Selecionar...</option>
            <option value="Leitor">Lector</option>
            <option value="Criador">Creator of catalog</option>
          </select>
          {showUserRequiredErrorMessage && <span>User is required</span>}
          <div className="gender">
            <h3>Gender</h3>
            <div>
              <input type="radio" value="Male" {...register("gender")} />
              <label>Male</label>
            </div>
            <div>
              <input type="radio" value="Female" {...register("gender")} />
              <label>Female</label>
            </div>
          </div>

          <p>Age </p>
          <input
            type="number"
            placeholder="age"
            {...register("age", { required: true, min: 1, max: 99 })}
          />
          {showAgeRequiredErrorMessage && <span>Age is required</span>}

          <p>Password</p>
          <input type="password" placeholder="password" />
          {showPasswordRequiredErrorMessage && (
            <span>Password is required</span>
          )}

          <div className="checkbox">
            <input type="checkbox" {...register("term", { required: true })} />
            <label>according to the terms</label>
          </div>
          {showTermRequiredErrorMessage && <span>Term is required</span>}

          <input type="submit" value="Register" />
        </form>
      </main>
    </>
  );
}
