export const metadata = {
    title: "pelanggan",
  };
  import AddPelanggan from "./add";
  import EditPelanggan from "./edit";
  import DeletePelanggan from "./delete";
  import axios from "axios";
  import Link from "next/link";
  import React from "react";
  
  type pelanggan = {
    id: number;
   nama: string;
    email: string;
    nomor_telepon: string;
    alamat: string;
  };
  
  const getpelanggan = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");
    return res.data.data;
  };
  const pelangganList = async () => {
    const pelanggan: pelanggan[] = await getpelanggan();
    return (
      <div className="py-10 px-10">
        <div className="py-2">
          <AddPelanggan />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Telepon</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pelanggan.map((pelanggan, index) => (
              <tr key={pelanggan.id}>
                <td>{index + 1}</td>
                <td>{pelanggan.nama}</td>
                <td>{pelanggan.email}</td>
                <td>{pelanggan.nomor_telepon}</td>
                <td>{pelanggan.alamat}</td>
                <td className="flex">
                  <div className="mr-1">
                    <EditPelanggan  {...pelanggan} />
                  </div>
                  <DeletePelanggan {...pelanggan} />  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default pelangganList;