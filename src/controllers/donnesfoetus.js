 
const foetus = require("../models/donnesfoetus");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await foetus.find();
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
    existData = await foetus.findById(id);
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


  const newData = new foetus(req.body);
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
   
    consultation,
    presentation,
    activite_cardiaque,
    mobilite,
    poids,
    lcc,
    dat,
    cn,
    fc,
    bip,
    pc,
    pa,
    femur,
    bassinet_droit,
    bassinet_gauche,
    cc,
    cervelet,
    cubitus,
    dio,
    epn,
    humerus,
    opn,
    opn_presence,
    oreille,
    perone,
    pied,
    placenta,
    radius,
    rein_droite,
    rein_gauche,
    thyroide,
    tibia,
    vl,
    poids_estime,
    doppler_cordon_ip,
    doppler_cordon_ir,
    doppler_cordon_diastole,
    doppler_acm_ip,
    doppler_acm_ir,
    doppler_acm_vitesse,
    doppler_acm_mom,
    doppler_dv_ip,
    doppler_dv_ir,
    doppler_dv_onde,
    morpho_crane,
    morpho_struct,
    morpho_face,
    morpho_thorax,
    morpho_coeur,
    morpho_pole_cepha,
    morpho_abdo,
    morpho_digest,
    morpho_urine,
    morpho_rachis,
    morpho_membres,
    morpho_oge,
    annexe_liquide_amnio,
    morpho_liquide_amnio,
    morpho_trophoblaste_localisation,
    morpho_trophoblaste_aspect,
    morpho_decol,
    morpho_placenta,
    morpho_cordon,
    morpho_cou,
    commentaires ,
    

  } = req.body;
  let existData;
  try {
    existData = await foetus.findById(id);
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
  existData.consultation = consultation; 
  existData.presentation = presentation; 
  existData.activite_cardiaque = activite_cardiaque; 
  existData.mobilite = mobilite; 
  existData.poids = poids; 
  existData.lcc = lcc; 
  existData.dat = dat; 
  existData.cn = cn; 
  existData.fc = fc; 
  existData.bip = bip; 
  existData.pc = pc; 
  existData.pa = pa; 
  existData.femur = femur; 
  existData.bassinet_droit = bassinet_droit; 
  existData.bassinet_gauche = bassinet_gauche; 
  existData.cc = cc; 
  existData.cervelet = cervelet; 
  existData.cubitus = cubitus; 
  existData.dio = dio; 
  existData.epn = epn; 
  existData.humerus = humerus; 
  existData.opn = opn; 
  existData.opn_presence = opn_presence; 
  existData.oreille = oreille; 
  existData.perone = perone; 
  existData.pied = pied; 
  existData.placenta = placenta; 
  existData.radius = radius; 
  existData.rein_droite = rein_droite; 
  existData.rein_gauche = rein_gauche; 
  existData.thyroide = thyroide; 
  existData.tibia = tibia; 
  existData.vl = vl; 
  existData.poids_estime = poids_estime; 
  existData.doppler_cordon_ip = doppler_cordon_ip; 
  existData.doppler_cordon_ir = doppler_cordon_ir; 
  existData.doppler_cordon_diastole = doppler_cordon_diastole; 
  existData.doppler_acm_ip = doppler_acm_ip; 
  existData.doppler_acm_ir = doppler_acm_ir; 
  existData.doppler_acm_vitesse = doppler_acm_vitesse; 
  existData.doppler_acm_mom = doppler_acm_mom; 
  existData.doppler_dv_ip = doppler_dv_ip; 
  existData.doppler_dv_ir = doppler_dv_ir; 
  existData.doppler_dv_onde = doppler_dv_onde; 
  existData.morpho_crane = morpho_crane; 
  existData.morpho_struct = morpho_struct; 
  existData.morpho_face = morpho_face; 
  existData.morpho_thorax = morpho_thorax; 
  existData.morpho_coeur = morpho_coeur; 
  existData.morpho_pole_cepha = morpho_pole_cepha; 
  existData.morpho_abdo = morpho_abdo; 
  existData.morpho_digest = morpho_digest; 
  existData.morpho_urine = morpho_urine; 
  existData.morpho_rachis = morpho_rachis; 
  existData.morpho_membres = morpho_membres; 
  existData.morpho_oge = morpho_oge; 
  existData.annexe_liquide_amnio = annexe_liquide_amnio; 
  existData.morpho_liquide_amnio = morpho_liquide_amnio; 
  existData.morpho_trophoblaste_localisation = morpho_trophoblaste_localisation; 
  existData.morpho_trophoblaste_aspect = morpho_trophoblaste_aspect; 
  existData.morpho_decol = morpho_decol; 
  existData.morpho_placenta = morpho_placenta; 
  existData.morpho_cordon = morpho_cordon; 
  existData.morpho_cou = morpho_cou; 
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
    existData = await foetus.findById(id);
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
