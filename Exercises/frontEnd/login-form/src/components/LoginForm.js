import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1 className="login-text">Login</h1>
      <div className="text-bar-div">
        <input
          type="email"
          className="text-bar"
          autoComplete="off"
          placeholder="Email ID"
          {...register("Email", {
            required: "This input is required.",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "This input is not email.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="Email"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p className="error-msg" key={type}>
                    {message}
                  </p>
                ))
              : null;
          }}
        />
        <input
          type="password"
          className="text-bar"
          placeholder="Password"
          {...register("Password", { required: true, min: 8 })}
        />
      </div>

      <input type="submit" value="Login" className="btn" />
    </form>
  );
}
