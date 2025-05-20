import blogs from "@/lib/blogs";
import BlogArticle from "../components/BlogArticle";


export default function BlogPage() {

    const blogList = blogs
  return (
    <section className="flex flex-col grow text-center mx-2 sm:mx-4 my-2 sm:my-4 px-2 sm:px-4 py-2 sm:py-4">
      <div className="w-[100vw] self-center text-center mx-2 sm:mx-4 my-2 sm:my-4 px-3 sm:px-6 py-3 sm:py-6 bg-white/15 backdrop-blur-xs">
        <h1 className="text-5xl text-white">Blogs</h1>
        <p className="text-xl text-white/70 my-2 sm:my-4">Those are some blogs available on this webpage.</p>
      </div>

        {blogList.map(blog => {
            return <BlogArticle key={blog.id} title={blog.title} content={blog.excerpt}/>
        })}
        

    </section>
  );
}
