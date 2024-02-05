import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import StTextDiv from '@components/Text/StTextDiv';

const ToSignUp = () => {
  return (
    <StTextDiv $size={16} $weight={500} $color={'grey700'}>
      <Flex gap={'0.75rem'}>
        <span>NUWA는 처음이신가요?</span>
        <Link to={'/signup'}>
          <Text as={'u'} size={16} color={'primary.400'} fontWeight={500}>
            회원가입
          </Text>
        </Link>
      </Flex>
    </StTextDiv>
  );
};

export default ToSignUp;
