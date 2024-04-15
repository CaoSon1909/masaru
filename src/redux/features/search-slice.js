import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';

const initialState = {
    allCourses: [],
    course: {}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        add_course: (state, { payload }) => {
            state.allCourses.push(payload);
            state.course = payload;
            setLocalStorage('search_value', state.course);
        },
        get_course: (state, { payload }) => {
            state.user = getLocalStorage('user');
        },
        remove_course: (state, {payload}) => {
            state.allCourses = [];
            setLocalStorage('search_value', '');
        }
    }
})

export const { add_course, get_course, remove_course } = searchSlice.actions;

export default searchSlice.reducer;