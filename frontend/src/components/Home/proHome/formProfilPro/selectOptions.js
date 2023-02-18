const optionPoste = [
  { label: "--choisir ma fonction--", value: "" },
  { label: "Directeur/Directrice de restaurant", value: "DirectRes" },
  { label: "Directeur/Directrice d'hôtel", value: "DirectHote" },
  { label: "Gérant/Gérante de restauration collective", value: "Manger" },
  { label: "Maître/Maîtresse d'hôtel", value: "Mistress" },
  { label: "Cuisinier/Cuisinière", value: "Cook" },
  { label: "Chef de rang", value: "Chief" },
  { label: "Gouvernant/Gouvernante", value: "Governing" },
  { label: "Réceptionniste", value: "Receptionist" },
  { label: "Employé/Employée de restaurant", value: "employe" },
  { label: "Femme/Valet de chambre", value: "Valet" },
  { label: "Garçon de café/serveuse", value: "server" },
  { label: "Barman/barmaid", value: "Barman" },
  { label: "Sommelier/Sommelière", value: "Sommelier" },
];
const optionActivite = [
  { label: "--choisir ma fonction--", value: "" },
  { label: "La restauration traditionnelle", value: "tradi" },
  { label: "La restauration rapide", value: "fast" },
  { label: "La restauration à thème", value: "thème" },
  { label: "La restauration traiteur", value: "traiteur" },
  { label: "La restauration dans les transports", value: "logistique" },
  { label: "La restauration de collectivité", value: "colectivity" },
  { label: "Hôtellerie restauration", value: "Motel" },
];

export const sortPoste = optionPoste.sort((a, b) =>
  a.label.localeCompare(b.label)
);
export const sortActivite = optionActivite.sort((a, b) =>
  a.label.localeCompare(b.label)
);
