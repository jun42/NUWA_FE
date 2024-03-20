import { Flex, Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import MemberIcon from './MemberIcon';
import { Link } from 'react-router-dom';
import imageMain from '@assets/nuwaWorkSpace.png';
import useBoundStore from '../../store/store';
import workspaceAdd from '../../assets/workspace_add.png';

const WorkspaceCard = ({ workspace_section }) => {
  const { workspace } = useBoundStore();
  const { workSpaceImage } = workspace;
  const { workSpaceMemberImage } = workspace;

  return (
    <Flex>
      {workspace_section?.map((item, index) => (
        <CardContainer key={index}>
          <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            gap={'32px'}
            border={'1px solid blue'}
            width={'100%'}
          >
            <Link to={`/workspace/${item.workspaceId}`}>
              <Box
                width={'120px'}
                height={'120px'}
                border={'1px solid #ccc'}
                borderRadius={'full'}
                backgroundImage={`url(${workSpaceImage || ''})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              />
            </Link>

            <Flex
              flexDirection={'column'}
              justify={'center'}
              align={'center'}
              border={'1px solid black'}
            >
              <Text
                fontSize="20px"
                fontWeight="700"
                isTruncated
                maxWidth="150px"
                mt={'-20px'}
              >
                {item.workSpaceName}
              </Text>
              <MemberIcon
                image={workSpaceMemberImage || imageMain}
                number={item.workSpaceMemberCount}
              />
            </Flex>
          </Flex>
        </CardContainer>
      ))}
      <CardContainer>
        <Flex
          flexDirection={'column'}
          justify={'center'}
          align={'center'}
          gap={'32px'}
        >
          <Link to="/create-workspace">
            <Box
              as="img"
              width={'98px'}
              height={'98px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'full'}
              src={workspaceAdd}
            />
          </Link>
          <Text fontSize="18px" fontWeight="700">
            워크스페이스 생성
          </Text>
        </Flex>
      </CardContainer>
    </Flex>
  );
};

export default WorkspaceCard;

const CardContainer = styled.div`
  width: 100%;
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
