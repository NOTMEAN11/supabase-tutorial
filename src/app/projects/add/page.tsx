import React from "react";

function AddProject() {
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มโปรเจ็คใหม่</h1>
      <div className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อ</label>
        <input
          placeholder="โปรเจ็คใหม่"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ความสำคัญ</label>
        <input placeholder="1-10" className="input bg-gray-300 input-sm" />
        <label className="label text-sm">ทีมที่รับผิดชอบ</label>
        <input placeholder="รหัสทีม" className="input bg-gray-300 input-sm" />

        <button className="btn btn-secondary text-white mt-4">
          เพิ่มโปรเจ็ค
        </button>
      </div>
    </div>
  );
}

export default AddProject;
