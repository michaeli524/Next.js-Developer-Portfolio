import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/michael-pic.jpg";
import {
  JsIcon,
  NextIcon,
  ReactIcon,
  TailwindCSS,
  TsIcon,
} from "@/components/Icons";
import Skills from "@/components/Skills";
import Exprience from "@/components/Exprience";

const about = () => {
  return (
    <>
      <Head>
        <title>Michael Li | About Page</title>
        <meta name="author" content="Michael Li" />
        <meta
          name="description"
          content="This is Michael Li's Portfolio website"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* Title */}
          <Animated text="Passion Fuels Purpose!" className="mb-16" />
          {/* Text */}
          <div className="grid w-full grid-cols-8 gap-16">
            {/* Biography */}
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, 我是 Michael Li, 一名 Web Developer/Front End Coder，
                <br></br>
                Love coding for fun!
              </p>
              <p className="my-4 font-medium">
                - 我本科毕业于西部某 211 高校计算机学院，正在寻找工作的机会！
              </p>
              <p className="mb-4 font-medium">
                - 如果您想进一步了解我，请在
                <Link
                  href="/"
                  className="underline font-bold underline-offset-4"
                >
                  首页
                </Link>
                点击
                <span className="inline-block">「我的简历」</span>
                下载 pdf 简历
              </p>
              <p className="font-medium">
                - 如果您想和我进一步交流，可以在
                <Link
                  href="/"
                  className="underline font-bold underline-offset-4"
                >
                  首页
                </Link>
                点击「联系我」发 Email 给我，或者是通过「Twitter」DM 我
              </p>
            </div>
            {/* profile picture */}
            <div className="col-span-3 relative //h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 w-72 h-84">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={profilePic}
                alt="Michael Li"
                className="rounded-md"
                priority={true}
              />
            </div>
            {/* Text right */}
            <div className="col-span-2 flex flex-col items-end justify-between">
              {/* Tech Stacks */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-dark/75">
                  My Tech Stack
                </span>
                <h2 className="text-xl text-dark font-medium flex items-center my-2">
                  JavaScript
                  <JsIcon className="fill-yellow-400 ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center">
                  React.js
                  <ReactIcon className="fill-blue-400 ml-3 w-[30px] h-[30px]" />
                </h2>
              </div>
              {/* Learning */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-dark/75">
                  I&apos;m Learning
                </span>
                <h2 className="text-xl text-dark font-medium flex items-center my-2">
                  TypeScript
                  <TsIcon className="ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center mb-2">
                  Next.js
                  <NextIcon className="ml-3 w-[30px] h-[30px]" />
                </h2>
                <h2 className="text-xl text-dark font-medium flex items-center">
                  TailwindCSS
                  <TailwindCSS className="ml-3 w-[30px] h-[30px]" />
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Exprience />
        </Layout>
      </main>
    </>
  );
};

export default about;
