const { WalletService } = require("../services");
const response = require("../utils/formatResponse");
const { ObjectId } = require("mongoose").Types;

module.exports = class WalletController {
  static async createWallet(req, res, next) {
    try {
      const Wallet = await WalletService.createWallet(req.body);
      res.json(response(Wallet, "Wallet created"));
    } catch (err) {
      next(err);
    }
  }

  static async getWallets(req, res, next) {
    try {
      const filter = { ...req.query };

      const Wallet = await WalletService.getWallet(filter);

      res.json(response(Wallet));
    } catch (err) {
      next(err);
    }
  }

  static async updateWallet(req, res, next) {
    try {
      const Wallet = await WalletService.updateWallet(req.params.id, req.body);
      res.json(response(Wallet, "Wallet updated"));
    } catch (err) {
      next(err);
    }
  }

  static async getOneWallet(req, res, next) {
    try {
      const Wallet = await WalletService.getOneWallet({
        _id: req.params.id,
      });
      res.json(response(Wallet));
    } catch (err) {
      next(err);
    }
  }

  static async deleteWallet(req, res, next) {
    try {
      await WalletService.deleteWallet(req.params.id);
      res.json(response({}, "Wallet deleted"));
    } catch (err) {
      next(err);
    }
  }
};
