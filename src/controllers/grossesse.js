const Grossesse = require("../models/grossesse");

const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await Grossesse.find();
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
    existData = await Grossesse.findById(id);
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

  const newData = new Grossesse(req.body);
  
  try {
    await newData.save();
  } catch (error) {
    console.log(error)
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
    enCours,
    nomConjoint,
    prenomConjoint,
    dnConjoint,
    telConjoint,
    groupeSanguinConjoint,
    consanguiniteConjoint,
    etatSanteConjoint,
    poidsAvantGrossesse,
    taille,
    ddr,
    ddrCorrige,
    ddg,
    ddgCorrige,
    cycle,
    nbfoetus,
    typeGrossesse,
    typeGrossesseV2,
    conception,
    conceptionV2,
    dateEcho,
    lcc1,
    lcc2,
    lcc3,
    cn1,
    cn2,
    cn3,
    scoreHerman1,
    scoreHerman1V2,
    scoreHerman2,
    scoreHerman2V2,
    scoreHerman3,
    scoreHerman3V2,
    testT21Fait,
    risque,
    risqueT21Age,
    risqueT21Bio,
    risqueT1813,
    msres1Type,
    msres1TypeV2,
    msres1Val,
    msres1Mom,
    msres2Type,
    msres2TypeV2,
    msres2Val,
    msres2Mom,
    screeningPremierTrimestre,
    screeningDeuxiemeTrimestre,
    caryotypeType,
    caryotypeVal,
    dpni,
    dpniComment,
    diabete,
    diabeteV2,
    tabac,
    listeria,
    toxoplasmose,
    toxoplasmoseV2,
    cmv,
    alcool,
    epp,
    ppo,
    adp,
    allaitementMaternel,
    allaitementArtificiel,
    aspegic,
    infosComplementaires,
    lieuAccouchementPrincipale,
    lieuAccouchementLibre,
    notes,
  } = req.body;
  let existData;
  try {
    existData = await Grossesse.findById(id);
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
  existData.enCours = enCours;
  existData.nomConjoint = nomConjoint;
  existData.prenomConjoint = prenomConjoint;
  existData.dnConjoint = dnConjoint;
  existData.telConjoint = telConjoint;
  existData.groupeSanguinConjoint = groupeSanguinConjoint;
  existData.consanguiniteConjoint = consanguiniteConjoint;
  existData.etatSanteConjoint = etatSanteConjoint;
  existData.poidsAvantGrossesse = poidsAvantGrossesse;
  existData.taille = taille;
  existData.ddr = ddr;
  existData.ddrCorrige = ddrCorrige;
  existData.ddg = ddg;
  existData.ddgCorrige = ddgCorrige;
  existData.cycle = cycle;
  existData.nbfoetus = nbfoetus;
  existData.typeGrossesse = typeGrossesse;
  existData.typeGrossesseV2 = typeGrossesseV2;
  existData.conception = conception;
  existData.conceptionV2 = conceptionV2;
  existData.dateEcho = dateEcho;
  existData.lcc1 = lcc1;
  existData.lcc2 = lcc2;
  existData.lcc3 = lcc3;
  existData.cn1 = cn1;
  existData.cn2 = cn2;
  existData.cn3 = cn3;
  existData.scoreHerman1 = scoreHerman1;
  existData.scoreHerman1V2 = scoreHerman1V2;
  existData.scoreHerman2 = scoreHerman2;
  existData.scoreHerman2V2 = scoreHerman2V2;
  existData.scoreHerman3 = scoreHerman3;
  existData.scoreHerman3V2 = scoreHerman3V2;
  existData.testT21Fait = testT21Fait;
  existData.risque = risque;
  existData.risqueT21Age = risqueT21Age;
  existData.risqueT21Bio = risqueT21Bio;
  existData.risqueT1813 = risqueT1813;
  existData.msres1Type = msres1Type;
  existData.msres1TypeV2 = msres1TypeV2;
  existData.msres1Val = msres1Val;
  existData.msres1Mom = msres1Mom;
  existData.msres2Type = msres2Type;
  existData.msres2TypeV2 = msres2TypeV2;
  existData.msres2Val = msres2Val;
  existData.msres2Mom = msres2Mom;
  existData.screeningPremierTrimestre = screeningPremierTrimestre;
  existData.screeningDeuxiemeTrimestre = screeningDeuxiemeTrimestre;
  existData.caryotypeType = caryotypeType;
  existData.caryotypeVal = caryotypeVal;
  existData.dpni = dpni;
  existData.dpniComment = dpniComment;
  existData.diabete = diabete;
  existData.diabeteV2 = diabeteV2;
  existData.tabac = tabac;
  existData.listeria = listeria;
  existData.toxoplasmose = toxoplasmose;
  existData.toxoplasmoseV2 = toxoplasmoseV2;
  existData.cmv = cmv;
  existData.alcool = alcool;
  existData.epp = epp;
  existData.ppo = ppo;
  existData.adp = adp;
  existData.allaitementMaternel = allaitementMaternel;
  existData.allaitementArtificiel = allaitementArtificiel;
  existData.aspegic = aspegic;
  existData.infosComplementaires = infosComplementaires;
  existData.lieuAccouchementPrincipale = lieuAccouchementPrincipale;
  existData.lieuAccouchementLibre = lieuAccouchementLibre;
  existData.notes = notes;

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
    existData = await Grossesse.findById(id);
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
