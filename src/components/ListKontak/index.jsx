import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { results, loading, error } = useSelector(
    (state) => state.KontakReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {results ? (
        results.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.name} - {kontak.number}
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