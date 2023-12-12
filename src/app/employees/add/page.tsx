import React from "react";

function AddEmp() {
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มพนักงานใหม่</h1>
      <div className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อพนักงาน</label>
        <input
          placeholder="สมพงค์ บุญมี"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ตำแหน่ง</label>
        <input
          placeholder="Frontend Developer"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เงินเดือน</label>
        <input
          placeholder="฿49,102.00"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เพศ</label>
        <input placeholder="Male" className="input bg-gray-300 input-sm" />

        <button className="btn btn-secondary text-white mt-4">
          เพิ่มพนักงาน
        </button>
      </div>
    </div>
  );
}

export default AddEmp;
