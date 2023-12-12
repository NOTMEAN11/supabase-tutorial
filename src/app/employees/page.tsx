import { db } from "@/lib/db";
import React from "react";

async function EmployeePage() {
  const { data, error } = await db.from("employees").select("*").order("id");

  console.log(data, error);
  return (
    <div className="overflow-x-auto">
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
          {data?.map((employee) => (
            <tr key={employee.id}>
              {/* <td>{employee.id}</td> */}
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>{employee.gender}</td>
              <td>
                <button className="btn btn-outline btn-sm">แก้ไข</button>
                <button className="btn btn-danger btn-sm ml-1">ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePage;
