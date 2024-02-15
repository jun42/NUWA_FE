import { ImgWrap } from '@components/Wrap/StWrap';
import Image from '@components/Image/Image';
import Logo from '@assets/logo.png';
import LinkImg from '@assets/link.svg';
import AgreementImg from '@assets/agreement.png';
import {
  Button,
  Text,
  ButtonGroup,
  Flex,
  Box,
  Checkbox,
} from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Span from '@components/Span/Span';
import SingleColor from '../../../components/Paragraph/BreakParagraph/SingleColor';
import DefaultBreak from '../../../components/Paragraph/BreakParagraph/DefaultBreak';
import LinkButton from '../../../components/Button/LinkButton';

const Agreement = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    if (isChecked === true) {
      return navigate('/create-workspace/workspace-name');
    } else return;
  };
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" gap="134px">
        <div>
          <div>
            <Flex alignItems="center">
              <ImgWrap>
                <Image src={Logo} alt="logo" />
              </ImgWrap>
              <Span fontSize="3xl" fontWeight="700" ml="10px" spanText="에서" />
            </Flex>
            <SingleColor
              fontSize="3xl"
              fontWeight="700"
              mb="16px"
              firstText="새로운 "
              secondText="워크페이스 생성"
              hasColor="second"
              spanColor="#575DFB"
            />
            <DefaultBreak
              fontSize="xl"
              color="#898989"
              mb="48px"
              fontWeight={500}
              firstText="팀 협업에 사용해보세요. 이메일보다 빠르고 안전하게"
              secondText="무료로 사용해보기"
            />
          </div>
          <Flex flexDirection="row" justifyContent="space-between">
            <Box>
              <Checkbox
                size="md"
                borderColor="#898989"
                isChecked={isChecked}
                onChange={handleCheckboxChange}
              >
                <Text as="span" color="#898989" fontWeight={400}>
                  개인정보수집 및 이용에 동의합니다.
                </Text>
              </Checkbox>
            </Box>
            <Flex>
              <Image src={LinkImg} alt="link" />
              <Text
                as="span"
                color="#575DFB"
                textDecoration="underline"
                ml="4px"
                fontWeight={400}
              >
                자세하게 확인하기
              </Text>
            </Flex>
          </Flex>
          <ButtonGroup mt="40px">
            <Button
              rounded="50px"
              w="210px"
              p="12px 60px"
              bg="#5158FFCC"
              color="#fff"
              onClick={handleButtonClick}
            >
              워크스페이스 생성
            </Button>
            <LinkButton
              rounded="50px"
              w="210px"
              p="12px 60px"
              bg="transparent"
              color="#5158FFCC"
              border="solid 2px #5158FFCC"
              buttonText="다른 이메일로 로그인 하기"
              toPath="/login"
            />
          </ButtonGroup>
        </div>
        <Box w={500}>
          <Image src={AgreementImg} alt="agreement-img" />
        </Box>
      </Flex>
    </>
  );
};

export default Agreement;
