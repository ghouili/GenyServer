

const grossesse = require("../models/grossesse");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await grossesse.find();
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
    existData = await grossesse.findById(id);
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


  const newData = new grossesse(req.body);
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
    patient,
    encours,
    nom_conjoint,
    prenom_conjoint,
    date_naissance_conjoint,
    telephone_conjoint,
    groupe_sanguin_conjoint,
    consanguinite_conjoint,
    etat_sante_conjoint,
    poids_avant_grossesse,
    taille,
    ddr,
    ddr_corrige,
    ddg_corrige,
    cycle,
    nb_foetus,
    type_grossesse,
    type_grossesse_v2,
    conception,
    conception_v2,
    date_echo,
    lcc_1,
    lcc_2,
    lcc_3,
    cn_1,
    cn_2,
    cn_3,
    score_herman_1,
    score_herman_1_v2,
    score_herman_2,
    score_herman_2_v2,
    score_herman_3,
    score_herman_3_v2,
    test_t21_fait,
    risque,
    risque_t21_age,
    risque_t21_bio,
    risque_t18_13,
    msres_1_type,
    msres_1_type_v2,
    msres_1_val,
    msres_1_mom,
    msres_2_type,
    msres_2_type_v2,
    msres_2_val,
    msres_2_mom,
    screening_premier_trimestre,
    screening_deuxieme_trimestre,
    caryotype_type,
    caryotype_val,
    dpni,
    dpni_comment,
    diabete,
    diabete_v2,
    tabac,
    listeria,
    toxoplasmose,
    toxoplasmose_v2,
    cmv,
    alcool,
    epp,
    ppo,
    adp,
    allaitement_maternel,
    allaitement_artificiel,
    aspegic,
    infos_complemenatires,
    lieu_accouchement_principal,
    lieu_accouchement,
    lieu_accouchement_libre,
    notes,


  } = req.body;
  let existData;
  try {
    existData = await grossesse.findById(id);
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

  existData.patient = patient;
  existData.encours = encours;
  existData.nom_conjoint = nom_conjoint;
  existData.prenom_conjoint = prenom_conjoint;
  existData.date_naissance_conjoint = date_naissance_conjoint;
  existData.telephone_conjoint = telephone_conjoint;
  existData.groupe_sanguin_conjoint = groupe_sanguin_conjoint;
  existData.consanguinite_conjoint = consanguinite_conjoint;
  existData.etat_sante_conjoint = etat_sante_conjoint;
  existData.poids_avant_grossesse = poids_avant_grossesse;
  existData.taille = taille;
  existData.ddr = ddr;
  existData.ddr_corrige = ddr_corrige;
  existData.ddg_corrige = ddg_corrige;
  existData.cycle = cycle;
  existData.nb_foetus = nb_foetus;
  existData.type_grossesse = type_grossesse;
  existData.type_grossesse_v2 = type_grossesse_v2;
  existData.conception = conception;
  existData.conception_v2 = conception_v2;
  existData.date_echo = date_echo;
  existData.lcc_1 = lcc_1;
  existData.lcc_2 = lcc_2;
  existData.lcc_3 = lcc_3;
  existData.cn_1 = cn_1;
  existData.cn_2 = cn_2;
  existData.cn_3 = cn_3;
  existData.score_herman_1 = score_herman_1;
  existData.score_herman_1_v2 = score_herman_1_v2;
  existData.score_herman_2 = score_herman_2;
  existData.score_herman_2_v2 = score_herman_2_v2;
  existData.score_herman_3 = score_herman_3;
  existData.score_herman_3_v2 = score_herman_3_v2;
  existData.test_t21_fait = test_t21_fait;
  existData.risque = risque;
  existData.risque_t21_age = risque_t21_age;
  existData.risque_t21_bio = risque_t21_bio;
  existData.risque_t18_13 = risque_t18_13;
  existData.msres_1_type = msres_1_type;
  existData.msres_1_type_v2 = msres_1_type_v2;
  existData.msres_1_val = msres_1_val;
  existData.msres_1_mom = msres_1_mom;
  existData.msres_2_type = msres_2_type;
  existData.msres_2_type_v2 = msres_2_type_v2;
  existData.msres_2_val = msres_2_val;
  existData.msres_2_mom = msres_2_mom;
  existData.screening_premier_trimestre = screening_premier_trimestre;
  existData.screening_deuxieme_trimestre = screening_deuxieme_trimestre;
  existData.caryotype_type = caryotype_type;
  existData.caryotype_val = caryotype_val;
  existData.dpni = dpni;
  existData.dpni_comment = dpni_comment;
  existData.diabete = diabete;
  existData.diabete_v2 = diabete_v2;
  existData.tabac = tabac;
  existData.listeria = listeria;
  existData.toxoplasmose = toxoplasmose;
  existData.toxoplasmose_v2 = toxoplasmose_v2;
  existData.cmv = cmv;
  existData.alcool = alcool;
  existData.epp = epp;
  existData.ppo = ppo;
  existData.adp = adp;
  existData.allaitement_maternel = allaitement_maternel;
  existData.allaitement_artificiel = allaitement_artificiel;
  existData.aspegic = aspegic;
  existData.infos_complemenatires = infos_complemenatires;
  existData.lieu_accouchement_principal = lieu_accouchement_principal;
  existData.lieu_accouchement = lieu_accouchement;
  existData.lieu_accouchement_libre = lieu_accouchement_libre;
  existData.note = note;



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
    existData = await grossesse.findById(id);
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
