import { connect } from "react-redux";
import Water from './components/Water';
import { submit } from './data/actions';
import { display } from './data/actions';

const mapStateToProps = state => {
	return {
		drinks: state.get("drinks"),
		total: state.get("total"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submit: ( amount ) => dispatch(submit(amount)),
		display: ( drinks ) => dispatch(display(drinks)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Water);