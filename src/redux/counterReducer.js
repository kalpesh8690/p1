
export function counterReducer(state = true, action) {
    switch (action.type) {
      case 'DARK':
        return state=true
      case 'LIGHT':
        return state=false
      default:
        return state
    }
  }

  export default counterReducer