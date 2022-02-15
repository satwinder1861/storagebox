import{combineReducers} from 'redux';
import counterReducer from './components/reducer';
const rootReducer = combineReducers({
    counterReducer,
});
export default rootReducer;
