"use client";
import { db } from "@/lib/db";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

type ButtonGroupProps = {
  id: string;
};

function ButtonGroup({ id }: ButtonGroupProps) {
  const router = useRouter();
  async function DeleteProject() {
    await db.from("project").delete().match({ id });
  }
  return (
    <div>
      <Link href={`/projects/${id}`} className="btn btn-outline btn-sm">
        แก้ไข
      </Link>
      <button className="btn btn-danger btn-sm ml-1" onClick={DeleteProject}>
        ลบ
      </button>
    </div>
  );
}

export default ButtonGroup;
