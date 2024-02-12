import { z } from "zod";

export const addUserSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }).nonempty("First name is required"),
  lastName: z.string({
    required_error: "Last name is required",
  }).nonempty("Last name is required"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Not a valid email",
    }),
  companyName: z.string({
    required_error: "Company name is required",
  }).nonempty("Company name is required"),
  address: z.string({
    required_error: "Address is required",
  }).nonempty("Address is required"),
  avatar:z.string({
    required_error: "Avatar is required",
  }).nonempty("Avatar is required")
});
