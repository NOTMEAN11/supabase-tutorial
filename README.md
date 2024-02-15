# Supabase Nextjs Tutorial

นี่คือตัวอย่างการใช้งาน [Supabase](https://supabase.com/) และ [Next.js](https://nextjs.org/) ในการสร้างเว็บไซต์ที่มีการรับส่งข้อมูลแบบ Realtime

## ความต้องการ

- [Node.js](https://nodejs.org/en/) - Javasrcipt รันไทม์ (version 14 ขึ้นไป)
- [pnpm](https://pnpm.io/) - Package Manager สำหรับ Node.js (version 6 ขึ้นไป)
- [Git](https://git-scm.com/) - Version Control System
- [Visual Studio Code](https://code.visualstudio.com/) - Code Editor

## Technologies

- [Supabase](https://supabase.com/) - บริการ Database แบบ Open Source และ Realtime
- [Next.js](https://nextjs.org/) - Framework สำหรับการพัฒนาเว็บไซต์แบบ SSR และ SSG ของ React

## วิธีการใช้งาน

1. โคลน Repository นี้
2. สร้างไฟล์ `.env.local` และใส่ค่าตาม `.env.example`
3. รันคำสั่ง `pnpm install` เพื่อติดตั้ง dependencies
4. รันคำสั่ง `pnpm dev` เพื่อรันโปรเจค
5. เปิดเว็บไซต์ที่ `http://localhost:3000`

## วิธีการใช้งาน Supabase

1. สร้าง Project ใน Supabase
2. สร้าง Table ใน Supabase
   1. `employees`
      - `id` (type: `uuid`, primary key)
      - `name` (type: `text`)
      - `position` (type: `text`)
      - `salary` (type: `int8`)
      - `gender` (type: `text`)
      - `created_at` (type: `timestamp`, default: `now()`)
   2. `teams`
      - `id` (type: `uuid`, primary key)
      - `name` (type: `text`)
      - `created_at` (type: `timestamp`, default: `now()`)
   3. `projects`
      - `id` (type: `uuid`, primary key)
      - `name` (type: `text`)
      - `level` (type: `int2`)
      - `team_id` (type: `uuid`, foreign key: `teams.id`)
      - `created_at` (type: `timestamp`, default: `now()`)
3. สร้างความสัมพันธ์ many to many
   1. `employees` กับ `teams`
      ```sql
      create table members (
        "team_id" uuid references teams,
        "employee_id" uuid references employees,
        primary key (team_id,employee_id)
      );
      ```

# Video
[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1708013458/video_to_markdown/images/youtube--Qt5LKrKEqO0-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/Qt5LKrKEqO0 "")
