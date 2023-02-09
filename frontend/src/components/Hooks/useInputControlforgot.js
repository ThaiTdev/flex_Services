import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlforgot = () => {
  const schema = yup
    .object({
      emailForgot: yup
        .string()
        .email("Merci de rentrer une adreese mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail valide"),
    })

    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, errors];
};
