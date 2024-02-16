import { Flex, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';  
import MemberIcon from './MemberIcon';

const WorkspaceCard = ({ workspace_section }) => {
  return (
    <Flex>
      {workspace_section.map((item, index) => (
        <CardContainer key={index}>
          <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            gap={'32px'}
          >
            <Box
              width={'126px'}
              height={'126px'}
              border={'1px solid #ccc'}
              borderRadius={'full'}
              backgroundImage={`url(${item.image})`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            />

            <Flex flexDirection={'column'} justify={'center'} align={'center'}>
              <Text fontSize={'24px'} fontWeight={'700'}>
                {item.title}
              </Text>

              {index !== workspace_section.length - 1 && (
                <MemberIcon image={item.image} number={item.number} />
              )}
            </Flex>
          </Flex>
        </CardContainer>
      ))}
    </Flex>
  );
};

export default WorkspaceCard;

const CardContainer = styled.div`
  width: 20%;
  padding: 40px 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 10px 12px 33px 0px rgba(102, 102, 102, 0.1);
  border-radius: 12px;
  margin: 30px 28px;
`;
