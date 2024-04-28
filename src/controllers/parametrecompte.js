const paramcompte = require("../models/parametrecompte");

const GetAllData = async (req, res) => {
    let AllData;
    try {
        AllData = await paramcompte.find();
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
        existData = await paramcompte.findById(id);
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


    const newData = new paramcompte(req.body);
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
        compte,
        timezone,
        duree_rdv_defaut,
        praticien_defaut,
        antecedents_familiaux_defaut,
        antecedents_medico_chirurgicaux_defaut,
        antecedents_gynecologiques_defaut,
        logo,
        logo_a4,
        footer,
        footer_a4,
        nom_entete,
        marge_entete,
        marge_footer,
        marge_gauche,
        marge_droite,
        ajouter_antecedents_edition,
        ajouter_entetes_edition,
        ajouter_entete_ord,
        ajouter_entete_cert_med,
        ajouter_entete_cert_pres,
        ajouter_entete_lettre_acc,
        ajouter_entete_prescr_bio,
        ajouter_entete_lettre_confidentielle,
        ajouter_entete_attestation_grossesse,
        ajouter_entete_lettre_fittofly,
        ajouter_date_courriers,
        ajouter_date_cro,
        duree_gross_sa,
        duree_gross_j,
        gross_echo_datation_sa_1,
        gross_echo_datation_j_1,

    } = req.body;
    let existData;
    try {
        existData = await paramcompte.findById(id);
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
    existData.timezone = timezone;
    existData.duree_rdv_defaut = duree_rdv_defaut;
    existData.praticien_defaut = praticien_defaut;
    existData.antecedents_familiaux_defaut = antecedents_familiaux_defaut;
    existData.antecedents_medico_chirurgicaux_defaut = antecedents_medico_chirurgicaux_defaut;
    existData.antecedents_gynecologiques_defaut = antecedents_gynecologiques_defaut;
    existData.logo = logo;
    existData.logo_a4 = logo_a4;
    existData.footer = footer;
    existData.footer_a4 = footer_a4;
    existData.nom_entete = nom_entete;
    existData.marge_entete = marge_entete;
    existData.marge_footer = marge_footer;
    existData.marge_gauche = marge_gauche;
    existData.marge_droite = marge_droite;
    existData.ajouter_antecedents_edition = ajouter_antecedents_edition;
    existData.ajouter_entetes_edition = ajouter_entetes_edition;
    existData.ajouter_entete_ord = ajouter_entete_ord;
    existData.ajouter_entete_cert_med = ajouter_entete_cert_med;
    existData.ajouter_entete_cert_pres = ajouter_entete_cert_pres;
    existData.ajouter_entete_lettre_acc = ajouter_entete_lettre_acc;
    existData.ajouter_entete_prescr_bio = ajouter_entete_prescr_bio;
    existData.ajouter_entete_lettre_confidentielle = ajouter_entete_lettre_confidentielle;
    existData.ajouter_entete_attestation_grossesse = ajouter_entete_attestation_grossesse;
    existData.ajouter_entete_lettre_fittofly = ajouter_entete_lettre_fittofly;
    existData.ajouter_date_courriers = ajouter_date_courriers;
    existData.ajouter_date_cro = ajouter_date_cro;
    existData.duree_gross_sa = duree_gross_sa;
    existData.duree_gross_j = duree_gross_j;
    existData.gross_echo_datation_sa_1 = gross_echo_datation_sa_1;
    existData.gross_echo_datation_j_1 = gross_echo_datation_j_1;



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
        existData = await paramcompte.findById(id);
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

