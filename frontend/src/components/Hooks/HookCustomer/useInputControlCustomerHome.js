import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlCustomerHome = () => {
  const schema = yup
    .object({
      adresse: yup
        .string()
        .email("Merci de rentrer votre adresse ")
        .max(255)
        .required("Merci de rentrer une adresse mail valide"),
      avatar: yup.string().max(255).required("Merci d'enregistrer votre photo"),
      anniversaire: yup
        .string()
        .max(50)
        .require("Merci d'enregistrer votre date ce naissance"),
      cv: yup.string().require("Merci de choisir votre CV"),
      nom_user: yup.string().max(255).require("Merci d'entrer votre nom"),
      permis: yup
        .boolean()
        .max(1)
        .require("Merci de préciser si vous avesz le permis 'B'"),
    })

    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, errors];
};
