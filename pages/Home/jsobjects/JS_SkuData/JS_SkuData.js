export default {
	SkuDataFetch: async() =>  {
		const SkuData = QueryTop1kInventory.data

		return SkuData.sort()
	}
}