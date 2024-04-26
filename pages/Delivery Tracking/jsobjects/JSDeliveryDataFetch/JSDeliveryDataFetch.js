export default {
	DeliveryDataFetch: async() =>  {
		const DeliveryData = QuerySelectAllDeliveryTracking.data

		return DeliveryData
		Response.sort()
	}
}