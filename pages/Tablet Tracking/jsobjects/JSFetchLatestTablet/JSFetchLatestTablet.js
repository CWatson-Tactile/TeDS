export default {
	TabletNumFetch: async() =>  {
		const TabletNums = QuerySelectLatestId.data 

		return TabletNums
		Response.sort()
	}
}