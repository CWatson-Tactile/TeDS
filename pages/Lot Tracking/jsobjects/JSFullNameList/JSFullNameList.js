export default {
	EmpIDFetcher: async (sort) =>  {
		const EmpInfo = SelectQueryEmployeeList.data.map (i => ({
	label: (i.EmployeeFirstName + " " + i.EmployeeLastName) ,
	value: i.EmployeeID
}))

			return EmpInfo
			Response.sort()
	}
}