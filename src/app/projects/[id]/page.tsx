import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

async function ProjectIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error } = await db
    .from("project")
    .select("*")
    .eq("id", id)
    .single();

  const { data: teamData } = await db.from("teams").select("*");

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") as string,
      level: Number(formData.get("level") as string),
      team_id: formData.get("team_id") as string,
    };

    console.log(rawFormData);
    await db
      .from("project")
      .update(rawFormData)
      .match({ id })
      .then((data) => console.log(data));
  }

  return (
    <div className="flex items-center justify-center my-8 flex-col">
      <h1 className="text-4xl">แก้ไขข้อมูล</h1>
      <form className="card bg-white w-96 p-4" action={Action}>
        <label className="label text-sm">ชื่อโปรเจ็ค</label>
        <input
          placeholder={data?.name}
          name="name"
          className="input bg-gray-300 input-sm"
        />
        <label className="label text-sm">ระดับความสำคัญ</label>
        <select className="input bg-gray-300 input-sm" name="level">
          <option>เลือกระดับความสำคัญ</option>
          {["สำคัญมาก", "สำคัญปานกลาง", "สำคัญน้อย"]?.map((item, index) => (
            <option key={item} value={index + 1}>
              {item}
            </option>
          ))}
        </select>
        <label className="label text-sm">ทีมที่รับผิดชอบ</label>
        <select className="input bg-gray-300 input-sm" name="team_id">
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
