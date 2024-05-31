import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    doctorName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    patientName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
