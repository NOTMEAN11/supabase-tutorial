import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import React from "react";

async function ProjectIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = { name: "โปรเจ็คใหม่" };
  const teamData = [
    { id: 1, name: "ทีมพัฒนา" },
    { id: 2, name: "ทีมสนับสนุน" },
  ];

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      level: formData.get("level"),
      team: formData.get("team"),
    };

    //TODO: ส่งข้อมูลไปบันทึกที่ API
  }

  return (
    <div className="flex items-center justify-center my-8 flex-col">
      <h1 className="text-4xl">แก้ไขข้อมูล</h1>
      <form className="card bg-white w-96 p-4" action={Action}>
        <label className="label text-sm">ชื่อโปรเจ็ค</label>
        <input
          placeholder={data?.name}
          value={data?.name}
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ระดับความสำคัญ</label>
        <select className="input bg-gray-300 input-sm" name="level">
          <option>เลือกระดับความสำคัญ</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label className="label text-sm">ทีมที่รับผิดชอบ</label>
        <select className="input bg-gray-300 input-sm" name="team">
          <option>เลือกทีม</option>
          {teamData?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <button className="btn btn-secondary text-white mt-4">
          แก้ไขข้อมูล
        </button>
      </form>
    </div>
  );
}

export default ProjectIdPage;
