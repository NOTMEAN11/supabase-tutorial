import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";
import ButtonGroup from "./_components/button-group";

export const revalidate = 0;

async function ProjectPage() {
  const { data, error } = await db.from("project").select("*, teams(*)");
  return (
    <div className="w-[1200px] p-4 flex items-center justify-center mx-auto flex-col">
      <h1 className="text-4xl my-4">ตารางโปรเจ็ค</h1>
      <div className="overflow-x-auto h-[500px] overflow-y-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>รหัสโปรเจ็ค</th>
              <th>ชื่อ</th>
              <th>ความสำคัญ</th>
              <th>ทีมที่รับผิดชอบ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center">
                  ไม่มีข้อมูล
                </td>
              </tr>
            )}
            {data?.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td className="text-center">{project.level}</td>
                <td>{project.teams.name}</td>

                <td>
                  <ButtonGroup id={project.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/projects/add" className="btn btn-primary my-4">
        เพิ่มโปรเจ็ค
      </Link>
    </div>
  );
}

export default ProjectPage;
