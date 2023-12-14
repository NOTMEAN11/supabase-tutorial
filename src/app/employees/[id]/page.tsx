import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

async function EmployeeIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error } = await db
    .from("employees")
    .select("*")
    .eq("id", id)
    .single();
  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: (formData.get("name") as string) || data?.name,
      position: (formData.get("position") as string) || data?.position,
      salary: Number(formData.get("salary") as string) || data?.salary,
      gender: (formData.get("gender") as string) || data?.gender,
    };

    await db
      .from("employees")
      .update(rawFormData)
      .match({ id })
      .then(() => redirect("/employees"));
  }
  return (
    <div className="flex items-center justify-center my-8 flex-col">
      <h1 className="text-4xl">แก้ไขข้อมูล</h1>
      <form className="card bg-white w-96 p-4" action={Action}>
        <label className="label text-sm">ชื่อพนักงาน</label>
        <input
          placeholder={data?.name}
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ตำแหน่ง</label>
        <input
          placeholder={data?.position}
          name="position"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เงินเดือน</label>
        <input
          placeholder={THB(data?.salary)}
          type="number"
          name="salary"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">เพศ</label>
        <input
          placeholder={data?.gender}
          name="gender"
          className="input bg-gray-300 input-sm"
        />
        <button className="btn btn-secondary text-white mt-4">
          แก้ไขข้อมูล
        </button>
      </form>
    </div>
  );
}

export default EmployeeIdPage;
