export default {
	TransDataTranslator: async() =>  
	{
		const TransData = JS_TransactionHistory.TransDataFetch.data.map(i => ({
			AdjustmentDate : i.DataTimeOfAdjustment,
			AdjustmentAmount : i.Adjustment,
			SKU: i.SKU,
			EmployeeID : i.AdjustedBy,
			TransactionNumber : i.TransactionNumber,
			AdjustmentCodes : i.AdjustmentCode
		}))
		return TransData
	}
}