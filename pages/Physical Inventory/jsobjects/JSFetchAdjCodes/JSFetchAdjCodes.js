export default {
	SkuDataFetcher: async() =>  {
		const AdjCodes = QuerySelectAdjustmentCodes.data.map (i => ({
	label: (i.Code + " - " + i.CodeName) ,
	value: i.Code
}))

			return AdjCodes
			Response.sort()
	}
}