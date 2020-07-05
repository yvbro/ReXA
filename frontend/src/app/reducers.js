import { combineReducers } from 'redux';
import auth from '../auth/redux/authDuck';
import project from '../project/redux/projectDuck';
import settings from '../settings/redux/settingsDuck';

const appReducer = combineReducers({
    auth,
    project,
    settings,
});

const rootReducer = (state, action) => {
    if (action.type === 'SUCCESS_LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
