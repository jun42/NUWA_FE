import SideBar from '@components/SideBar/SideBar';
import search from '../../assets/search.svg';

import './Files.css';

const Files = () => {
  return (
    <div className="view">
      <SideBar />
      <div className="main">
        <div className="titlef">파일</div>
        <div className="search">
          <img className='search-icon' src={search} alt="" />
          <input className='search-input' type="text" placeholder='파일명으로 검색해주세요.' />
        </div>
        <div>유형 선택</div>
        <div>날짜 및 파일</div>
      </div>
    </div>
  );
};

export default Files;
