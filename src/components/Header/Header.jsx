import useBoundStore from '../../store/store';
import { Button as ChButton } from '@chakra-ui/react';

const Header = () => {
  const bearPopulation = useBoundStore((state) => state.bears);
  const primary = [
    `--primary-100 `,
    `--primary-200 `,
    `--primary-300 `,
    `--primary-400`,
    `--primary-500 `,
    `--primary-600 `,
    `--primary-700 `,
  ];

  const grey = [
    `--grey-100 `,
    `--grey-200 `,
    `--grey-300 `,
    `--grey-400`,
    `--grey-500 `,
    `--grey-600 `,
    `--grey-700 `,
  ];
  const variant = [100, 200, 300, 400, 500, 600, 700];

  return (
    <>
      <div>bear population:{bearPopulation}</div>
      <ChButton>차크라 버튼</ChButton>
    </>
  );
};
// pr template 확인용
export default Header;

const Palette = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: var(${(props) => props.backgroundColor});
`;

const Palette2 = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme, value }) => theme.primary[value]};
`;
