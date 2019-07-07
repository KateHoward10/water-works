import { connect } from "react-redux";
import Water from './components/Water';
import { addDrink, removeDrink, updateDrink } from './data/actions';


const mapStateToProps = state => {
	return {
		drinks: state.drinks,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: ( amount ) => dispatch(addDrink(amount)),
		onDelete: ( id ) => dispatch(removeDrink(id)),
		onEdit: ( id, amount ) => dispatch(updateDrink(id, amount)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Water);