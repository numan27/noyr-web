import * as yup from "yup";

const passwordRegExp = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/;

const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email")
    .label("email"),
  password: yup.string().required("Password is Required").label("password"),
});

const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email")
    .label("email"),
});

const ResetPasswordVS = yup.object().shape({
  password: yup
    .string()
    .required("New Password is Required")
    .matches(
      passwordRegExp,
      "Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const RegisterVS = yup.object().shape({
  firstName: yup.string().required("First Name is Required").label("firstName"),
  lastName: yup.string().required("Last Name is Required").label("lastName"),
  email: yup.string().required("Email is Required").label("email"),
  dob: yup.mixed().required("DOB is Required").label("dob"),
  phone: yup.string().required("Phone Number is Required").label("phone"),
  address: yup.string().required("Address is Required").label("address"),
  // password: yup
  //   .string()
  //   .required("Password is Required")
  //   .matches(
  //     passwordRegExp,
  //     "Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character, and One Number"
  //   ),
  // confirmPassword: yup
  //   .string()
  //   .required("Confirm Password is Required")
  //   .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const CreateListingVS = yup.object().shape({
  category: yup.mixed().required("Select Product Category").label("category"),
  location: yup.string().required("Location is Required").label("location"),
  zipCode: yup.string().required("Zip Code is Required").label("zipCode"),
  partNumber: yup
    .string()
    .required("Part Number is Required")
    .label("partNumber"),
  year: yup.mixed().required("Select a Year").label("year"),
  makeBrand: yup.mixed().required("Select Product Brand").label("makeBrand"),
  model: yup.mixed().required("Select Product Model").label("model"),
  condition: yup.mixed().required("Select the Condition").label("condition"),
  title: yup.string().required("Title is Required").label("condition"),
  price: yup.string().required("Price is Required").label("price"),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      passwordRegExp,
      "Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const EditListingVS = yup.object().shape({
  category: yup.mixed().required("Select Product Category").label("category"),
  location: yup.string().required("Location is Required").label("location"),
  zipCode: yup.string().required("Zip Code is Required").label("zipCode"),
  partNumber: yup
    .string()
    .required("Part Number is Required")
    .label("partNumber"),
  year: yup.mixed().required("Select a Year").label("year"),
  makeBrand: yup.mixed().required("Select Product Brand").label("makeBrand"),
  model: yup.mixed().required("Select Product Model").label("model"),
  condition: yup.mixed().required("Select the Condition").label("condition"),
  title: yup.string().required("Title is Required").label("condition"),
  price: yup.string().required("Price is Required").label("price"),
  stock: yup.string().required("Price is Required").label("stock"),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      passwordRegExp,
      "Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const UpdateProfileVS = yup.object().shape({
  fullName: yup.string().required("Full Name is Required").label("firstName"),
  userName: yup.string().required("User Name is Required").label("lastName"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email")
    .label("email"),
  phoneNumber: yup
    .string()
    .required("Phone Number is Required")
    .label("phoneNumber"),
  state: yup.mixed().required("Select a State").label("state"),
  city: yup.mixed().required("Select a City").label("city"),
  // profilePic: yup.mixed().label("profilePic"),
  // address: yup.string().required("Address is Required").label("address"),
});

const UpdatePasswordVS = yup.object().shape({
  currentPassword: yup.string().required("Current Password is Required"),
  password: yup
    .string()
    .required("New Password is Required")
    .matches(
      passwordRegExp,
      "Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const ContactVS = yup.object().shape({
  fullname: yup.string().required("Full Name is Required").label("fullname"),
  phoneNumber: yup
    .string()
    .required("Phone Number is Required")
    .label("phoneNumber"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Invalid Email")
    .label("email"),
  message: yup
    .string()
    .required("Message is Required")
    .label("message")
    .max(3000, "Message can't be more than 3000 characters long"),
});

const ReportVS = yup.object().shape({
  message: yup
    .string()
    .required("Message is Required")
    .label("message")
    .max(3000, "Message can't be more than 3000 characters long"),
});

const AddLocationStep1VS = yup.object().shape({
  title: yup
    .string()
    .required("Title is Required")
    .label("title")
    .max(50, "Title can't be more than 50 characters long"),
  address: yup.mixed().required("Address is Required").label("address"),
  phone: yup.string().required("Phone Number is Required").label("phone"),
  type: yup.string().required("Type is Required").label("type"),
  desc: yup
    .string()
    .required("Description is Required")
    .label("desc")
    .max(3000, "Description can't be more than 3000 characters long"),
});

const AddAminityVS = yup.object().shape({
  name: yup.string().required("Name is Required").label("name"),
  availability: yup
    .mixed()
    .required("Availibility Status is Required")
    .label("availability"),
});

const AddLocationStep2VS = yup.object().shape({
  berth: yup.string().label("berth"),
  gmu: yup.mixed().label("gmu").required("GMU is Required"),
  aminities: yup
    .array()
    .required("Aminity is Required")
    .label("aminities")
    .min(1, "Atleast 1 Aminity is Required"),
});

const AddLocationStep3VS = yup.object().shape({
  photos: yup
    .array()
    .required("Photos are Required")
    .label("photos")
    .min(3, "Atleast 3 Photos are Required"),
});

const EditLocationStep3VS = yup.object().shape({
  photos: yup.array().label("photos"),
});

const AddServiceVS = yup.object().shape({
  title: yup.string().required("Title is Required").label("title"),
  type: yup.string().required("Type is Required").label("type"),
  photo: yup.mixed().required("Photo is Required").label("photo"),
});

const AddLocationStep4VS = yup.object().shape({
  services: yup.array().label("services"),
});

const EditLocationStep4VS = yup.object().shape({
  services: yup.array().label("services"),
});

export {
  LoginVS,
  ForgotPasswordVS,
  RegisterVS,
  UpdateProfileVS,
  UpdatePasswordVS,
  ContactVS,
  ReportVS,
  AddLocationStep1VS,
  AddAminityVS,
  AddLocationStep2VS,
  AddLocationStep3VS,
  AddLocationStep4VS,
  AddServiceVS,
  EditLocationStep3VS,
  EditLocationStep4VS,
  CreateListingVS,
  EditListingVS,
  ResetPasswordVS,
};
