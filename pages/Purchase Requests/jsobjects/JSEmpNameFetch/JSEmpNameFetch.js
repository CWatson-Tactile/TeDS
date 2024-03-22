export default {
	EmpNameFetcher: async() =>  {
		const EmpName = QueryEmployeeList.data.map (i => ({
	label: (i.EmployeeFirstName + " " + i.EmployeeLastName) ,
	value: i.EmployeeID
}))

			return EmpName.sort()
	}
}