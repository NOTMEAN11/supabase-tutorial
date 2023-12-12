import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card bg-white text-black w-96 p-4">
        <h1 className="font-bold text-xl text-center">ระบบจัดการโปรเจ็ค</h1>

        <Link
          href="/projects"
          className="btn btn-primary text-white mt-1 btn-sm"
        >
          แสดงข้อมูลโปรเจ็ค
        </Link>
        <Link href="/teams" className="btn btn-primary text-white mt-1 btn-sm">
          แสดงข้อมูลทีม
        </Link>
        <Link
          href="/employees"
          className="btn btn-primary text-white mt-1 btn-sm"
        >
          แสดงข้อมูลพนักงาน
        </Link>
        <div className="w-full h-[1px] bg-gray-400 my-2" />
        <Link
          href="https://github.com/NOTMEAN11"
          target="_blank"
          className="btn btn-outline bg-black text-white btn-sm"
        >
          <GithubIcon className="w-4 h-4 mr-1" /> Source Code
        </Link>
      </div>
    </main>
  );
}
