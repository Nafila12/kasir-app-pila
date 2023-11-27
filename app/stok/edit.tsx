"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type stok = {
  id: number;
  menu_id : string;
  jumlah: string;

};

const API_URL = "http://127.0.0.1:8000/api";
const EditStok = (stok:stok) => {
  const [modal, setModal] = useState(false);
  const [menu_id, setMenu_id] = useState(stok.menu_id);
  const [jumlah, setJumlah ]= useState(stok.jumlah);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/stok/${stok.id}`;
    const data = { menu_id: menu_id, jumlah: jumlah};
    await axios.patch(endpoint, data);

    setMenu_id("");
    setJumlah("");
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Edit {stok.menu_id}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">menu id</label>
              <input
                type="text"
                value={menu_id}
                onChange={(e) => setMenu_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="menu_id"
              />
              <label className="label font-bold">Jumlah stok</label>
              <input
                type="text"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jumlah"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditStok;