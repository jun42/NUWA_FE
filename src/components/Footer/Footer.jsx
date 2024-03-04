import { Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import Logo from '@components/Image/Logo';
import { footer_categories } from '@constants/selectPlan/SELECT_ALL_INFO';
const Footer = () => {
  return (
    <StContainer>
      <Flex flexDirection={'column'} justify={'center'} align={'flex-start'}>
        <Grid
          templateColumns={'repeat(6, 1fr)'}
          fontSize={'14px'}
          fontWeight={'500'}
          marginBottom={'40px'}
          color={'#666'}
        >
          <Logo width={'140px'} height={'40px'} />
          {footer_categories.map((footer_category, index) => (
            <GridItem
              key={index}
              display={'flex'}
              flexDirection={'column'}
              gap={'20px'}
            >
              <Text>{footer_category.text1}</Text>
              <Text>{footer_category.text2}</Text>
              <Text>{footer_category.text3}</Text>
              <Text>{footer_category.text4}</Text>
              <Text>{footer_category.text5}</Text>
              <Text>{footer_category.text6}</Text>
            </GridItem>
          ))}
        </Grid>

        <Box
          width={'100%'}
          padding={'40px 0px'}
          display={'flex'}
          gap={'20px'}
          fontSize={'12px'}
          fontWeight={'700'}
          borderTop={'1px solid #00000010'}
          color={'#666'}
        >
          <Text>상태</Text>
          <Text>개인 정보 보호</Text>
          <Text>약관</Text>
          <Text>귀하의 개인정보 보호선택</Text>
          <Text>쿠키기본설정</Text>
          <Text>문의하기</Text>
        </Box>
      </Flex>
    </StContainer>
  );
};

export default Footer;

const StContainer = styled.div`
  max-width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 62px 0px;
  border-top: 1px solid #00000010;
`;
