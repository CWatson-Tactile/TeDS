export default {
	TransDataFetch: async() =>  {
		const TransData = QueryInventoryHistory.data;
		TransData.reverse();
		return TransData

	}
}