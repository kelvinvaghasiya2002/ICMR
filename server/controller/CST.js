import { CSTFORM } from "../Database/CST.js";

export const CSTConroller = async (req, res) => {
  const { CompleteForm, AC3_table, AC15_table } = req.body;
  try {
    const form = await CSTFORM.findOneAndUpdate(
      {
        _id: CompleteForm._id,
        Household_ID: CompleteForm.Household_ID,
        Respondent_ID: CompleteForm.Respondent_ID,
      },
      { ...CompleteForm, AC3_table, AC15_table },
      { new: true }
    );
    if (!form) {
      return res.status(404).json({ error: "Form ID not found" });
    }
    res.json({ message: "Form submitted successfully", form });
  } catch (error) {
    res.status(500).json({ error: "Error submitting form" });
  }
};

//
// export const CSTConroller = (req, res) => {
//   const { CompleteForm } = req.body;
//   CSTFORM.create(CompleteForm)
//     .then((response) => {
//       res.status(200).json({
//         success: "Data submitted successfully!",
//         response: response,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: "Error occured in saving data.",
//       });
//     });
// };

const UniqueCode = async (uniqueCode) => {
  try {
    switch (uniqueCode) {
      case "GJBRC_CS":
        return "GJ06";
      case "ORPUR_CS":
        return "OR13";
      case "MPBHS_CS":
        return "MP04";
      case "PBLDH_CS":
        return "PB10";
      case "PYPDY_CS":
        return "PY01";
      default:
        break;
    }
  } catch (e) {
    console.log("Error in generating code");
  }
};

// create contoller to genrate unique code
export const CSTUniqueCodeGenrator = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    // Find all documents with the same 'AA2' value
    const existingRecords = await CSTFORM.countDocuments({ AA2: code });

    // Generate the unique code by appending the count of existing records
    const Respondent_ID = `${code}_${existingRecords + 1}`;
    const Household_ID = `${await UniqueCode(code)}_${
      existingRecords + 1
    }`;
    const uniqueCode = {
      AA2: code,
      Respondent_ID,
      Household_ID,
    };

    // Create a new record with the unique code
    const newRecord = await CSTFORM.create({ ...uniqueCode });

    // Send the success response with the newly created record
    res.status(200).json({ success: "Code Generated!", uniqueCode: newRecord });
  } catch (err) {
    console.error("Error in generating code:", err);
    res.status(500).json({ error: "Error in generating code" });
  }
};
