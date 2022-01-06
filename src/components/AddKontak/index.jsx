import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState(false);

  const { addResults, detailResult, updateResults } = useSelector(
    (state) => state.KontakReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateKontak({ id: id, name: nama, number: number }));
    } else {
      dispatch(addKontak({ name: nama, number: number }));
    }
  };

  useEffect(() => {
    if (addResults) {
      dispatch(getListKontak());
      setNama("");
      setNumber("");
    }
  }, [addResults, dispatch]);

  useEffect(() => {
    if (detailResult) {
      setNama(detailResult.name);
      setNumber(detailResult.number);
      setId(detailResult.id);
    }
  }, [detailResult, dispatch]);

  useEffect(() => {
    if (updateResults) {
      dispatch(getListKontak());
      setId(false);
      setNama("");
      setNumber("");
    }
  }, [updateResults, dispatch]);
  return (
    <div>
      <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          name="number"
          placeholder="Your Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default AddKontak;
