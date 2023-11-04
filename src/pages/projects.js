import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/react-admin-dashboard.png";

const FeturedProject = ({
  type,
  title,
  summary,
  img,
  link = "",
  github = "",
}) => {
  return (
    <article
      className="w-full flex items-center justify-between
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-10" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
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
        <title>Michael Li | Projects Page</title>
        <meta name="author" content="Michael Li" />
        <meta
          name="description"
          content="This is Michael Li's Portfolio website"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <Animated text="Imagination Trumps Konwledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeturedProject
                title="React Admin Dashboard"
                summary="一个用 ReactJS 和 Material-UI 构建的 Admin Dashboard 项目"
                link="https://fancy-admin.vercel.app/"
                github="https://github.com/michaeli524/react-admin-dashboard"
                img={project1}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
