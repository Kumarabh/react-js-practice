import {createSlice} from '@reduxjs/toolkit';
import { User } from '../../dataTypes/User';

const initialValue: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe101@gmail.com',
    contact: '#'
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {value: initialValue},
    reducers: {
        setUser: (state, action) => {
            console.log('===> action', action);
            state.value = action.payload
        },
    }
})

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;