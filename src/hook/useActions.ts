import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
/*import * as UserActionCreators from '../store/action-creators/user'*/
import ActionCreators from "../store/action-creators";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}