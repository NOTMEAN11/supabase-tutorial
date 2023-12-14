"use client";
import { db } from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type ButtonGroupProps = {
  id: string;
};

function ButtonGroup({ id }: ButtonGroupProps) {
  async function DeleteTeam() {
    await db.from("teams").delete().match({ id });
  }
  return (
    <div>
      <Link href={`/teams/${id}`} className="btn btn-outline btn-sm">
        แก้ไข
      </Link>
      <button className="btn btn-danger btn-sm ml-1" onClick={DeleteTeam}>
        ลบ
      </button>
    </div>
  );
}

export default ButtonGroup;
