import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hook/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {Dispatch} from "redux";
import {useActions} from "../hook/useActions";


const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    /*const dispatch: Dispatch<any> = useDispatch()*/
    const {fetchUsers} = useActions()

    useEffect(() => {
        /*dispatch(fetchUsers())*/
        fetchUsers()

    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {users.map(user => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;