

const ordonnances = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester ordonnances from controller !!", data: null });
};

exports.ordonnances = ordonnances
