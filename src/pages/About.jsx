import web1 from "/images/web1.jpeg";
import web2 from "/images/web2.jpeg";
import web3 from "/images/web3.jpeg";
import web4 from "/images/web4.jpeg";
import web5 from "/images/web5.jpeg";
import web6 from "/images/web6.jpeg";
import web7 from "/images/web7.jpeg";
import web8 from "/images/web8.jpeg";

import html from "/images/html.jpeg";
import css from "/images/css.jpeg";
import tailwind from "/images/tailwind.jpeg";
import js from "/images/js.jpeg";
import ts from "/images/ts.jpeg";
import react from "/images/react.jpeg";

export default function About() {
  const imageStyle = "w-full h-[400px]";
  const logoStyle = "w-full h-[400px] object-cover";
  return (
    <div className="">
      <p className="text-[40px] mt-[100px] border-2 border-black text-center py-2 font-bold">
        ABOUT ME
      </p>
      <div className="mt-8 p-4 text-center leading-[2] text-[20px]">
        <p>✨ 멋진 프론트엔드 개발자가 목표입니다 !</p>
        <p>
          저는 현재 패스트캠퍼스에서 부트캠프를 진행하며 개발자의 꿈을
          키워나가고 있습니다 🌱
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 bg-neutral-200 p-6 rounded-md">
        <img className={imageStyle} src={web1} alt="" />
        <img className={imageStyle} src={web2} alt="" />
        <img className={imageStyle} src={web3} alt="" />
        <img className={imageStyle} src={web4} alt="" />
        <img className={imageStyle} src={web5} alt="" />
        <img className={imageStyle} src={web6} alt="" />
        <img className={imageStyle} src={web7} alt="" />
        <img className={imageStyle} src={web8} alt="" />
      </div>
      <div className="mt-8 mb-[100px] bg-neutral-500 rounded-md p-6 text-white">
        <p className="text-[20px] mb-4">⚙️ Languages and Tools</p>
        <div className="grid grid-cols-3 gap-4">
          <img className={logoStyle} src={html} alt="" />
          <img className={logoStyle} src={css} alt="" />
          <img className={logoStyle} src={tailwind} alt="" />
          <img className={logoStyle} src={js} alt="" />
          <img className={logoStyle} src={ts} alt="" />
          <img className={logoStyle} src={react} alt="" />
        </div>
      </div>
    </div>
  );
}
