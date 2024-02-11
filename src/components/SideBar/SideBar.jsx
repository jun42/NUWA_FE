import workspace from '../../assets/WorkSpace.png';
import add from '../../assets/add.svg';
import profile from '../../assets/cham.png';
import active from '../../assets/active.svg';

import dashboard from '../../assets/dashboard.svg';
import dm from '../../assets/dm.svg';
import canvas from '../../assets/canvas.svg';
import file from '../../assets/file.svg';
import exclude from '../../assets/exclude.svg';

import arrowdown from '../../assets/arrowdown.svg';
import add_sm from '../../assets/add_sm.svg';

import chat_ch from '../../assets/chat_ch.svg';
import voice_ch from '../../assets/voice_ch.svg';

import {
  Button,
  IconButton,
  Flex,
  Box,
  Text,
  Avatar,
  Image,
  Divider,
} from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Flex>
      <Box w="80px" h="100vh" backgroundColor="#5158ff" p="0 16px">
        <Flex justify="center" pt="32px">
          <img src={workspace} alt="" />
        </Flex>
        <Flex justify="center" pt="32px">
          <img src={add} alt="" />
        </Flex>
      </Box>
      <Box
        w="327px"
        h="100vh"
        backgroundColor="#f1f1f1"
        p="0 18px"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Text
          fontSize="20px"
          fontWeight="bold"
          textAlign="center"
          m="50px 20px 0"
        >
          NUWA_PROJECT
        </Text>
        <Flex
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          m="20px 0"
          position="relative"
        >
          <Box
            w="30px"
            h="30px"
            fontSize="12px"
            fontWeight="900"
            color="white"
            backgroundColor="#3361ff"
            borderRadius="70%"
            lineHeight="30px"
            position="absolute"
            right="72px"
            bottom="130px"
            zIndex="10"
          >
            2
          </Box>
          <Flex
            justify="center"
            align="center"
            w="150px"
            h="150px"
            border="2px solid #3361ff"
            borderRadius="70%"
            m="28px"
          >
            <Avatar size="2xl" src={profile} />
          </Flex>
          <Box m="13px 0">
            <Text fontSize="16px" fontWeight="900" color="#656565">
              김뿌꾸님
            </Text>
            <Text fontSize="14px" fontWeight="500" color="#656565">
              khs43833@gmail.com
            </Text>
          </Box>
          <Flex fontSize="14px" fontWeight="500" color="#898989">
            <Image src={active} alt="" m="0 3px" />
            현재 활동 중
          </Flex>
        </Flex>
        <Box>
          <Box mb="10px">
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={dashboard} alt="" w="20px" h="21px" mr="20px" />
              대쉬보드
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={dm} alt="" w="20px" h="21px" mr="20px" />
              다이렉트 메세지
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={canvas} alt="" w="20px" h="21px" mr="20px" />
              캔버스
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={file} alt="" w="20px" h="21px" mr="20px" />
              파일
            </Button>
            <Button
              fontSize="14px"
              fontWeight="500"
              color="#656565"
              width="100%"
              justifyContent="flex-start"
              backgroundColor="#f1f1f1"
            >
              <Image src={exclude} alt="" w="20px" h="21px" mr="20px" />
              더보기
            </Button>
          </Box>

          <Divider color="white" />

          <Box m="20px 0">
            <Flex
              fontSize="16px"
              fontWeight="600"
              color="#656565"
              position="relative"
              mb="8px"
              pl="16px"
            >
              <IconButton
                size="xs"
                bgColor="#f1f1f1"
                icon={<Image src={arrowdown} alt="" />}
              />
              <Text ml="16px">채팅채널</Text>
              <IconButton
                size="xs"
                position="absolute"
                right="0"
                bgColor="#f1f1f1"
                icon={<Image src={add_sm} alt="" />}
              />
            </Flex>
            <Box
              maxH="160px"
              overflowY="auto"
              mr="7px"
              css={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                  backgroundColor: '#FCFCFC',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  borderRadius: '10px',
                  backgroundColor: '#7A7A7A',
                },
              }}
            >
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={chat_ch} alt="" w="20px" h="21px" mr="20px" />
                FE-정보공유
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={chat_ch} alt="" w="20px" h="21px" mr="20px" />
                BE-정보공유
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={chat_ch} alt="" w="20px" h="21px" mr="20px" />
                UI-정보공유
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={chat_ch} alt="" w="20px" h="21px" mr="20px" />
                전체-정보공유
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={chat_ch} alt="" w="20px" h="21px" mr="20px" />
                전체-정보공유
              </Button>
            </Box>
          </Box>
          <Box m="20px 0">
            <Flex
              fontSize="16px"
              fontWeight="600"
              color="#656565"
              position="relative"
              mb="8px"
              pl="16px"
            >
              <IconButton
                size="xs"
                bgColor="#f1f1f1"
                icon={<Image src={arrowdown} alt="" />}
              />
              <Text ml="16px">음성채널</Text>
              <IconButton
                size="xs"
                position="absolute"
                right="0"
                bgColor="#f1f1f1"
                icon={<Image src={add_sm} alt="" />}
              />
            </Flex>
            <Box
              maxH="160px"
              overflowY="auto"
              mr="7px"
              css={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                  backgroundColor: '#FCFCFC',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  borderRadius: '10px',
                  backgroundColor: '#7A7A7A',
                },
              }}
            >
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={voice_ch} alt="" w="20px" h="21px" mr="20px" />
                프론트회의실
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={voice_ch} alt="" w="20px" h="21px" mr="20px" />
                백엔드회의실
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={voice_ch} alt="" w="20px" h="21px" mr="20px" />
                백엔드회의실
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={voice_ch} alt="" w="20px" h="21px" mr="20px" />
                백엔드회의실
              </Button>
              <Button
                fontSize="14px"
                fontWeight="500"
                color="#656565"
                width="100%"
                justifyContent="flex-start"
                backgroundColor="#f1f1f1"
              >
                <Image src={voice_ch} alt="" w="20px" h="21px" mr="20px" />
                백엔드회의실
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SideBar;
