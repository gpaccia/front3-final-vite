import React from 'react'

export const favsReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV':
        return [...state, action.payload]
    case 'REMOVE_FAV':
        const index = state.indexOf(action.payload)
        state.splice(index)
        return state
    default:
        throw new Error()
  }
}
