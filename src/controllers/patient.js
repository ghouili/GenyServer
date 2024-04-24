
const patient = require("../models/patient");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await patient.find();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
      data: null,
    });
  }

  return res.status(200).json({
    success: true,
    message: "data was extracted successfuly",
    data: AllData,
  });
};
const FindDataById = async (req, res) => {
  const { id } = req.params;

  let existData;
  try {
    existData = await patient.findById(id);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
      data: null,
    });
  }

  if (!existData) {
    return res.status(400).json({
      success: false,
      message: "Data wasn't found",
      data: null,
    });
  }

  return res.status(200).json({
    success: true,
    message: "data was found successfuly",
    data: existData,
  });
};

const AddData = async (req, res) => {
  if (!req.body) {

    return res.status(400).json({
      success: false,
      message: "Data wasn't sent",
      data: null,
    });
  }
  console.log(req.body);


  const newData = new patient(req.body);
  try {
    await newData.save();
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while saving data",
      data: null,
    });
  }

  return res.status(201).json({
    success: true,
    message: "data was created successfuly",
    data: newData,
  });
};

const UpdateData = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Data wasn't sent",
      data: null,
    });
  }
  const {
    compte,
    civilite,
    prenom,
    nom,
    nom_naissance,
    sexe,
    date_naissance,
    numero_identite,
    code_securite_sociale,
    adresse,
    email,
    telephone,
    telephone_secondaire,
    telephone_autre,
    profession,
    observation,
    taille,
    poids,
    groupe_sanguin,
    fumeur,
    nombre_cigarettes,
    origine,
    antecedents_familiaux,
    antecedents_medico_chirurgicaux,
    antecedents_gynecologiques,
    antecedents_cardio,
    allergies,
    praticien_principal,
    praticiens_correspondants,
    lieu_accouchement,
    mot_cle,
    notes,
    nouveau,


  } = req.body;
  let existData;
  try {
    existData = await patient.findById(id);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
      data: null,
    });
  }

  if (!existData) {
    return res.status(400).json({
      success: false,
      message: "Data wasn't found",
      data: null,
    });
  }

  existData.compte = compte;
  existData.civilite = civilite;
  existData.prenom = prenom;
  existData.nom = nom;
  existData.nom_naissance = nom_naissance;
  existData.sexe = sexe;
  existData.date_naissance = date_naissance;
  existData.numero_identite = numero_identite;
  existData.code_securite_sociale = code_securite_sociale;
  existData.adresse = adresse;
  existData.email = email;
  existData.telephone = telephone;
  existData.telephone_secondaire = telephone_secondaire;
  existData.telephone_autre = telephone_autre;
  existData.profession = profession;
  existData.observation = observation;
  existData.taille = taille;
  existData.poids = poids;
  existData.groupe_sanguin = groupe_sanguin;
  existData.fumeur = fumeur;
  existData.nombre_cigarettes = nombre_cigarettes;
  existData.origine = origine;
  existData.antecedents_familiaux = antecedents_familiaux;
  existData.antecedents_medico_chirurgicaux = antecedents_medico_chirurgicaux;
  existData.antecedents_gynecologiques = antecedents_gynecologiques;
  existData.antecedents_cardio = antecedents_cardio;
  existData.allergies = allergies;
  existData.praticien_principal = praticien_principal;
  existData.praticiens_correspondants = praticiens_correspondants;
  existData.lieu_accouchement = lieu_accouchement;
  existData.mot_cle = mot_cle;
  existData.notes = notes;
  existData.nouveau = nouveau;


  try {
    await existData.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while saving data",
      data: null,
    });
  }

  return res.status(200).json({
    success: true,
    message: "data was updated successfuly",
    data: existData,
  });
};

const DeleteData = async (req, res) => {
  const { id } = req.params;

  let existData;
  try {
    existData = await patient.findById(id);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
      data: null,
    });
  }

  if (!existData) {
    return res.status(400).json({
      success: false,
      message: "Data wasn't found",
      data: null,
    });
  }

  try {
    await existData.deleteOne();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
      data: null,
    });
  }

  return res.status(200).json({
    success: true,
    message: "data was deleted successfuly",
    data: null,
  });
};

exports.GetAllData = GetAllData;
exports.FindDataById = FindDataById;
exports.AddData = AddData;
exports.UpdateData = UpdateData;
exports.DeleteData = DeleteData;


