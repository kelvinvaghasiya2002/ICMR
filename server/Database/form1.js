import mongoose from "mongoose";

const formSchema = new mongoose.Schema({

    // formA
    A1: { type: String, default: '' },
    A2: { type: String, default: '' },
    A3: { type: String, default: '' },
    A4: { type: String, default: '' },
    A5: { type: String, default: '' },
    A6: { type: String, default: '' },
    A7: { type: String, default: '' },
    A8: { type: String, default: '' },
    A9: { type: String, default: '' },
    A10: { type: String, default: '' },
    A11: { type: [String], default: [] },
    A12: { type: String, default: '' },
    
    // formB
    B1: { type: String, default: "" },
    B2: { type: String, default: "" },
    B3: { type: String, default: "" },
    B4: { type: [String], default: [] },
    B5: { type: String, default: "" },
    B6: { type: String, default: "" },
    B7: { type: String, default: "" },
    B8: { type: String, default: "" },
    B9: { type: String, default: "" },
    B10: { type: String, default: "" },
    B11: { type: [String], default: [] },
    B12: { type: [String], default: [] },
    B13: { type: [String], default: [] },
    B14: { type: String, default: "" },
    B15: { type: String, default: "" }
    
});

export const form1 = new mongoose.model("form1",formSchema);