export default {
	SkuDataFetcher: async() =>  {
		const SkuData = SelectInventoryQuery.data.map (i => ({
	label: (i.SKU + " " + i.PartName) ,
	value: i.SKU
}))

			return SkuData.sort()
			
	}
}