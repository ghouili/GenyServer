const courrier = require("../models/courrier");


const GetAllData = async (req, res) => {
  let AllData;
  try {
    AllData = await courrier.find();
  } catch (error) {
    console.log(error)
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

exports.GetAllData = GetAllData;
