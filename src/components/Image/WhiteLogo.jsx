import LogoPath from '@assets/white_logo.png';
import { useNavigate } from 'react-router-dom';
const WhiteLogo = (props) => {
  const navigate = useNavigate();
  return <img src={LogoPath} alt="NUWA 로고입니다." {...props} onClick={()=>{navigate()}} />;
};

export default WhiteLogo;
