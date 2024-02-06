import { Flex, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import React, { useState } from 'react';
import Polygon from '@assets/Polygon.svg';
import { FAQ_text } from '@constants/selectPlan/SELECT_FEAT_INFO';
const FAQBox = () => {
  const [detailVisible, setDetailVisible] = useState(false);

  const toggleDetail = () => {
    setDetailVisible(!detailVisible);
  };

  return (
    <>
      <BoxContainer>
        {FAQ_text.map((FAQ, index) => (
          <TextBoxContainer onClick={toggleDetail}>
            <Flex gap={'15px'}>
              <ButtonBox color={'#575dfb'}>질문</ButtonBox>
              <Text fontSize={'14px'} fontWeight={'black'}>
                워크스페이스 아이콘 이미지는 어디서 변경하면 되나요?
              </Text>
            </Flex>

            <img src={Polygon} alt="삼각형 아이콘" />
          </TextBoxContainer>
        ))}

        {detailVisible && (
          <DetailContainer>
            <Flex gap={'15px'}>
              <ButtonBox color={'red'}>답변</ButtonBox>
              <Text fontSize={'14px'} fontWeight={'black'}>
                NUWA 대쉬보드에 접속 후 사이드바 프로필 상단 워크스페이스 이름을
                클릭하시면 이름 수정과 아이콘 변경하는 창이 나옵니다.
              </Text>
            </Flex>

            <img src={Polygon} alt="삼각형 아이콘" />
          </DetailContainer>
        )}
      </BoxContainer>
    </>
  );
};

export default FAQBox;

const BoxContainer = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const TextBoxContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  border: 1px solid #ccc;
  gap: 15px;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  width: 60px;
  height: 23px;
  padding: 5px 19px;
  background-color: ${(props) => props.color};
  border-radius: 28px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  border: 1px solid #ccc;
  gap: 15px;
  justify-content: space-between;
`;
