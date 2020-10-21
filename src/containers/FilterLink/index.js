import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../redux/action';
import Link from '../../components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.fifter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;