export default {
	SkuDataFetcher: async() =>  {
		const SkuData = QueryTop1kInventory.data.map (i => ({
	label: (i.SKU + " " + i.PartName) ,
	value: i.SKU
}))

			return SkuData.sort()
			
	}
}