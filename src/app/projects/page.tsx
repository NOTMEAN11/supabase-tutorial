import React from "react";

function EmployeePage() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-sm">
        <thead>
          <tr>
            <th>รหัสโปรเจ็ค</th>
            <th>ชื่อ</th>
            <th>ความสำคัญ</th>
            <th>ทีมที่รับผิดชอบ</th>
            <th>สร้างเมื่อ</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default EmployeePage;
