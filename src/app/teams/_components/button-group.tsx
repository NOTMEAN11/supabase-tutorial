"use client";
import Link from "next/link";
import React from "react";

type ButtonGroupProps = {
  id: string;
};

function ButtonGroup({ id }: ButtonGroupProps) {
  async function handleDelete() {}
  return (
    <div>
      <Link href={`/teams/${id}`} className="btn btn-outline btn-sm">
        แก้ไข
      </Link>
      <button className="btn btn-danger btn-sm ml-1" onClick={handleDelete}>
        ลบ
      </button>
    </div>
  );
}

export default ButtonGroup;
