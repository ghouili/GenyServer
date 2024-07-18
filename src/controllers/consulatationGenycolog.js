const consultationGynecolog = require("../models/consulatationGenycolog");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await consultationGynecolog.find();
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
    existData = await consultationGynecolog.findById(id);
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

  const newData = new consultationGynecolog(req.body);
  try {
    await newData.save();
  } catch (error) {
    console.log(error);
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
    title,
    motifConsultation,
    practicien,
    rapports,
    partenaire,
    endometriose,
    ageRapport,
    thm,
    boufees,
    urinaire,
    pesanteur,
    dyspareunies,
    commentaireMenopause,
    duree,
    abondance,
    douleur,
    syndromePre,
    ddr,
    mode,
    commentaireContrace,
    observance,
    satisfaction,
    poid,
    ta,
    temperature,
    alb,
    gly,
    siens,
    ExSousSpect,
    uteruspos,
    uteruslateralisation,
    uteruslong,
    uteruslargeur,
    uterushauteur,
    uteruslongtotale,
    voluterin,
    commentairuterus,
    asymeuterus,
    paroianteuterus,
    paroipostuterus,
    mobiliteuterus,
    structureuterus,
    commyomesuterus,
    uteruscavite,
    uterusmalformation,
    uteruslignecavitaire,
    uteruslarinterostiale,
    uterushysterometrie,
    endometrevisualisation,
    endometreechogenicite,
    endometreepaisseur,
    collongeur,
    colaspect,
    colvasculaire,
    colcommentaire,
    colintrauterin,
    colintratubaire,
    ovgauchvisibilite,
    ovgauchaspect,
    ovgauchlongeur,
    ovgauchlargeur,
    ovgauchhauteur,
    ovgauchvolume,
    ovgauchaccessibilite,
    ovgauchfollicule,
    ovgauchcommentaire,
    ovdroitevisibilite,
    ovdroiteaspect,
    ovdroitelongeur,
    ovdroitelargeur,
    ovdroitehauteur,
    ovdroitevolume,
    ovdroiteaccessibilite,
    ovdroitefollicule,
    ovdroitecommentaire,
    culdesac,
    conclusionechographie,
    conclusion,
    cat,
    commentaire,
    appareilecho,
  } = req.body;
  let existData;
  try {
    existData = await consultationGynecolog.findById(id);
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

  existData.title = title;
  existData.motifConsultation = motifConsultation;
  existData.practicien = practicien;
  existData.rapports = rapports;
  existData.partenaire = partenaire;
  existData.endometriose = endometriose;
  existData.ageRapport = ageRapport;
  existData.thm = thm;
  existData.boufees = boufees;
  existData.urinaire = urinaire;
  existData.pesanteur = pesanteur;
  existData.dyspareunies = dyspareunies;
  existData.commentaireMenopause = commentaireMenopause;
  existData.duree = duree;
  existData.abondance = abondance;
  existData.douleur = douleur;
  existData.syndromePre = syndromePre;
  existData.ddr = ddr;
  existData.mode = mode;
  existData.commentaireContrace = commentaireContrace;
  existData.observance = observance;
  existData.satisfaction = satisfaction;
  existData.poid = poid;
  existData.ta = ta;
  existData.temperature = temperature;
  existData.alb = alb;
  existData.gly = gly;
  existData.siens = siens;
  existData.ExSousSpect = ExSousSpect;
  existData.uteruspos = uteruspos;
  existData.uteruslateralisation = uteruslateralisation;
  existData.uteruslong = uteruslong;
  existData.uteruslargeur = uteruslargeur;
  existData.uterushauteur = uterushauteur;
  existData.uteruslongtotale = uteruslongtotale;
  existData.voluterin = voluterin;
  existData.commentairuterus = commentairuterus;
  existData.asymeuterus = asymeuterus;
  existData.paroianteuterus = paroianteuterus;
  existData.paroipostuterus = paroipostuterus;
  existData.mobiliteuterus = mobiliteuterus;
  existData.structureuterus = structureuterus;
  existData.commyomesuterus = commyomesuterus;
  existData.uteruscavite = uteruscavite;
  existData.uterusmalformation = uterusmalformation;
  existData.uteruslignecavitaire = uteruslignecavitaire;
  existData.uteruslarinterostiale = uteruslarinterostiale;
  existData.uterushysterometrie = uterushysterometrie;
  existData.endometrevisualisation = endometrevisualisation;
  existData.endometreechogenicite = endometreechogenicite;
  existData.endometreepaisseur = endometreepaisseur;
  existData.collongeur = collongeur;
  existData.colaspect = colaspect;
  existData.colvasculaire = colvasculaire;
  existData.colcommentaire = colcommentaire;
  existData.colintrauterin = colintrauterin;
  existData.colintratubaire = colintratubaire;
  existData.ovgauchvisibilite = ovgauchvisibilite;
  existData.ovgauchaspect = ovgauchaspect;
  existData.ovgauchlongeur = ovgauchlongeur;
  existData.ovgauchlargeur = ovgauchlargeur;
  existData.ovgauchhauteur = ovgauchhauteur;
  existData.ovgauchvolume = ovgauchvolume;
  existData.ovgauchaccessibilite = ovgauchaccessibilite;
  existData.ovgauchfollicule = ovgauchfollicule;
  existData.ovgauchcommentaire = ovgauchcommentaire;
  existData.ovdroitevisibilite = ovdroitevisibilite;
  existData.ovdroiteaspect = ovdroiteaspect;
  existData.ovdroitelongeur = ovdroitelongeur;
  existData.ovdroitelargeur = ovdroitelargeur;
  existData.ovdroitehauteur = ovdroitehauteur;
  existData.ovdroitevolume = ovdroitevolume;
  existData.ovdroiteaccessibilite = ovdroiteaccessibilite;
  existData.ovdroitefollicule = ovdroitefollicule;
  existData.ovdroitecommentaire = ovdroitecommentaire;
  existData.culdesac = culdesac;
  existData.conclusionechographie = conclusionechographie;
  existData.conclusion = conclusion;
  existData.cat = cat;
  existData.commentaire = commentaire;
  existData.appareilecho = appareilecho;

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
    existData = await consultationGynecolog.findById(id);
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
