export default {
	InvTransDataFetch: async() =>  {
		const TansData = QueryInventoryHistory.data

		return TansData.reverse()
	}
}