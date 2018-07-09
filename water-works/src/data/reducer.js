import { Map, List } from "immutable";

const recordDrink = ({ amount }) => {
	return Map({
		time: new(Date),
		amount: amount,
	});
};

const submit = (state, action) => state.update("drinks", drinks => drinks.push(recordDrink(action)));

const display = (state, action) => state.update("total", total => state.get("drinks").map(drink => drink.get("amount")).reduce((amount, sum) => +amount + +sum, 0));

const reducer = (state, action) => {
	switch (action.type) {
		case "submit": return submit(state, action);
		case "display": return display(state, action);
		default: return state;
	}
};

export default reducer;