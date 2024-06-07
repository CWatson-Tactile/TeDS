export default {
	AdjustmentCodeFetcher: async() =>  {
		const AdjustmentCode = QuerySelectAdjustmentCodes.data.map (i => ({
			label: (i.Code + " - " + i.CodeName) ,
			value: i.Code
		}))

		return AdjustmentCode
		Response.sort()
	}
}