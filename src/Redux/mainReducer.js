
const defaultState = {
    pages: [],
    total: 0
}

export const mainReducer = (state = defaultState, action) =>{ 
    switch(action.type){
        case 'ADD_PAGES':
            return { ...state, pages: [...action.payload] }
        case 'LOAD_TOTAL':
            return {...state, total: action.payload}
        default:
            return state
    }
}

export const addPages = (payload) => ({ type: 'ADD_PAGES', payload }) 
export const loadTotal = (payload) => ({type: 'LOAD_TOTAL', payload}) 
