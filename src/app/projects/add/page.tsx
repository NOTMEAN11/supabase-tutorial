import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

async function AddProject() {
  const { data: teams } = await db.from("teams").select("id, name");

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") as string,
      level: Number(formData.get("level") as string),
      team_id: formData.get("team_id") as string,
    };

    await db
      .from("project")
      .insert(rawFormData)
      .then(() => redirect("/projects"));
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
        <select name="level" className="input bg-gray-300 input-sm">
          <option value="1">น้อย</option>
          <option value="2">ปานกลาง</option>
          <option value="3">มาก</option>
        </select>
        <label className="label text-sm">ทีมที่รับผิดชอบ</label>
        <select name="team_id" className="input bg-gray-300 input-sm">
          {teams?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <button className="btn btn-secondary text-white mt-4">
          เพิ่มโปรเจ็ค
        </button>
      </form>
    </div>
  );
}

export default AddProject;
