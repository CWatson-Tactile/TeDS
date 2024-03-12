export default {
	EmpIDFetcher: async () =>  {
		const EmpInfo = SelectQueryEmployeeList.data.map (i => ({
	label: (i.EmployeeFirstName + " " + i.EmployeeLastName) ,
	value: i.EmployeeID
}))

			return EmpInfo
	}
}