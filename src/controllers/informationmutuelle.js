

const informationmutuelle = async (req, res) => {
    return res
        .status(201)
        .json({ success: true, message: "Tester information mutuelle from controller !!", data: null });
};

exports.informationmutuelle = informationmutuelle
