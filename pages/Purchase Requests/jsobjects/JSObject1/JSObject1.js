export default {
	onOpen: async () =>{
		await storeValue('cart', appsmith.store?.cart || [])
		await storeValue('search', appsmith.store?.search || '')
		await storeValue('filter', appsmith.store?.filter || '')
	},

	resetCart: () =>{
		storeValue('cart',[]);
		resetWidget('lst_cart');
	},

	addToCart: async () => {
		await storeValue('cart', appsmith.store.cart.concat({SKU:Table1.triggeredRow.SKU, PartName:Table1.triggeredRow.PartName, qty:1}));
		await showAlert (`${Table1.triggeredRow.PartName} added to cart`,'info')
	}
}

