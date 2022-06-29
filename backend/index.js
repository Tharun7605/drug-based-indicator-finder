const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const DrugModel = require('./models/Drugs')

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get("/getDrugs", (req, res) => {
	const drug_name = req.query.drug
	DrugModel.find( {drug : drug_name }, (err, result) => {
		if(err) {
			res.json(err)
			console.error(err)
		} else {
			res.json(result)
		}
	})
})
app.listen(process.env.port, () => {
	console.log(`Server running perfectly`)
})