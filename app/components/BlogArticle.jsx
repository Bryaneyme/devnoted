import Link from "next/link";

export default function BlogArticle({title, content}) {
  return (
    <article className="w-fit self-center text-center border-1 sm:border-2 border-white/40 mx-2 sm:mx-4 my-2 sm:my-4 px-3 sm:px-6 py-3 sm:py-6 rounded-xl bg-white/15 backdrop-blur-xs">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>
      <p className="text-white/70">
        {content}
      </p>
      <Link href="/blog/nextjs-guide" className="text-blue-300 hover:underline">
        Read more →
      </Link>
    </article>
  );
}
