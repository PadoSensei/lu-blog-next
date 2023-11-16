//@ts-nocheck
// 'use client'
import '@picocss/pico';
import style from './styles/style';
import config from '../config';
import BlogDetails from "./[slug]/page";
import Link from 'next/link';
import Header from './components/Header';
import Bloglist from './components/Bloglist';
// import fetchBlogs from "./helpers/fetch-blogs";




const Home = () => {
  
  
  return (
    <>
    <Header />
    <Bloglist />
    </>
  )
}

export default Home;