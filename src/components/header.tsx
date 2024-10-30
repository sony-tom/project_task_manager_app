import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/dashboard" className="font-bold text-3xl">
          Dashboard
        </Link>
        <Link href={`/projects/${1}`}>
          Projects
          {/* {project.projectName} */}
        </Link>
      </nav>
    </div>
  );
}
