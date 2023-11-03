import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy;All rights reserved</span>
        <div className="flex items-center">
          Build With
          <span className="text-red-500 text-2xl px-1">&hearts;</span>
          by&nbsp;
          <Link
            href="https://github.com/michaeli524"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Michael Li
          </Link>
        </div>
        <Link
          href="https://twitter.com/michael_li524"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Tweet me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
