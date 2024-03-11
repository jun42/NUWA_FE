import styled from 'styled-components';
import CustomInput from '@components/Input/CustomInput';
import { Flex, Button, Checkbox, Text, Center, Textarea } from '@chakra-ui/react';

const InputSection = () => {
  return (
    <StContainer>
      <Flex gap={'24px'}>
        <CustomInput width="100%" placeholder="이름" />
        <CustomInput width="100%" placeholder="전화번호" />
      </Flex>

      <Flex gap={'24px'} flexDirection={'column'}>
        <CustomInput width="100%" placeholder="이메일" />
        <CustomInput width="100%" placeholder="국가/지역" />
      </Flex>

      <Flex gap={'24px'}>
        <CustomInput width="100%" placeholder="회사명" />
        <CustomInput width="100%" placeholder="부서명" />
      </Flex>

      <Flex gap={'24px'}>
        <CustomInput width="100%" placeholder="직책" />
        <CustomInput width="100%" placeholder="인원수" />
      </Flex>

      <Flex gap={'24px'} margin>
        <Textarea width="100%" placeholder="문의내용" className='textArea'/>
      </Flex>

      <Flex justify={'center'}>
        <Checkbox
          defaultIsChecked
          sx={{
            '.chakra-checkbox__control': {
              borderWidth: '2px',
              borderColor: 'gray.500',
            },
          }}
        >
          <Text>
            <span style={{ color: '#575DFB' }}> [필수] </span> 요청하신 문의
            내용에 대한 서비스제공을 위해서 필요한 최소한의
            <span style={{ color: '#575DFB' }}>[개인정보] </span>이므로
            동의하여야 서비스를 이용할 수 있습니다.
          </Text>
        </Checkbox>
      </Flex>

      <Button
        marginTop="50px"
        borderRadius={'12px'}
        bg={'#575DFB'}
        _hover={{ bg: '#5055f3' }}
        _active={{ bg: '#5359f6' }}
        width={'100%'}
        padding={'14px 0px'}
        bgColor={'primary400'}
        color={'white'}
        fontSize={'22px'}
        fontWeight={'700'}
      >
        문의하기
      </Button>
    </StContainer>
  );
};

export default InputSection;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80%;
`;
