import LogoPath from '@assets/logo.png';
const Logo = (props) => {
  return <img src={LogoPath} alt="NUWA 로고입니다." {...props} />;
};

export default Logo;
