import { connect } from "react-redux";
import Water from './components/Water';
import { getDrinks, postDrink, deleteDrink, putDrink } from './data/api';


const mapStateToProps = state => {
	return {
		drinks: state.get("drinks"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getDrinks()),
		onSubmit: ( data ) => dispatch(postDrink(data)),
		onDelete: ( id ) => dispatch(deleteDrink(id)),
		onEdit: ( id, data ) => dispatch(putDrink(id, data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Water);