"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type meja = {
  id: number;
 nomor_meja : string;
  kapasitas: string;
  status: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteMeja = (meja: meja) => {
  const [modal, setModal] = useState(false);
  const [nomor_meja, setNomor_meja] = useState("");
  const [kapasitas, setkapasitas] = useState("");
  const [status, setStatus] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (meja: Number) => {
    setIsMutating(true);
    let params = { id: meja };
    let endpoint = `${API_URL}/meja/${meja}`;
    const data = { nomor_meja: nomor_meja,kapasitas:kapasitas,status:status};
    await axios.delete(endpoint);

    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {" "}
            Yakin Mau Hapus {meja.nomor_meja}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(meja.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteMeja;