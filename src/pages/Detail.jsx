import { myData } from "../data/myData";
import detailIcon from "/images/detail-icon.png";

export default function Detail() {
  return (
    <>
      <div className="flex mt-[100px] items-center justify-center gap-[100px] shadow-lg rounded-[12px] bg-neutral-50">
        <img className="w-[300px]" src={detailIcon} alt="" />
        <div>
          {myData.map(({ title, value }) => (
            <div key={title} className="flex my-4 border-b-[1px] py-1">
              <div className="w-[100px]">{title}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-neutral-500 rounded-md p-4 text-white">
        😃 안녕하세요 ! Front-end 개발자를 목표로 정진하는 임현성입니다.
      </div>
      <div className="mt-8 rounded-md p-4 shadow-lg leading-[2] bg-neutral-50">
        저는 요리하는 것을 좋아해서 집에서 가끔 요리를 하곤 합니다.
        <br /> 개발자의 자기소개서인데 갑자기 무슨 요리얘기냐 ?🤷‍♂️
        <br /> 제가 요리를 좋아하는 이유는 여러가지 재료들이 섞여 생각지도 못한
        맛을 창조해내는 것이 흥미롭기 때문입니다.
        <br /> 이와 마찬가지로 새로운 사람들을 만나 여러 생각들이 합쳐 생각지도
        못한 훌륭한 결과를 내는 것이 저에게는 큰 흥미로 다가올 것이라
        생각합니다. <br />
        <br />
        이러한 의미에서 “개발자는 개발자의 일만 잘하고, 디자이너는 디자인만
        잘하면, 회사는 망한다.” 라는 슬로건을 가지고 있는 ‘우아한 형제들’에
        지원하고 싶습니다.
        <br /> 아직 저는 개발자는 개발자의 일만 잘하기에도 못미치지만, 패스트
        캠퍼스 부트캠프를 통해 주니어 개발자 중에서 가장 우수한 주니어 개발자가
        될 것입니다 !<br />
        <br /> 저는 ’우아한 형제들’의 웹사이트에 회사소개란을 보고 이 기업에
        매료되었습니다.
        <br /> 물론 대기업이기때문에 복지, 워라벨, 급여 등 많은 조건들이 모든
        사람들이 느끼기에 큰 메리트가 될 것이라 생각합니다. 하지만 제가 가장
        원하는 기업은 모든 직군과 소통이 원할하고, 시대의 흐름을 잘 파악하여
        무한한 성장 가능성이 있고, 직원의 능력을 잘 알아봐주고 그 능력들을 더
        성장시키기 위해 아낌없는 지원이 가능한 기업입니다.
        <br /> 이 모든 기준에 걸맞는 기업은 바로 ‘우아한 형제들’이라고
        생각합니다.
      </div>
      <div className="mt-8 bg-neutral-500 rounded-md p-4 text-white">
        📌 내가 생각하는 개발자의 중요한 덕목은 OO이다 !
      </div>
      <div className="mt-8 rounded-md p-4 shadow-lg leading-[2] bg-neutral-50">
        제가 생각하는 개발자의 중요한 덕목은 ‘겸손’입니다.
        <br />
        친구 중에 게임 개발을 하는 친구가 있습니다. 이 친구는 개발자로 일한지
        8년이 되었는데 아직도 퇴근하고 공부를 한다고 합니다. 이러한 개발자에
        관한 이야기는 많이 들어왔습니다. 저는 대충하는 것을 굉장히 싫어하는
        성격입니다. 어떠한 일이던지 대충하게되면 안좋겠지만, 특히 개발을
        대충하는 것은 더 위험하다고 생각합니다.
        <br />
        저는 겸손의 덕목을 통해 항상 배우려는 자세의 개발자가 될 것입니다.
      </div>
      <div className="mt-8 bg-neutral-500 rounded-md p-4 text-white">
        🔥 나만의 필살기 !
      </div>
      <div className="mt-8 rounded-md p-4 shadow-lg leading-[2] bg-neutral-50 mb-[100px]">
        저는 상대방의 입장에서 생각하는 것을 좋아하고 또 잘한다고 생각합니다.
        <br />
        원활한 소통의 기본자세는 상대방의 입장에서 생각해보는 것입니다. 상대방의
        입장에서 생각하려고 노력하다보면 생각의 폭이 넓어지고, 또 새로운 상대를
        만날 때 잘 적용해서 서로 호감을 느끼는 대화가 가능하게 합니다.
        <br />
        이것은 회사생활에서 아주 큰 무기가 될 것이라 생각합니다.
        <br />
        <br />더 나아가서 회사입장에서의 상대방은 고객입니다. 개발자는 우리의
        고객들이 어떻게 하면 더 편하게 기업의 서비스를 사용할 수 있을 지
        고민하는 직업이기도 합니다. 고객의 니즈를 잘 파악하고 그들의 입장에서
        생각할 수 있는 능력을 가진 개발자라면 회사에 큰 도움을 가져다 줄 수 있을
        것이라 생각합니다.
      </div>
    </>
  );
}
