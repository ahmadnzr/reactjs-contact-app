import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:5000/contacts",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        // gagal
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "http://localhost:5000/contacts",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        // gagal
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "DELETE",
      url: "http://localhost:5000/contacts/" + id,
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        // gagal
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};
export const updateKontak = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "PUT",
      url: "http://localhost:5000/contacts/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        // gagal
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
