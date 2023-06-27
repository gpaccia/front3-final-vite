import React from 'react'

export const favsReducer = (state, action) => {
  switch(action.type){
    case 'ADD-FAV':
        return [...state, action.payload]
    case 'REMOVE-FAV':
        const index = state.indexOf(action.payload)
        state.splice(index)
        return state
    default:
        throw new Error()
  }
}
