/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description:
 */
/* eslint-disable @next/next/no-img-element */
import style from "./index.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Demo = () => {
  const initAnime = () => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "center center",
        end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
    tl.to(".f1", {
      opacity: 0,
      duration: 10000,
    });
    tl.from(".f2", {
      opacity: 0.3,
      x: 200,
      duration: 10000,
    });
  };
  useEffect(() => {
    initAnime();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.temp}></div>
      <div className={style.temp}></div>
      <section className={`${style.section} section`}>
        <figure className={style.figure}>
          <div className={`${style.f1} f1`}>测试测试</div>
          <div className={`${style.f2} f2`}></div>
        </figure>
        <figure className={style.figure}>
          <div className={`${style.f1} f1`}></div>
        </figure>
      </section>
      <div className={style.temp}></div>
      <div className={style.temp}></div>
    </div>
  );
};
// export {{props:'test'}}
// 此函数在构建时被调用
export async function getStaticProps() {
  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      navbar: false,
    },
  };
}

export default Demo;
