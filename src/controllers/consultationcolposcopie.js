


const constcolposcopie = require("../models/consultationcolposcopie");

const GetAllData = async (req, res) => {
    let AllData;
    try {
        AllData = await constcolposcopie.find();
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
        existData = await constcolposcopie.findById(id);
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


    const newData = new constcolposcopie(req.body);
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
        indications,
        test_hpv,
        typage,
        commentaires_1,
        examen_sans_preparation,
        commentaires_2,
        acide_acetique,
        tag,
        localisation,
        lugol,
        commentaires_3,
        biopsie,
        commentaires_4,

    } = req.body;
    let existData;
    try {
        existData = await constcolposcopie.findById(id);
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

    existData.indications = indications;
    existData.test_hpv = test_hpv;
    existData.typage = typage;
    existData.commentaires_1 = commentaires_1;
    existData.examen_sans_preparation = examen_sans_preparation;
    existData.commentaires_2 = commentaires_2;
    existData.acide_acetique = acide_acetique;
    existData.tag = tag;
    existData.localisation = localisation;
    existData.lugol = lugol;
    existData.commentaires_3 = commentaires_3;
    existData.biopsie = biopsie;
    existData.commentaires_4 = commentaires_4;


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
        existData = await constcolposcopie.findById(id);
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
