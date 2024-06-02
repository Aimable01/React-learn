import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already in use",
      });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Please enter your email",
          validate: (value) => {
            if (value.includes("@")) {
              return true;
            } else {
              return "Email must include @ ";
            }
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message} </p>}
      <input
        {...register("password", {
          required: "Please enter your password",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          maxLength: {
            value: 20,
            message: "Password must be at most 20 characters long",
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
}
