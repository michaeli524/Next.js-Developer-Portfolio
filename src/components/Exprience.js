import React from "react";
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";

const Details = ({ position, school, schoolLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={schoolLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{school}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};
const Exprience = () => {
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center start"],
  // });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education Exprience
      </h2>
      <div
        // ref={ref}
        className="w-[75%] mx-auto relative"
      >
        <div
          // style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul>
          <Details
            position="计算机学院 物联网工程专业"
            school="西北大学"
            schoolLink="https://www.nwu.edu.cn/"
            time="2018-2022"
            address="陕西 西安"
            work="本科毕业于211工程大学“西北大学”计算机学院物联网工程专业。主修课程「数据结构」「操作系统」「组成原理」「计算机网络」"
          />
        </ul>
      </div>
    </div>
  );
};

export default Exprience;
