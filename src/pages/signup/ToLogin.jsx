import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import StTextDiv from '@components/Text/StTextDiv';

const ToLogin = () => {
  return (
    <StTextDiv $size={16} $weight={500} $color={'grey700'}>
      <Flex gap={'0.75rem'}>
        <span>이미 NUWA를 사용하는 중이신가요?</span>
        <Link>
          <Text as={'u'} size={16} color={'primary.400'} fontWeight={500}>
            로그인
          </Text>
        </Link>
      </Flex>
    </StTextDiv>
  );
};

export default ToLogin;
