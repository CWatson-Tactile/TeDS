export default {
	EmpNames: async() =>  {
		const EmpNames = SelectAllEmployeeNamesQuery.data.map (i => ({
			label: (i.EmployeeFirstName + " " + i.EmployeeLastName) ,
			value: i.EmployeeID
		}))

		return EmpNames
	}
}