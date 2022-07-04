const express = require("express")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const DrugModel = require('./models/Drugs')
dotenv.config()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get("/getDrugs", (req, res) => {
	 if(Object.keys(req.query).length === 0) {
		DrugModel.find( {}, ['drug', 'disease','ground_truth', '-_id'], (err, result) => {
			if(err) {
				res.json(err)
				console.error(err)
			} else {
				res.json(result)
			}
		})
	} else {
		const drug_name = req.query.drug
		DrugModel.find( {drug : drug_name }, ['drug', 'disease', 'ground_truth', '-_id'], (err, result) => {
			if(err) {
				res.json(err)
				console.error(err)
			} else {
				res.json(result)
			}
		})
	}
})
app.listen(process.env.port, () => {
	console.log(`Server running perfectly`)
})