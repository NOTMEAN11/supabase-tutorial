import { db } from "@/lib/db";
import React from "react";

export const revalidate = 0;

async function AddEmp() {
  const { data } = await db.from("employees").select("*").order("id");

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") as string,
      employee_id: formData.get("employee_id"),
    };

    await db.from("teams").insert(rawFormData);
  }
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มทีม</h1>
      <form action={Action} className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อทีม</label>
        <input
          placeholder="ทีมใหม่"
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm mt-4">สมาชิก</label>
        <select className="input bg-gray-300 input-sm" name="employee_id">
          <option>เลือกสมาชิก</option>
          {data?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="btn btn-secondary text-white mt-4">เพิ่มทีม</button>
      </form>
    </div>
  );
}

export default AddEmp;
