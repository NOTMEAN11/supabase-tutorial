import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";
import ButtonGroup from "./_components/button-group";

export const revalidate = 0;

async function EmployeePage() {
  const { data, error } = await db.from("teams").select("*, employees(*)");
  return (
    <div className="w-[1200px] p-4 flex items-center justify-center mx-auto flex-col">
      <h1 className="text-4xl my-4">ตารางทีม</h1>
      <div className="overflow-x-auto h-[500px] overflow-y-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>รหัสทีม</th>
              <th>ชื่อ</th>
              <th>สมาชิก</th>
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
            {data?.map((team: any) => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>
                  {team.employees.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                  ))}
                </td>
                <td>
                  <ButtonGroup id={team.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/teams/add" className="btn btn-primary my-4">
        เพิ่มทีม
      </Link>
    </div>
  );
}

export default EmployeePage;
