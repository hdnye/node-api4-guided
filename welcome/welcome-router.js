const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome",
		fact: process.env.FUN_FACT || "I have no fun fact",
	})
})

module.exports = router
