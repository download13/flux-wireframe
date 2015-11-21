import element from 'virtual-element';
import {connect} from 'deku-redux';
import {bindActionCreators} from 'redux';

import * as selectors from '../store/selectors';
import * as actions from '../store/actions';


const App = {
    render({props}) {
        return <div></div>;
    }
};

export default connect(
    state => ({
        // TODO
    }),
    dispatch => bindActionCreators({
        // TODO
    }, dispatch)
)(App);
