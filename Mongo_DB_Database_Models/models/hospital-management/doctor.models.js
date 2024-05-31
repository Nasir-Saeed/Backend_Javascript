import mongoose from "mongoose";

const workingInHours = new mongoose.Schema(
  {
    DoctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    NumberOfHours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: String,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    doctorWorkingHours: [workingInHours],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
