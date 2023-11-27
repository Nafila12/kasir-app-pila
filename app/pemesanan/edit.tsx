"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type pemesanan = {
  id: number;
  meja_id : string;
  tanggal_pemesanan: string;
 jam_mulai:string;
 jam_selesai: string;
 nama_pemesan: string;
 jumlah_pelanggan: string;



};

const API_URL = "http://127.0.0.1:8000/api";
const EditPemesanan = (pemesanan:pemesanan) => {
  const [modal, setModal] = useState(false);
  const [meja_id, setMeja_id] = useState(pemesanan.meja_id);
  const [tanggal_pemesanan, setTanggal_pemesanan] = useState(pemesanan.tanggal_pemesanan);
  const [jam_mulai, setJam_mulai] = useState(pemesanan.jam_mulai);
  const [jam_selesai, setJam_selesai] = useState(pemesanan.jam_selesai);
  const [nama_pemesan, setnama_pemesan] = useState(pemesanan.nama_pemesan);
  const [jumlah_pelanggan, setJumlah_pelanggan] = useState(pemesanan.jumlah_pelanggan);

  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/pemesanan/${pemesanan.id}`;
    const data = { meja_id: meja_id, tanggal_pemesanan: tanggal_pemesanan, jam_mulai: jam_mulai, jam_selesai:jam_selesai,  nama_pemesan: nama_pemesan,jumlah_pelanggan: jumlah_pelanggan};
    await axios.patch(endpoint, data);

    setMeja_id("");
    setTanggal_pemesanan("");
    setJam_mulai("");
    setJam_selesai("");
    setnama_pemesan("");
    setJumlah_pelanggan("");
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
          <h3 className="font-bold text-lg"> Edit {pemesanan.nama_pemesan}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Meja id</label>
              <input
                type="text"
                value={meja_id}
                onChange={(e) => setMeja_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jenis id"
              />
              <label className="label font-bold">tanggal pemesanan</label>
              <input
                type="date"
                value={tanggal_pemesanan}
                onChange={(e) => setTanggal_pemesanan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="tanggal pemesanan"
              />
                <label className="label font-bold">jam mulai</label>
              <input
                type="time"
                value={jam_mulai}
                onChange={(e) => setJam_mulai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jam_mulai"
              />
                <label className="label font-bold">jam_selesai</label>
              <input
                type="time"
                value={jam_selesai}
                onChange={(e) => setJam_selesai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jam_selesai"
              />
                              <label className="label font-bold">nama_pemesan</label>
              <input
                type="text"
                value={nama_pemesan}
                onChange={(e) => setnama_pemesan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="nama_pemesanan"
              />
                <label className="label font-bold">jumlah_pelanggan</label>
              <input
                type="text"
                value={jumlah_pelanggan}
                onChange={(e) => setJumlah_pelanggan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jumlah_pelanggan"
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
export default EditPemesanan;