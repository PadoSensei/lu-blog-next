// "use client";
import Link from "next/link";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
// import React, { useState, useEffect } from "react";

const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  };
  // const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions)
  const request = await fetch(
    `https://strapi-production-8b2a.up.railway.app/api/blogs?populate=*`,
    reqOptions
  );

  // api/blogs?populate=*`
  const response = await request.json();

  console.log(process.env.STRAPI_TOKEN);
  console.log(response, "response");

  return response;
};

// {blogs,data.map(blog => (
//     <Link href={blog.attributes.slug} key={blog.id}>{blog.attributes.blog}</Link>
// )<Header />
const Bloglist = async () => {
  const blogs = await fetchBlogs();
  console.log("blogs", blogs.attributes);
  return (
    <>
      {blogs ? (
        blogs.data?.map((blog) => (
          <Link href={blog.attributes.slug} key={blog.id}>
            {blog.attributes.blog} Smoke
          </Link>
        ))
      ) : (
        <p>test</p>
      )}
      {}
    </>
  );
};
export default Bloglist;
