//Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

//Adicionar um todo
//Marcar todo como completo

//

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return {...state, loading: true};
    case 'LOAD_REPOSITORIES_SUCCESS':
      return {...state, data: action.payload.data, loading: false};
    case 'LOAD_REPOSITORIES_ERROR':
      return {...state, error: true, loading: false};
    default:
      return state;
  }
}
