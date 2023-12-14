import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

function AddEmp() {
  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") as string,
      position: formData.get("position") as string,
      salary: Number(formData.get("salary") as string),
      gender: formData.get("gender") as string,
    };

    await db
      .from("employees")
      .insert(rawFormData)
      .then(() => redirect("/employees"));
  }
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">เพิ่มพนักงานใหม่</h1>
      <form action={Action} className="card bg-white w-96 p-4">
        <label className="label text-sm">ชื่อพนักงาน</label>
        <input
          placeholder="สมพงค์ บุญมี"
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ตำแหน่ง</label>
        <input
          placeholder="Frontend Developer"
          name="position"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เงินเดือน</label>
        <input
          placeholder="฿49,102.00"
          type="number"
          name="salary"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เพศ</label>
        <input
          placeholder="Male"
          name="gender"
          className="input bg-gray-300 input-sm"
        />

        <button className="btn btn-secondary text-white mt-4">
          เพิ่มพนักงาน
        </button>
      </form>
    </div>
  );
}

export default AddEmp;
