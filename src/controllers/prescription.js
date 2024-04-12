

const prescription = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "prescription test from controller !!", data: null });
};

exports.prescription = prescription;
