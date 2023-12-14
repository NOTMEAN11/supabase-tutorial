import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

export const revalidate = 0;

async function TeamIdPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, error } = await db
    .from("teams")
    .select("*")
    .eq("id", id)
    .single();

  async function Action(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name") as string,
    };

    await db
      .from("teams")
      .update(rawFormData)
      .match({ id })
      .then(() => redirect("/teams"));
  }

  return (
    <div className="flex items-center justify-center my-8 flex-col">
      <h1 className="text-4xl">แก้ไขข้อมูล</h1>
      <form className="card bg-white w-96 p-4" action={Action}>
        <label className="label text-sm">ชื่อทีม</label>
        <input
          placeholder={data?.name!}
          name="name"
          className="input bg-gray-300 input-sm"
        />

        <button className="btn btn-secondary text-white mt-4">
          แก้ไขข้อมูล
        </button>
      </form>
    </div>
  );
}

export default TeamIdPage;
