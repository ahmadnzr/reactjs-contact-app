import CardKontak from "./CardKontak";

function ListKontak({ nama }) {
  return (
    <div>
      <h2>List Kontak</h2>
      <CardKontak nama={nama} />
    </div>
  );
}

export default ListKontak;
