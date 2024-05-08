const { WalletController } = require("../../controllers");

const router = require("express").Router();

router.post("/", WalletController.createWallet);
router.get("/", WalletController.getWallets);
router.get("/:id", WalletController.getOneWallet);
router.put("/:id", WalletController.updateWallet);
router.delete("/:id", WalletController.deleteWallet);

module.exports = router;
