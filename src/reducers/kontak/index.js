import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
  DETAIL_KONTAK,
  UPDATE_KONTAK,
} from "../../actions/kontakAction";

const initialState = {
  results: false,
  loading: false,
  error: false,

  addResults: false,
  addLoading: false,
  addError: false,

  deleteResults: false,
  deleteLoading: false,
  deleteError: false,

  detailResult: false,

  updateResults: false,
  updateLoading: false,
  updateError: false,
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
    case ADD_KONTAK:
      return {
        ...state,
        addResults: action.payload.data,
        addLoading: action.payload.loading,
        addError: action.payload.errorMessage,
      };
    case DELETE_KONTAK:
      return {
        ...state,
        deleteResults: action.payload.data,
        deleteLoading: action.payload.loading,
        deleteError: action.payload.errorMessage,
      };
    case DETAIL_KONTAK:
      return {
        ...state,
        detailResult: action.payload.data,
      };
    case UPDATE_KONTAK:
      return {
        ...state,
        updateResults: action.payload.data,
        updateLoading: action.payload.loading,
        updateError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
