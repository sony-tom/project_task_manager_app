import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex w-full justify-between	">
      <div>
        <Link href="/dashboard" className="font-bold text-3xl">
          PTM
        </Link>
      </div>
      <div className="bg-white p-2 text-black rounded">
        <button>Create Quick Task</button>
      </div>
    </div>
  );
}
