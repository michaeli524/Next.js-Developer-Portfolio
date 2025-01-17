import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Animated from "@/components/Animated";
import Link from "next/link";
import { DownloadIcon } from "@/components/Icons";
import Hireme from "@/components/Hireme";
import TransitionEffect from "@/components/TransitionEffect";
const profilePic = "/images/profile/miku_avatar.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Who is Michael Li? | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 h-1/3">
              <Image
                src={profilePic}
                alt="Michael Li"
                responsive="true"
                width={700}
                height={700}
                className="rounded-full 
                //h-autow-fullmax-h-[700px]max-w-[700px]"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start self-center">
              <Animated
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Hi, 我是 Michael Li ! 一位 Front End
                Coder，我致力于将想法转化为富有创意的 Web 应用程序。<br></br>
                欢迎来访我的个人主页，这里展示着我的项目和Blog，
                以展示我对Web/前端开发的理解。<br></br>我喜欢用 React.js
                来构建应用。
                <br></br>
                Now focus on TypeScript Next.js and Tailwind CSS!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Michael Li resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark group
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  我的简历
                  {/* <LinkArrow className="ml-1 w-5 max-w-[20px]" /> */}
                  <DownloadIcon className="ml-1 w-5 max-w-[20px] fill-light group-hover:fill-dark dark:fill-dark dark:group-hover:fill-light" />
                </Link>
                <Link
                  href="mailto:michael.li.work@outlook.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-4 dark:text-light"
                >
                  联系我
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
      </main>
    </>
  );
}
