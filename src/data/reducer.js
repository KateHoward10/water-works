const initialState = {
	drinks: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'addDrink':
			return {
				...state,
				drinks: [
					...state.drinks,
					{
						id:
							state.drinks.map(drink => drink.id).filter(id => typeof id === 'number').length > 0
								? Math.max(
										...state.drinks.map(drink => drink.id).filter(id => typeof id === 'number')
								  ) + 1
								: 1,
						amount: action.amount,
						created_at: new Date(),
						updated_at: new Date()
					}
				]
			};
		case 'removeDrink':
			return {
				...state,
				drinks: state.drinks.filter(drink => drink.id !== action.id)
			};
		case 'updateDrink':
			return {
				...state,
				drinks: [
					...state.drinks.map(drink => {
						if (drink.id === action.id) {
							console.log(drink);
							return { ...drink, amount: action.amount, updated_at: new Date() };
						} else return drink;
					})
				]
			};
		default:
			return initialState;
	}
};

export default reducer;
