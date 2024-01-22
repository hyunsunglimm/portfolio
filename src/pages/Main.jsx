import mainImage from "/images/main-icon.png";

export default function Main() {
  return (
    <main>
      <div className="mt-20 w-max mx-auto">
        <img
          className="w-[400px] h-[470px] mx-auto"
          src={mainImage}
          alt="main image"
        />
        <p className="text-center text-[32px] mt-6">안녕하세요 👋🏻</p>
        <p className="text-center text-[24px] mt-4">
          주니어 개발자 임현성의 포트폴리오 웹사이트입니다.
        </p>
      </div>
    </main>
  );
}
