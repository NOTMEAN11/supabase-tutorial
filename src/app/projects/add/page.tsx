import React from "react";

export const revalidate = 0;

function AddProject() {
  async function Action(formData: FormData) {
    "use server";
    const projectData = {
      name: formData.get("name"),
      level: formData.get("level"),
      team_id: formData.get("team_id"),
    };

    //TODO: ส่งข้อมูลไปบันทึกที่ API
  }
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มโปรเจ็คใหม่</h1>
      <form action={Action} className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อ</label>
        <input
          placeholder="โปรเจ็คใหม่"
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ความสำคัญ</label>
        <select name="level" id="">
          {["สำคัญมาก", "สำคัญ", "สำคัญน้อย"].map((level) => (
            <option value={level}>{level}</option>
          ))}
        </select>
        <label className="label text-sm">ทีมที่รับผิดชอบ</label>
        <input
          placeholder="รหัสทีม"
          name="team_id"
          className="input bg-gray-300 input-sm"
        />

        <button className="btn btn-secondary text-white mt-4">
          เพิ่มโปรเจ็ค
        </button>
      </form>
    </div>
  );
}

export default AddProject;
