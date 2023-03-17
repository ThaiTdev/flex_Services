import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlerFormProfilPro = () => {
  const schema = yup
    .object()
    .shape({
      selectActivite: yup.string().min(1, "veuillez choisir une catégorie"),
      nom_entreprise: yup
        .string()
        .max(255)
        .required("Merci d'entrer le nom de votre entreprise"),
      adresse: yup
        .string()
        .max(255)
        .required("Merci d'entrer l'adresse de votre entreprise'"),
      siret: yup
        .string()
        .required("Merci d'entrer le numéro de SIRET de votre entreprise")
        .test(
          "len",
          "Le numéro de SIRET doit contenir exactement 14 chiffres",
          (val) => val && val.length === 14
        )
        .required("Merci d'entrer le numéro de SIRET de votre entreprise"),
      taille: yup
        .number()
        .max(255)
        .required("Merci d'entrer l'a taille de votre entreprise'"),
    })

    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, setValue, errors];
};
