import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Michael Li | About</title>
        <meta name="author" content="Michael Li" />
        <meta
          name="description"
          content="This is Michael Li's Portfolio website"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <Animated text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, 我是 Michael Li, 一名 Web 开发者，<br></br>
                致力于将自己有趣的想法转化为富有创意的 Web 应用程序。<br></br>
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
              <p className="font-medium">- 还可以发 Email/Twitter DM 给我</p>
            </div>
            <div className="col-span03 relative h-max rounded-2xl bottom-2 border-solid border-dark bg-light p-8"></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
