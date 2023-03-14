const express = require("express");
const router = express.Router();
const WhatsappController = require("../controllers/whatsappControllers");

router
.get("/", WhatsappController.VerifyToken)
.post("/", WhatsappController.ReceivedMessage)


module.exports = router;