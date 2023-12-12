import { db } from "@/lib/db";
import { THB } from "@/lib/utils";
import React from "react";
import ButtonGroup from "./_components/button-group";

import Link from "next/link";

async function EmployeePage() {
  const data: any = [];

  return (
    <div className="w-[1200px] p-4 flex items-center justify-center mx-auto flex-col">
      <h1 className="text-4xl my-4">ตารางพนักงาน</h1>
      <div className="overflow-x-auto h-[500px] overflow-y-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              {/* <th>รหัสพนักงาน</th> */}
              <th>ชื่อ</th>
              <th>ตำแหน่ง</th>
              <th>เงินเดือน</th>
              <th>เพศ</th>
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
            {data?.map((employee: any) => (
              <tr key={employee.id}>
                {/* <td>{employee.id}</td> */}
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{THB(employee.salary)}</td>
                <td>{employee.gender}</td>
                <td>
                  <ButtonGroup id={employee.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/employees/add" className="btn btn-primary my-4">
        เพิ่มพนักงาน
      </Link>
    </div>
  );
}

export default EmployeePage;
