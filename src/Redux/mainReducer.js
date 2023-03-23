
const defaultState = {
    pages: [],
    total: 0
}

export const mainReducer = (state = defaultState, action) =>{ 
    switch (action.type) {
        case 'NEW_PAGES':
            return { ...state, pages: [...action.payload] }
        case 'ADD_PAGES':
            return { ...state, pages: [...state.pages, ...action.payload.items] }
        case 'LOAD_TOTAL':
            return {...state, total: action.payload}
        default:
            return state
    }
}

export const newPages = (payload) => ({ type: 'NEW_PAGES', payload })
export const addPages = (items) => ({ type: 'ADD_PAGES', payload: {items} }) 
export const loadTotal = (payload) => ({type: 'LOAD_TOTAL', payload}) 
