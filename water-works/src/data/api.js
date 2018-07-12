import axios from "../axios";
import { fromJS } from "immutable";
import { setDrinks, addDrink, removeDrink, updateDrink } from "./actions";

export const getDrinks = () => dispatch => {
	axios.get("/drinks").then(response => {
		const drinks = fromJS(response.data);
		dispatch(setDrinks(drinks));
	});
}

export const postDrink = (data) => dispatch => {
	axios.post("/drinks", {
		amount: data.amount,
	}).then(response => {
		const amount = fromJS(response.data);
		dispatch(addDrink(amount));
	});
}

export const deleteDrink = (id) => dispatch => {
	axios.delete("/drinks/" + id).then(response => {
		dispatch(removeDrink(id));
	});
}

export const putDrink = (id, data) => dispatch => {
	axios.put("/drinks/" + id, {
		amount: data.amount,
	}).then(response => {
		const amount = fromJS(response.data.amount);
		dispatch(updateDrink(id, amount));
	});
}