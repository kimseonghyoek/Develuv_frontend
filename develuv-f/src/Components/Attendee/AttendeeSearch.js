import "./scss/AttendeeSearch.scss";

const AttendeeSearch = () => {
  // const [text, setText]

  return(
    <div className="attendee-search">
      <svg width="34" height="34"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C12.775 18.9996 14.4988 18.4054 15.897 17.312L20.293 21.708L21.707 20.294L17.311 15.898C18.405 14.4997 18.9996 12.7754 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19ZM11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11C5 7.691 7.691 5 11 5Z" fill="#AAAEB3"></path></svg>
      <input type="text" placeholder="이름, 이메일, 전화번호, 티켓ID로 검색" />
      
    </div>
  )
}

export default AttendeeSearch;