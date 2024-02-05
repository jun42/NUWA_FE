import workspace from '../../assets/WorkSpace.png';
import add from '../../assets/add.svg';
import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import dashboard from '../../assets/dashboard.svg';
import dm from '../../assets/dm.svg';
import canvas from '../../assets/canvas.svg';
import file from '../../assets/file.svg';
import exclude from '../../assets/exclude.svg';

import arrowdown from '../../assets/arrowdown.svg';
import add_sm from '../../assets/add_sm.svg';

import chat_ch from '../../assets/chat_ch.svg';
import voice_ch from '../../assets/voice_ch.svg';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="workspaces">
        <div className="workspace">
          <img src={workspace} alt="" />
        </div>
        <div className="workspace">
          <img src={add} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="title">NUWA_PROJECT</div>
        <div className="user">
          <div className="new">2</div>
          <div className="profile">
            <img src={profile} alt="" className="profile-img" />
          </div>
          <div className="user-info">
            <div className="user-name">김뿌꾸님</div>
            <div className="user-email">khs43833@gmail.com</div>
          </div>
          <div className="user-state">
            <img src={active} className="state-img" alt="" />
            현재 활동 중
          </div>
        </div>
        <div>
          <div>
            <ul>
              <li className="list">
                <img className="sidebar-icon" src={dashboard} alt="" />
                대쉬보드
              </li>
              <li className="list">
                <img className="sidebar-icon" src={dm} alt="" />
                다이렉트 메세지
              </li>
              <li className="list">
                <img className="sidebar-icon" src={canvas} alt="" />
                캔버스
              </li>
              <li className="list">
                <img className="sidebar-icon" src={file} alt="" />
                파일
              </li>
              <li className="list">
                <img className="sidebar-icon" src={exclude} alt="" />
                더보기
              </li>
            </ul>
          </div>
          <hr className="hr" />
          <div className="channel-list">
            <div className="channel-title">
              <img className="sidebar-icon" src={arrowdown} alt="" />
              채팅채널
              <img className="add-sm" src={add_sm} alt="" />
            </div>
            <ul>
              <li className="list">
                <img className="sidebar-icon" src={chat_ch} alt="" />
                FE-정보공유
              </li>
              <li className="list">
                <img className="sidebar-icon" src={chat_ch} alt="" />
                BE-정보공유
              </li>
              <li className="list">
                <img className="sidebar-icon" src={chat_ch} alt="" />
                UI-정보공유
              </li>
              <li className="list">
                <img className="sidebar-icon" src={chat_ch} alt="" />
                전체-정보공유
              </li>
            </ul>
          </div>
          <div className="channel-list">
            <div className="channel-title">
              <img className="sidebar-icon" src={arrowdown} alt="" />
              음성채널
              <img className="add-sm" src={add_sm} alt="" />
            </div>
            <ul>
              <li className="list">
                <img className="sidebar-icon" src={voice_ch} alt="" />
                프론트회의실
              </li>
              <li className="list">
                <img className="sidebar-icon" src={voice_ch} alt="" />
                백엔드회의실
              </li>
              <li className="list">
                <img className="sidebar-icon" src={voice_ch} alt="" />
                디자인회의실
              </li>
              <li className="list">
                <img className="sidebar-icon" src={voice_ch} alt="" />
                전체회의실
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
