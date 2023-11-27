export const metadata = {
    title: "meja",
  };
  import Addmeja from "./add";
  import EditMeja from "./edit";
  import DeleteMeja from "./delete";
  import axios from "axios";
  import Link from "next/link";
  import React from "react";

  
  type meja = {
    id: number;
    nomor_meja : string;
    kapasitas: string;
    status: string;
  };
  
  const getmeja = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/menu");
    return res.data.data;
  };
  const MejaList = async () => {
    const meja: meja[] = await getmeja();
    return (
      <div className="py-10 px-10">
        <div className="py-2">
          <Addmeja />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>Id</th>
              <th>Nomor Meja</th>
              <th>Kapasitas</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {meja.map((meja, index) => (
              <tr key={meja.id}>
                <td>{index + 1}</td>
                <td>{meja.nomor_meja}</td>
                <td>{meja.kapasitas}</td>
                <td>{meja.status}</td>
                <td className="flex">
                  <div className="mr-1">
                    <EditMeja {...meja} />
                  </div>
                  <DeleteMeja {...meja} />  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default MejaList;