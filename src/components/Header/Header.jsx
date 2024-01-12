import useBoundStore from '../../store/store';

const Header = () => {
  const bearPopulation = useBoundStore((state) => state.bears);
  return <div>Header {bearPopulation}</div>;
};
// pr template 확인용
export default Header;
