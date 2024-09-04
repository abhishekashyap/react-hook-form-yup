import Yup from "yup";

export const FormSchema = Yup.object().shape({
  roomType: Yup.string().required("Room type is required"),
  duration: Yup.string().required("Tenancy is required"),
  inventory_id: Yup.string().required("Move in time is required"),
});

export const PaymentFormSchema = Yup.object().shape({
  roomType: Yup.string().required("Room type is required"),
  duration: Yup.string().required("Tenancy is required"),
  inventory_id: Yup.string().required("Move in time is required"),

  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not valid")
    .matches(/@[^.]*\./, "Email is not valid"),
  countryCode: Yup.object()
    .shape({
      dial_code: Yup.string().required(),
    })
    .default(undefined)
    .required("Required"),
  phone: Yup.string()
    .required("Mobile number is required")
    .matches(/^[1-9][0-9]{7,14}$/, "Mobile number is not valid"),
});

export const getDefaultValues = (
  accommodationDetails: any,
  personalDetails: any
) => ({
  roomType: accommodationDetails?.roomType || "",
  duration: accommodationDetails?.duration || "",
  inventory_id: accommodationDetails?.inventory_id || "",
  moveOutDate: accommodationDetails?.moveOutDate || "",
  arrival_date: accommodationDetails?.arrival_date || null,
  moveInDate: accommodationDetails?.moveInDate || "",
  custom_duration: accommodationDetails?.custom_duration || "",
  name: personalDetails?.name || "",
  email: personalDetails?.email || "",
  nationality: personalDetails?.nationality || "",
  countryCode: personalDetails?.countryCode || null,
  phone: personalDetails?.phone || "",
});
