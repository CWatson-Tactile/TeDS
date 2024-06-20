export default {
	ModuleDataFetcher: async() =>  {
		const ModuleData = SelectModuleList.data
		const MarkedModules = SelectModuleList.data.find(i => i.CurrentStatus = 'Marked').ModuleSerialNum

		return MarkedModules

	}
}