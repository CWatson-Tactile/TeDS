export default {
	SkuDataFetcher: async() =>  {
		const SkuData = Api1.data.map (i => ({
	SKU: (i.SKU) ,
	NewAdjustment: (i.NewOnHand - i["PI NEW"]),
	NewUpdatedCount: 
	WIPAdjustment : (i.WIPOnHand - i["PI WIP"])		
}))

			return SkuData
			Response.sort()
	}
}