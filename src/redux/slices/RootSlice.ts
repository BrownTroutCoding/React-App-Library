import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "ISBN",
        title: "Title",
        author: "Author",
        year: "Year",
        read: "Read",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseISBN: (state, action) => { state.isbn = action.payload }, // Setting the input to the state.name
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseRead: (state, action) => { state.read = action.payload },
    }    
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseTitle, chooseAuthor, chooseYear, chooseRead } = rootSlice.actions