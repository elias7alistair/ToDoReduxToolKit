import {createSlice} from '@reduxjs/toolkit'

let id = 0;

const todoReducer = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        addToDo(state,action) {
            const item = action.payload
            state.push({id, item});
            id += 1;
        }



    }
})

export const {addToDo} = todoReducer.actions

export default todoReducer.reducer