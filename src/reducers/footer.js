import { ADD_FOOTER } from '../actions/footer'

const INITIAL_STATE = {
  footers: []
}

const footer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FOOTER:
      let footer = action.footer
      return {
        ...state,
        morendas: [...state.footers, footer]
      }

    default:
      return state
  }
}

export default footer
