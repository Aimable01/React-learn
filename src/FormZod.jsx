import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define your schema using Zod
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Please enter your email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});

export default function FormZod() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "name1@gmail.com",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Simulate an error
      throw new Error("This email is already in use");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="text" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
