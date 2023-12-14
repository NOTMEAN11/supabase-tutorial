import { db } from "@/lib/db";
import React from "react";

async function AddEmp() {
  const data: any = [];
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มทีม</h1>
      <div className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อทีม</label>
        <input placeholder="ทีมใหม่" className="input bg-gray-300 input-sm" />
        <label className="label text-sm mt-4">สมาชิก</label>
        <select className="input bg-gray-300 input-sm">
          <option>เลือกสมาชิก</option>
          {data?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="btn btn-secondary text-white mt-4">เพิ่มทีม</button>
      </div>
    </div>
  );
}

export default AddEmp;
