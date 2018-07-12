
export const addDrink = amount => {
	return {
		type: "addDrink",
		amount: amount,
	};
}

export const setDrinks = drinks => {
	return {
		type: "setDrinks",
		drinks: drinks,
	};
}

export const removeDrink = id => {
	return {
		type: "removeDrink",
		id: id,
	}
}

export const updateDrink = (id, drink) => {
	return {
		type: "updateDrink",
		id: id,
		drink: drink,
	}
}