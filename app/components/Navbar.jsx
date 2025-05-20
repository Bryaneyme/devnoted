import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/10 text-white backdrop-blur-sm py-4 px-2 mb-2 items-center sm:px-4">
      <ul className="flex justify-between items-center">
        <li className="text-xl">
          <Link href="/">DevNoted</Link>
        </li>
        <ul className="flex flex-col space-y-1 m-0 items-end sm:flex-row sm:space-x-4 sm:justify-center sm:items-stretch">
          <li>
            <Link href="/blog" className="hover:text-blue-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300">About</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
