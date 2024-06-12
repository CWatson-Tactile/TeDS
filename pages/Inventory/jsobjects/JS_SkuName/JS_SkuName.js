export default {
	SkuDataFetcher: async() =>  {
		const SkuData = JS_SkuData.SkuDataFetch.data.map (i => ({
			label: (i.SKU + " " + i.PartName) ,
			value: i.SKU
		}))

		return SkuData
	}
}