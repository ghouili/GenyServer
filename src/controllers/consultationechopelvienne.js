 
  



const constechopelvienne = require("../models/consultationcolposcopie");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await constechopelvienne.find();
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
    existData = await constechopelvienne.findById(id);
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


  const newData = new constechopelvienne(req.body);
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
    titre_echo_pelvienne ,
    position_uterus ,
    lateralisation ,
    longueur ,
    largeur ,
    hauteur ,
    longueur_totale ,
    volume_uterin ,
    volume_uterin_commentaire ,
    asymetrie ,
    paroi_anterieure ,
    paroi_posterieure ,
    mobilite ,
    structures ,
    commentaires_myometre ,
    cavite ,
    malformation ,
    largeur_interostiale ,
    ligne_cavitaire ,
    hysterometrie ,
    adenomyose ,
    adenomyose_conclusion ,
    type_dispositif_intra_uterin ,
    localisation_dispositif_intra_uterin ,
    anomalies_dispositif_intra_uterin ,
    dispositif_intra_tubaire ,
    endometre_visualisation ,
    endometre_echogenicite ,
    endometre_epaisseur ,
    col_longueur ,
    col_aspect ,
    col_vascularisation ,
    commentaire_col_endometre ,
    ovaire_gauche_visibilite ,
    ovaire_gauche_aspect ,
    ovaire_gauche_longueur ,
    ovaire_gauche_largeur ,
    ovaire_gauche_hauteur ,
    ovaire_gauche_volume ,
    ovaire_gauche_mobilite ,
    ovaire_gauche_accessibilite ,
    ovaire_gauche_follicules ,
    ovaire_gauche_follicules_list ,
    ovaire_gauche_commentaire ,
    ovaire_droit_visibilite ,
    ovaire_droit_aspect ,
    ovaire_droit_longueur ,
    ovaire_droit_largeur ,
    ovaire_droit_hauteur ,
    ovaire_droit_volume ,
    ovaire_droit_mobilite ,
    ovaire_droit_accessibilite ,
    ovaire_droit_follicules ,
    ovaire_droit_follicules_list ,
    ovaire_droit_commentaire ,
    cul_de_sac_latero ,
    conclusion_echo ,

  } = req.body;
  let existData;
  try {
    existData = await constechopelvienne.findById(id);
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

  existData.titre_echo_pelvienne = titre_echo_pelvienne ;
  existData.position_uterus = position_uterus ;
  existData.lateralisation = lateralisation ;
  existData.longueur = longueur ;
  existData.largeur = largeur ;
  existData.hauteur = hauteur ;
  existData.longueur_totale = longueur_totale ;
  existData.volume_uterin = volume_uterin ;
  existData.volume_uterin_commentaire = volume_uterin_commentaire ;
  existData.asymetrie = asymetrie ;
  existData.paroi_anterieure = paroi_anterieure ;
  existData.paroi_posterieure = paroi_posterieure ;
  existData.mobilite = mobilite ;
  existData.structures = structures ;
  existData.commentaires_myometre = commentaires_myometre ;
  existData.cavite = cavite ;
  existData.malformation = malformation ;
  existData.largeur_interostiale = largeur_interostiale ;
  existData.ligne_cavitaire = ligne_cavitaire ;
  existData.hysterometrie = hysterometrie ;
  existData.adenomyose = adenomyose ;
  existData.adenomyose_conclusion = adenomyose_conclusion ;
  existData.type_dispositif_intra_uterin = type_dispositif_intra_uterin ;
  existData.localisation_dispositif_intra_uterin = localisation_dispositif_intra_uterin ;
  existData.anomalies_dispositif_intra_uterin = anomalies_dispositif_intra_uterin ;
  existData.dispositif_intra_tubaire = dispositif_intra_tubaire ;
  existData.endometre_visualisation = endometre_visualisation ;
  existData.endometre_echogenicite = endometre_echogenicite ;
  existData.endometre_epaisseur = endometre_epaisseur ;
  existData.col_longueur = col_longueur ;
  existData.col_aspect = col_aspect ;
  existData.col_vascularisation = col_vascularisation ;
  existData.commentaire_col_endometre = commentaire_col_endometre ;
  existData.ovaire_gauche_visibilite = ovaire_gauche_visibilite ;
  existData.ovaire_gauche_aspect = ovaire_gauche_aspect ;
  existData.ovaire_gauche_longueur = ovaire_gauche_longueur ;
  existData.ovaire_gauche_largeur = ovaire_gauche_largeur ;
  existData.ovaire_gauche_hauteur = ovaire_gauche_hauteur ;
  existData.ovaire_gauche_volume = ovaire_gauche_volume ;
  existData.ovaire_gauche_mobilite = ovaire_gauche_mobilite ;
  existData.ovaire_gauche_accessibilite = ovaire_gauche_accessibilite ;
  existData.ovaire_gauche_follicules = ovaire_gauche_follicules ;
  existData.ovaire_gauche_follicules_list = ovaire_gauche_follicules_list ;
  existData.ovaire_gauche_commentaire = ovaire_gauche_commentaire ;
  existData.ovaire_droit_visibilite = ovaire_droit_visibilite ;
  existData.ovaire_droit_aspect = ovaire_droit_aspect ;
  existData.ovaire_droit_longueur = ovaire_droit_longueur ;
  existData.ovaire_droit_largeur = ovaire_droit_largeur ;
  existData.ovaire_droit_hauteur = ovaire_droit_hauteur ;
  existData.ovaire_droit_volume = ovaire_droit_volume ;
  existData.ovaire_droit_mobilite = ovaire_droit_mobilite ;
  existData.ovaire_droit_accessibilite = ovaire_droit_accessibilite ;
  existData.ovaire_droit_follicules = ovaire_droit_follicules ;
  existData.ovaire_droit_follicules_list = ovaire_droit_follicules_list ;
  existData.ovaire_droit_commentaire = ovaire_droit_commentaire ;
  existData.cul_de_sac_latero = cul_de_sac_latero ;
  existData.conclusion_echo = conclusion_echo ;
  
  


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
    existData = await constechopelvienne.findById(id);
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
