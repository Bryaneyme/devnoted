import Link from "next/link";

export default function HomePage() {
  return (
      <section className="text-center border-1 sm:border-2 border-white/40 mx-2 sm:mx-4 my-2 sm:my-4 px-3 sm:px-6 py-3 sm:py-6 rounded-xl bg-white/15 backdrop-blur-xs">
        <h1 className="text-4xl text-white">Welcome to DevNoted!</h1>
        <h2 className="text-lg text-white/80 my-6 sm:my-6">
          Your go-to place for learning, building, and sharing projects. Check out
          the latest blog posts or explore recent work.
        </h2>

        <Link className="rounded-full p-2 text-white bg-blue-300 inline-block hover:bg-white hover:text-blue-300" href="/blog">Get Started</Link>
      </section>
  );
}
