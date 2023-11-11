import fetchBlogs from "../helpers/fetch-blogs";
import Link from "next/link";
const BlogDetails = async (props) => {
  const blog = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);
  console.log("slug", props.params.slug);
  console.log("blogs", blog.data[0].attributes.main);

  return (
    <>
      <Link href="/">Home</Link>
      <h1>{blog.data[0].id}</h1>
      <h1>{blog.data[0].attributes.blog}</h1>
      <p>{blog.data[0].attributes.main}</p>
    </>
  );
};
export default BlogDetails;
