const {z} = require("zod");

//Creating an object schema

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(5,{message: "Name must be of atleast 5 characters."})
    .max(255, {message: "Name must not be more than 255 chars."}),
     

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(10,{message: "Email must be of atleast 10 characters."})
    .max(255, {message: "Email must not be more than 255 chars."}),

    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10,{message: "Phone must be of atleast 10 characters."})
    .max(20, {message: "Phone must noe be more than 20 chars."}),
     

    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(7,{message: "Password must be of atleast 7 characters."})
    .max(1024, {message: "Password can't be more than 1024 chars."})

});

module.exports = signupSchema;