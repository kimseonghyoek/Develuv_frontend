import "../Components/scss/privacy.scss";
import Navi from "./Navi";

const Privacy = () => {
  return (
    <div className="privacy">
      <Navi />
      <div className="privacy-wrap">
        <div className="privacy-contents">
          <p>
            주식회사 페스타(Festa inc.)(이하 '회사')는 회원의 개인정보를
            중요하게 생각합니다. 그와 동시에 다양한 서비스를 쾌적하게 제공하기
            위해 노력합니다. 보안과 서비스를 조율하기 위하여 다음과 같은
            개인정보처리방침을 수립합니다. 회사는 정보통신망 이용촉진 및
            정보보호 등에 관한 법률, 개인정보보호법 등의 관련 법령을 준수하기
            위해 노력하고 있습니다. 개인정보처리방침은 법령의 변경 또는 서비스
            개선 등을 위해 언제든 개정될 수 있으며, 개정 시 최종 개정일을
            표시합니다.
          </p>
        </div>
        <div className="privacy-contents">
          <h1>제 1 조 개인정보 수집 및 이용</h1>
          <p>
            1. 회원가입 - 필수적으로 이메일, 이름 비밀번호를 수집합니다.
            선택적으로 전화번호를 수집합니다. 본인확인, 가입 의사 확인, 행사
            참가여부 확인, 온라인 티켓 수령, 행사 관계자의 공지사항 이메일
            수신을 위해 사용됩니다. 수집에 동의하여야 회원가입이 가능합니다.
            회원가입을 위해 회사로 정보를 제출한다면 개인정보 수집 및 이용에
            동의한 것으로 간주합니다.
          </p>
          <p>
            2. 티켓 결제 - 필수적으로 카드 번호, 카드 비밀번호 앞 두자리, 카드
            만료 일자, 생년월일, 전화번호를 수집합니다. 카드 정보 및 생년월일은
            티켓 결제 처리를 위해 결제 대행사에 제공하기 위해 사용됩니다.
            전화번호는 결제기록에 추가적인 정보 기입을 위해, 행사 입장시
            개인식별을 위해, 또는 행사 관련 공지 수령을 위해 사용됩니다. 수집에
            동의하여야 결제가 가능합니다. 결제를 위해 회사로 정보를 제출한다면
            개인정보 수집 및 이용에 동의한 것으로 간주합니다.
          </p>
          <p>
            3. 사이트에서 댓글, 게시글 등 이용자 생성 콘텐츠를 생성할 시 이름,
            프로필 사진이 다른 회원에게 공개될 수 있습니다. 직접 생성하여
            공개적으로 표시되는 콘텐츠는 디지털 미디어의 특성상 수신자에 의하여
            복사, 저장, 또는 확산될 가능성이 존재하므로 유의하시기 바랍니다.
            회사는 본인의 개인정보가 포함된 콘텐츠를 생성하여 타인과 공유할 때는
            세심한 주의를 기울이는 것을 추천합니다.
          </p>
        </div>
        <div className="privacy-contents">
          <h1>제 2 조 개인정보 처리 위탁</h1>
          <p>
            회사는 이용자의 동의 없이 개인정보를 제 3자에게 제공하지 않으며,
            서비스 이용을 위해 회원이 직접 동의한 경우에만 정보 제공이
            진행됩니다. 회사는 결제 대행사인 '(주) NICE 정보통신’에 카드 결제
            처리를 위탁하기 위해 카드 정보와 생년월일을 제공합니다. 회원이 '티켓
            구입' 버튼을 자발적으로 클릭하였을 시 위탁 사항에 대해 회원이
            동의했음을 인지하고 개인정보가 제공됩니다. '전자상거래 등에서 소비자
            보호에 관한 법률’에 따라 전자금융의 기록은 5년 동안 보존됩니다.
          </p>
        </div>

        <div className="privacy-contents">
          <h1>제 3 조 개인정보 파기 절차 및 방법</h1>
          <p>
            회사는 회원이 탈퇴를 원하여 회원탈퇴 기능을 이용할 시 이메일, 이름,
            비밀번호, 전화번호, 저장된 카드 정보를 파기합니다. 개인정보는
            물리적인 서류 상에 기록되지 않으며, 따라서 회원탈퇴를 진행할 시
            기술적인 방법으로 데이터베이스에 기록된 개인정보를 지체없이
            제거합니다. 다만 관련 법령에 따라 보존할 필요가 있는 정보는 일정
            기간 동안 보관합니다.
          </p>
          <p>전자상거래 등에서 소비자 보호에 관한 법률</p>
          <p>- 계약 또는 청약철회 등에 관한 기록 (5년)</p>
          <p>- 대금결제 및 재화 등의 공급에 관한 기록 (5년)</p>
          <p>- 소비자의 불만 또는 분쟁처리에 관한 기록 (3년)</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
