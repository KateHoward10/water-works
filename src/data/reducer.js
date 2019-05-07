// import { Map } from "immutable";

// const recordDrink = ({ amount }) => {
// 	return Map({
// 		time: new(Date)(),
// 		amount: amount,
// 	});
// };

const addDrink = (state, {amount}) => state.update("drinks", drinks => drinks.push(amount));

const setDrinks = (state, { drinks }) => state.set("drinks", drinks);

const removeDrink = (state, { id }) => state.update("drinks", drinks => (
	drinks.filter(drink => (drink.get("id") !== id)
)));

const updateDrink = (state, {id, amount}) => state.update("drinks", drinks => (
	drinks.map(d => (d.get("id") === id) ?
		d.set("amount", amount) : d ))
);

const reducer = (state, action) => {
	switch (action.type) {
		case "addDrink": return addDrink(state, action);
		case "setDrinks": return setDrinks(state, action);
		case "removeDrink": return removeDrink(state, action);
		case "updateDrink": return updateDrink(state, action);
		default: return state;
	}
};

export default reducer;