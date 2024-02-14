import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28"
    >
      <div className="container blog-container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full blog-inner-div">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
