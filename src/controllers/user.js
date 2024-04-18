const user = require("../models/user");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await user.find();
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
    existData = await user.findById(id);
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

  //   console.log(req.body);

  if (req.file) {
    req.body.avatar = req.file.filename;
  }

  const newData = new user(req.body);
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
    title,
    nom,
    prenom,
    dateNaiss,
    email,
    tel,
    telPrincipal,
    telSecond,
    codeSSocial,
    codeGonventionnel,
    ExistSignature,
    signature,
    echoParDefaut,
    profil,
    username,
    password,
    actif,
    avatar,
  } = req.body;
  let existData;
  try {
    existData = await user.findById(id);
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
  if (req.file) {
    existData.avatar = req.file.filename;
  }

  existData.title = title;
  existData.nom = nom;
  existData.prenom = prenom;
  existData.dateNaiss = dateNaiss;
  existData.email = email;
  existData.tel = tel;
  existData.telPrincipal = telPrincipal;
  existData.telSecond = telSecond;
  existData.codeSSocial = codeSSocial;
  existData.codeGonventionnel = codeGonventionnel;
  existData.ExistSignature = ExistSignature;
  existData.signature = signature;
  existData.echoParDefaut = echoParDefaut;
  existData.profil = profil;
  existData.username = username;
  existData.password = password;
  existData.actif = actif;

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
    existData = await user.findById(id);
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
