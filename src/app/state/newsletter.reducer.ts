export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_THE_STORE':
    console.log('existing: ' + JSON.stringify(state));

    console.log('payload: ' + action.payload);
    return {
        ...state,
        showProductCode: action.payload
      };
    default:
      return state;
  }

}
