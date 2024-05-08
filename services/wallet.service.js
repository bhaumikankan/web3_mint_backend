const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Wallet } = require("../models");

module.exports = class WalletService {
  static async createWallet(payload) {
    try {
      const wallet = await Wallet.create({ ...payload });
      return wallet;
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    }
  }

  static async getWallet(filter) {
    try {
      const result = await Wallet.find(filter);

      return result;
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    }
  }

  static async getOneWallet(filter) {
    try {
      const wallet = await Wallet.findOne({
        ...filter,
        deleted: { $ne: true },
      });
      if (!wallet) throw new Error("Wallet not found");
      return wallet;
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    }
  }

  static async updateWallet(id, payload) {
    try {
      const wallet = await Wallet.findOneAndUpdate(
        { _id: id, deleted: { $ne: true } },
        { ...payload }
      );
      if (!wallet) {
        throw new Error("No Wallet found");
      }
      return wallet;
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    }
  }

  static async deleteWallet(id) {
    try {
      const wallet = await Wallet.findOneAndUpdate(
        { _id: id, deleted: { $ne: true } },
        { deleted: true }
      );
      if (!wallet) {
        throw new Error("No Wallet found to update");
      }
      return wallet;
    } catch (err) {
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    }
  }
};
