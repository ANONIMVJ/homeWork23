import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            return state.filter(u => u.id !== action.payload);
        },
        editUser: (state, action) => {
            return state.map(u => {
                if (u.id == action.payload.id)
                    u = action.payload

                return u;
            })
        }
    }
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;