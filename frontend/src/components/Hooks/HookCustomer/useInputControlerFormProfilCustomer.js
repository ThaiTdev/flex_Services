import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlerFormProfilCustomer = () => {
  const schema = yup
    .object()
    .shape({
      userName: yup.string().max(255).required("Merci d'entere votre nom"),
      adresse: yup
        .string()
        .max(255)
        .required("Merci d'entrer l'adresse de votre entreprise'"),
      birthDate: yup
        .date()
        .required("Merci d'entrer votre date de naissance")
        .test("is-adult", "Vous devez avoir au moins 18 ans", function (value) {
          const minAge = 18;
          const birthDate = new Date(value);
          const now = new Date();
          let age = now.getFullYear() - birthDate.getFullYear();
          const monthDiff = now.getMonth() - birthDate.getMonth();

          if (
            monthDiff < 0 ||
            (monthDiff === 0 && now.getDate() < birthDate.getDate())
          ) {
            age--;
          }

          return age >= minAge;
        }),
    })

    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, errors];
};
