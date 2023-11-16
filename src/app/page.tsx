//@ts-nocheck
'use client'
import '@picocss/pico';
import style from './styles/style';
import config from '../config';
import BlogDetails from "./[slug]/page";
import Link from 'next/link';
import Header from './components/Header';
// import fetchBlogs from "./helpers/fetch-blogs";

const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}` 
    }
  }
  const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions)
  const response = await request.json();
  

  // console.log(response)


  return response

}

const Home = async () => {
  const blogs = await fetchBlogs();
  console.log(blogs)
  
  return (
    <>
    <Header />
    {blogs.data.map(blog => (
      <Link href={blog.attributes.slug} key={blog.id}>{blog.attributes.blog} </Link>
    ))}
    </>
  )
}

export default Home;