import { Flex, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import MemberIcon from './MemberIcon';
import { Link } from 'react-router-dom';
import imageMain from '@assets/nuwaWorkSpace.png';

const WorkspaceCard = ({ workspace_section }) => {
  return (
    <Flex>
      {workspace_section?.map((item, index) => (
        <CardContainer key={index}>
          <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            gap={'32px'}
          >
            <Link to={`/workspace/${item.workspaceId}`}>
              <Box
                width={'98px'}
                height={'98px'}
                border={'1px solid #ccc'}
                borderRadius={'full'}
                backgroundImage={`url(${item.workSpaceImage || imageMain})`} // item.image가 비어 있으면 defaultImageURL 사용
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              />
            </Link>

            <Flex flexDirection={'column'} justify={'center'} align={'center'}>
              <Text fontSize="24px" fontWeight="700">
                {item.title}
              </Text>{' '}
              {/* 타이틀 표시 */}
              <MemberIcon
                image={item.workSpaceImage || imageMain} // 멤버 아이콘에 이미지 전달
                number={item.workSpaceMemberCount} // 멤버 수 전달
              />
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
