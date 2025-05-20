import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col grow justify-center ">
      <section className="text-center border-1 sm:border-2 border-white mx-2 sm:mx-4 my-2 sm:my-4 px-2 sm:px-4 py-2 sm:py-4 rounded-xl bg-white/15 backdrop-blur-xs">
        <h1 className="text-5xl text-white">Welcome to DevNoted!</h1>
        <h2 className="text-xl text-white/80 my-2 sm:my-4">
          Your go-to place for learning, building, and sharing projects. Check out
          the latest blog posts or explore recent work.
        </h2>

        <Link className="rounded-full p-2 sm:p-3 text-white bg-blue-300 inline-block hover:bg-white hover:text-blue-300" href="/">Get Started</Link>
      </section>
    </main>
  );
}
