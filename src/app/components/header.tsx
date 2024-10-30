import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex w-full justify-between	">
      <div>
        <Link href="/dashboard" className="font-bold text-3xl text-black">
          Project Task Manager
        </Link>
      </div>
      <div className="bg-blue-500 p-2 text-white rounded">
        <button>Create Quick Task</button>
      </div>
    </div>
  );
}
