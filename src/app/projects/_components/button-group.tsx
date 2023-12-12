"use client";
import Link from "next/link";
import React from "react";

type ButtonGroupProps = {
  id: string;
};

function ButtonGroup({ id }: ButtonGroupProps) {
  return (
    <div>
      <Link href={`/projects/${id}`} className="btn btn-outline btn-sm">
        แก้ไข
      </Link>
      <button className="btn btn-danger btn-sm ml-1" onClick={() => {}}>
        ลบ
      </button>
    </div>
  );
}

export default ButtonGroup;