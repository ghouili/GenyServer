
const interrogatoirepma = require("../models/interrogatoirepma");

const GetAllData = async (req, res) => {
    let AllData;
    try {
        AllData = await interrogatoirepma.find();
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
        existData = await interrogatoirepma.findById(id);
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


    const newData = new interrogatoirepma(req.body);
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
        interrogatoirepma,
        rdv_suivant_apres,
        rdv_suivant_avant,
        ip_droit,
        ir_droit,
        ip_gauche,
        ir_gauche,
        notch_droit,
        notch_gauche,
        col_long,
        col_entonnoir,
        col_orifice_interne,
        echo_morpho,
        echo_t3,
        seins,
        examen_sous_speculum,
        leuco,
        tv,
        poids,
        ta,
        temperature,
        alb,
        gly,
        commentaires_cliniques,
        pelvis_maternel,
        lmc,


    } = req.body;
    let existData;
    try {
        existData = await interrogatoirepma.findById(id);
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
 
   existData.interrogatoirepma = interrogatoirepma;
    existData.rdv_suivant_apres = rdv_suivant_apres;
    existData.rdv_suivant_avant = rdv_suivant_avant;
    existData.ip_droit = ip_droit;
    existData.ir_droit = ir_droit;
    existData.ip_gauche = ip_gauche;
    existData.ir_gauche = ir_gauche;
    existData.notch_droit = notch_droit;
    existData.notch_gauche = notch_gauche;
    existData.col_long = col_long;
    existData.col_entonnoir = col_entonnoir;
    existData.col_orifice_interne = col_orifice_interne;
    existData.echo_morpho = echo_morpho;
    existData.echo_t3 = echo_t3;
    existData.seins = seins;
    existData.examen_sous_speculum = examen_sous_speculum;
    existData.leuco = leuco;
    existData.tv = tv;
    existData.poids = poids;
    existData.ta = ta;
    existData.temperature = temperature;
    existData.alb = alb;
    existData.gly = gly;
    existData.commentaires_cliniques = commentaires_cliniques;
    existData.pelvis_maternel = pelvis_maternel;
    existData.lmc = lmc;



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
        existData = await interrogatoirepma.findById(id);
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
