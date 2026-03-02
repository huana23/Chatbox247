const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: () => Date.now() + 5 * 60 * 1000, // 5 phút
    },
  },
  {
    timestamps: true
  }
);

const Otp = mongoose.models.Otp || mongoose.model('Otp', otpSchema);

module.exports = Otp;