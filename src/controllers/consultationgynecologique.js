const concultationgynecol = require("../models/consultationgynecologique");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await concultationgynecol.find();
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
    existData = await concultationgynecol.findById(id);
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


  const newData = new concultationgynecol(req.body);
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
    motif_consultation ,
    motif_autre ,
    age_menarche ,
    cycles ,
    duree ,
    abondance ,
    douleur ,
    syndrome_premenstruel ,
    ddr ,
    presence_rapports_sexuels ,
    partenaire ,
    age_premier_rapport ,
    mode_contraception ,
    commentaire_contraception ,
    observance ,
    satisfaction ,
    ths ,
    bouffees_chaleur ,
    incontinence ,
    sensation_pesanteur ,
    dyspareunies ,
    commentaire ,
    endometriose ,
    seins ,
    examen_sous_speculum ,
    leuco ,
    tv ,
    poids ,
    ta ,
    temperature ,
    alb ,
    gly ,
    commentaires_cliniques ,
    examens ,
    traitements ,
    observations ,
    effets_indesirables ,

  } = req.body;
  let existData;
  try {
    existData = await concultationgynecol.findById(id);
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

  existData.motif_consultation=motif_consultation;
  existData.motif_autre=motif_autre;
  existData.age_menarche=age_menarche;
  existData.cycles=cycles;
  existData.duree=duree;
  existData.abondance=abondance;
  existData.douleur=douleur;
  existData.syndrome_premenstruel=syndrome_premenstruel;
  existData.ddr=ddr;
  existData.presence_rapports_sexuels=presence_rapports_sexuels;
  existData.partenaire=partenaire;
  existData.age_premier_rapport=age_premier_rapport;
  existData.mode_contraception=mode_contraception;
  existData.commentaire_contraception=commentaire_contraception;
  existData.observance=observance;
  existData.satisfaction=satisfaction;
  existData.ths=ths;
  existData.bouffees_chaleur=bouffees_chaleur;
  existData.incontinence=incontinence;
  existData.sensation_pesanteur=sensation_pesanteur;
  existData.dyspareunies=dyspareunies;
  existData.commentaire=commentaire;
  existData.endometriose=endometriose;
  existData.seins=seins;
  existData.examen_sous_speculum=examen_sous_speculum;
  existData.leuco=leuco;
  existData.tv=tv;
  existData.poids=poids;
  existData.ta=ta;
  existData.temperature=temperature;
  existData.alb=alb;
  existData.gly=gly;
  existData.commentaires_cliniques=commentaires_cliniques;
  existData.examens=examens;
  existData.traitements=traitements;
  existData.observations=observations;
  existData.effets_indesirables=effets_indesirables;
   
   
  
  
  


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
    existData = await concultationgynecol.findById(id);
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
