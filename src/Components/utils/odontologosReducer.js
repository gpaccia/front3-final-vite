import React from 'react'

export const odontologosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] }
    case 'REMOVE_FAV':
      const index = state.favs.indexOf(action.payload)
      if (index !== -1) {
        state.favs.splice(index, 1)
      }
      return {...state, favs: state.favs}
    case 'POPULATE_LIST':
      return { ...state, listaOdontologos: action.payload }
    default:
      throw new Error()
  }
}
