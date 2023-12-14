"use client";
import { db } from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type ButtonGroupProps = {
  id: string;
};

function ButtonGroup({ id }: ButtonGroupProps) {
  async function DeleteEmp() {
    await db.from("employees").delete().match({ id });
  }
  return (
    <div>
      <Link href={`/employees/${id}`} className="btn btn-outline btn-sm">
        แก้ไข
      </Link>
      <button className="btn btn-danger btn-sm ml-1" onClick={DeleteEmp}>
        ลบ
      </button>
    </div>
  );
}

export default ButtonGroup;
