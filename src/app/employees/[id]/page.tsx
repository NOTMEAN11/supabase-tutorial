import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import React from "react";

async function EmployeeIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = {
    name: "พนักงานใหม่",
    position: "Newbie",
    salary: 90000,
    gender: "Male",
  };

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") || data?.name,
      position: formData.get("position") || data?.position,
      salary: formData.get("salary") || data?.salary,
      gender: formData.get("gender") || data?.gender,
    };

    //TODO: ส่งข้อมูลไปบันทึกที่ API
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
