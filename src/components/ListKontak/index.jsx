import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getListKontak,
  deleteKontak,
  detailKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const { results, loading, error, deleteResults } = useSelector(
    (state) => state.KontakReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteResults) {
      dispatch(getListKontak());
    }
  }, [dispatch, deleteResults]);
  return (
    <div>
      <h4>List Kontak</h4>
      {results ? (
        results.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.name} - {kontak.number} -{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
              <button onClick={() => dispatch(detailKontak(kontak))}>
                Edit
              </button>
            </p>
          );
        })
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>{error ? error : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
