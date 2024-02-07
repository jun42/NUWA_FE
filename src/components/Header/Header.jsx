// import useBoundStore from '../../store/store';
// import { Button as ChButton } from '@chakra-ui/react';

// const Header = () => {
//   const bearPopulation = useBoundStore((state) => state.bears);

//   return (
//     <>
//       <div>bear population:{bearPopulation}</div>
//     </>
//   );
// };
// export default Header;

import React from 'react';
import styled from 'styled-components';
import StText from '@components/Text/StText';
import Logo from '@components/Image/Logo';
import { Flex, Text, Button } from '@chakra-ui/react';
import { categories } from '@constants/selectPlan/SELECT_ALL_INFO';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <HeaderTop>
        <StText $size={14} $color={'white'} $weight={700}>
          100인 이하 그룹이라면 누구나 무료!👍 무료 협업 메신저 누와로
          시작하세요
        </StText>
      </HeaderTop>

      <HeaderCenter>
        <Logo width={'122px'} height={'32px'} />
      </HeaderCenter>

      <HeaderBottom>
        <CategoryBox>
          {categories.map((category) => (
            <Flex key={category.name} gap={'8px'}>
              <Text fontSize={'16px'} fontWeight={'500'}>
                {category.name}
              </Text>
              <img
                width={'14px'}
                height={'9px'}
                src={category.icon}
                alt="아이콘"
              />
            </Flex>
          ))}
        </CategoryBox>

        <ButtonBox>
          <Button
            borderRadius={'4px'}
            bg={'#575DFB'}
            _hover={{ bg: '#5055f3' }}
            _active={{ bg: '#5359f6' }}
            bgColor={'primary400'}
            padding={'9px 22px'}
            color={'white'}
            fontSize={'16px'}
            fontWeight={'700'}
          >
            로그인
          </Button>

          <Button
            borderRadius={'4px'}
            bg={'#313131'}
            _hover={{ bg: '#212121' }}
            _active={{ bg: '#101010' }}
            bgColor={'primary400'}
            padding={'9px 22px'}
            color={'white'}
            fontSize={'16px'}
            fontWeight={'700'}
          >
            무료 회원가입
          </Button>
        </ButtonBox>
      </HeaderBottom>
    </>
  );
};

export default Header;

const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 10px 0px;
`;

const HeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 150px;
`;

const HeaderBottom = styled.div`
  display: flex;
  padding: 12px 150px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  box-shadow: 0px 25px 60px 0px rgba(0, 0, 0, 0.05);
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 16px;
`;
