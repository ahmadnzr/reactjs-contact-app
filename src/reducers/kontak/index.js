import { GET_LIST_CONTACT, GET_LIST_KONTAK } from "../../actions/kontakAction";

const initialState = {
  results: false,
  loading: false,
  error: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        results: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
