

const echoelevensa = require("../models/ehoelevensa");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await echoelevensa.find();
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
    existData = await echoelevensa.findById(id);
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


  const newData = new echoelevensa(req.body);
  try {
    await newData.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "somethin went wrong while extracting data",
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

    sac_gestationnel_localisation,
    sac_gestationnel_tonicite,
    sac_gestationnel_trophoblaste,
    sac_gestationnel_longueur,
    sac_gestationnel_largeur,
    sac_gestationnel_hauteur,
    sac_gestationnel_diametre,
    sac_gestationnel_decollement,
    embryon_visible,
    morpho_extremite_cephalique,
    morpho_membres,
    lcc,
    bip,
    activite_cardiaque,
    commentaires,

  } = req.body;
  let existData;
  try {
    existData = await echoelevensa.findById(id);
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

  existData.sac_gestationnel_localisation = sac_gestationnel_localisation;
  existData.sac_gestationnel_tonicite = sac_gestationnel_tonicite;
  existData.sac_gestationnel_trophoblaste = sac_gestationnel_trophoblaste;
  existData.sac_gestationnel_longueur = sac_gestationnel_longueur;
  existData.sac_gestationnel_largeur = sac_gestationnel_largeur;
  existData.sac_gestationnel_hauteur = sac_gestationnel_hauteur;
  existData.sac_gestationnel_diametre = sac_gestationnel_diametre;
  existData.sac_gestationnel_decollement = sac_gestationnel_decollement;
  existData.embryon_visible = embryon_visible;
  existData.morpho_extremite_cephalique = morpho_extremite_cephalique;
  existData.morpho_membres = morpho_membres;
  existData.lcc = lcc;
  existData.bip = bip;
  existData.activite_cardiaque = activite_cardiaque;
  existData.commentaire = commentaire;



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
    existData = await echoelevensa.findById(id);
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
