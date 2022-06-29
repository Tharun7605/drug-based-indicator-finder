const mongoose = require("mongoose")

const DrugSchema = new mongoose.Schema({
	drug: {
		type: String,
		required: true
	},
	disease: {
		type: String
	},
	disease_pref_token: {
		type: String
	},
	ground_truth: {
		type: Boolean
	}
})

const DrugModel = mongoose.model("roger_model_test_sets", DrugSchema)
module.exports = DrugModel