import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
// import reactAdmin from "../../public/images/projects/react-admin-dashboard.png";
// import nextPortfolio from "../../public/images/projects/next-portfolio.png";
const reactAdmin = "/images/projects/react-admin-dashboard.png";
const nextPortfolio = "/images/projects/next-portfolio.png";

const FramerImage = motion(Image);

const FeacturedProject = ({
  type,
  title,
  summary,
  img,
  link = "",
  github = "",
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5em] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          responsive
          width={400}
          height={180}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2em] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <GithubIcon className="w-8" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Michael Li | Projects</title>
        <meta name="author" content="Michael Li" />
        <meta
          name="description"
          content="This is Michael Li's Portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <Animated text="Imagination Trumps Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            {/* Project 1 */}
            <div className="col-span-12">
              <FeacturedProject
                title="Next.js Tailwind CSS Portfolio"
                summary="一个基于 NextJS、Tailwind CSS 和 Framer Motion 构建的个人主页项目"
                link="/"
                github="https://github.com/michaeli524/Next.js-Developer-Portfolio"
                img={nextPortfolio}
                type="&hearts;&nbsp;Portfolio Website"
              />
            </div>
            {/* <div className="col-span-6">
              <Project
                title="React Admin Dashboard"
                link="https://fancy-admin.vercel.app/"
                github="https://github.com/michaeli524/react-admin-dashboard"
                img={reactAdmin}
                type="Featured Project"
              />
            </div> */}
            {/* Project 2 */}
            <div className="col-span-12">
              <FeacturedProject
                title="React Node Blog System"
                summary="一个基于 ReactJS、NodeJS 和  构建的博客系统项目"
                link="https://fancy-admin.vercel.app/"
                github="https://github.com/michaeli524/react-admin-dashboard"
                img={reactAdmin}
                type="Full Stack Project"
              />
            </div>
            {/* Project 3 */}
            <div className="col-span-12">
              <FeacturedProject
                title="React Admin Dashboard"
                summary="一个基于 ReactJS、Material-UI 和 Nivo Charts 构建的后台管理仪表模版项目"
                link="https://fancy-admin.vercel.app/"
                github="https://github.com/michaeli524/react-admin-dashboard"
                img={reactAdmin}
                type="Website Template"
              />
            </div>
            {/* <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
