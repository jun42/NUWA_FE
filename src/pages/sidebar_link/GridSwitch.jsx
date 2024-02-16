import React from 'react';
import switchIcon1 from '../../assets/switchIcon1.svg';
import switchIcon2 from '../../assets/switchIcon2.svg';
import styled from '@emotion/styled';
import { Switch } from '@chakra-ui/react';

const GridSwitch = styled(({ switchstate, ...props }) => <Switch {...props} />)(
    ({ theme, switchstate }) => ({
  '& .chakra-switch__track': {
    borderRadius: '22px',
    width: '85px',
    height: '34px',
    position: 'relative',
    backgroundColor: '#434343',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '22px',
      height: '21px',
      backgroundImage: switchstate ? `url(${switchIcon1})` : 'none',
      left: '16px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
      backgroundImage: switchstate ? 'none' : `url(${switchIcon2})`,
      right: '16px',
    },
  },
  '& .chakra-switch__thumb': {
    boxShadow: 'none',
    width: '30px',
    height: '30px',
    margin: '2px',
    transform: 'translateX(0px)', // Thumb을 시작 지점에 위치하도록 설정
    transition: 'transform 0.2s ease', // Thumb이 움직일 때 애니메이션 효과 적용
  },
  '& input:checked + .chakra-switch__track .chakra-switch__thumb': {
    transform: 'translateX(51px)',
  },
}));
export default GridSwitch;
