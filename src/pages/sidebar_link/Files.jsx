import { useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import search from '../../assets/search.svg';
import ellipsis_vertical from '../../assets/ellipsis-vertical.svg';
import illustratorIcon from '../../assets/illustratorIcon.svg';
import nofile from '../../assets/nofile.png';

import file_bg from '../../assets/file_bg.jpg';
import file_bg2 from '../../assets/file_bg2.jpeg';
import profile from '../../assets/cham.png';

import {
  Button,
  ButtonGroup,
  IconButton,
  Flex,
  Box,
  Text,
  Avatar,
  Image,
  Divider,
  Switch,
  Wrap,
  WrapItem,
  Center,
  Input,
  useDisclosure,
  Checkbox,
} from '@chakra-ui/react';

import GridSwitch from './GridSwitch.jsx';
import FileBox from './FileBox.jsx';
import FileList from './FileList.jsx';

const Files = () => {
  const [switchstate, setSwitchstate] = useState(false);
  const handleChange = () => {
    setSwitchstate((prev) => !prev);
  };

  const [fileType, setFileType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      fileName: '1번파일',
      sharedBy: '박미송',
      date: '2024-01-18',
      type: 'adobe',
      size: '220KB',
      src: file_bg,
    },
    {
      fileName: '2번파일',
      sharedBy: '박미송',
      date: '2024-01-18',
      type: 'adobe',
      size: '221KB',
      src: file_bg2,
    },
    {
      fileName: '3번파일',
      sharedBy: '박미송',
      date: '2024-01-18',
      type: 'adobe',
      size: '222KB',
      src: '',
    },
  ];
  const [searchData, setSearchData] = useState([
    { name: '김수한', checked: false },
    { name: '김점례', checked: false },
    { name: '김뿌꾸', checked: false },
    { name: '박새로이', checked: false },
    { name: '이상혁', checked: false },
  ]);
  // const searchData = [
  //   { name: '김수한', checked: false },
  //   { name: '김점례', checked: false },
  //   { name: '박새로이', checked: false },
  //   { name: '이상혁', checked: false },
  // ];
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = searchData.filter((item) =>
    item.name.includes(searchTerm)
  );
  const checkedData = searchData.filter((item) => item.checked === true);

  const userData = searchData.filter((item) => item.name === '김뿌꾸');
  const userChecked = userData[0].checked;

  return (
    <Flex w="100%">
      <Box w="100%" p="52px 63px">
        <Text fontSize="40px" fontWeight="600">
          파일
        </Text>
        <Box w="100%" m="32px 0" position="relative">
          <Image
            src={search}
            alt=""
            position="absolute"
            top="20%"
            left="10px"
            zIndex="10"
          />
          <Input
            w="100%"
            h="40px"
            backgroundColor="#f1f1f1"
            fontSize="14px"
            fontWeight="500"
            border="1px solid #767676"
            borderRadius="8px"
            p="0 40px"
            placeholder="파일명으로 검색해주세요."
            _placeholder={{ color: 'black' }}
          />
        </Box>
        <Flex position="relative" justify="space-between" m="32px 0">
          <Flex>
            <Box position="relative">
              <Button
                borderRadius="8px"
                bgColor="#242424"
                color="white"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                _hover={{ bgColor: 'gray' }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {checkedData.length === 0 && <Text>From</Text>}
                {checkedData.length === 1 && (
                  <Text>From {checkedData[0].name}</Text>
                )}
                {checkedData.length > 1 && (
                  <Text>{checkedData.length}명의 팀원으로부터</Text>
                )}
              </Button>
              {isOpen && (
                <>
                  <Box
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    zIndex="99"
                    onClick={() => {
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                  />
                  <Box w="180px" position="absolute" zIndex="100" mt="2px">
                    <Flex
                      flexDir="column"
                      w="150%"
                      zIndex="100"
                      border="1px solid gray"
                      borderRadius="md"
                      backgroundColor="#f8f8f8"
                      p="5px 0"
                    >
                      <Center>
                        <Input
                          m="8px"
                          backgroundColor="white"
                          fontSize="14px"
                          fontWeight="500"
                          border="1px solid #767676"
                          borderRadius="8px"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          placeholder="예: 고길동"
                          _placeholder={{ color: 'black' }}
                        />
                      </Center>
                      {!searchTerm &&
                        checkedData.map((item) => (
                          <Checkbox
                            fontSize="14px"
                            fontWeight="500"
                            color="#656565"
                            borderColor="#656565"
                            p="5px 10px"
                            _hover={{
                              backgroundColor: '#1264A3',
                              color: 'white',
                              borderColor: 'white',
                            }}
                            onChange={(e) => {
                              const updatedData = [...searchData];
                              const dataIndex = searchData.findIndex(
                                (dataItem) => dataItem.name === item.name
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchData(updatedData);
                              }
                            }}
                            isChecked={item.checked}
                          >
                            {item.name}
                          </Checkbox>
                        ))}
                      {searchTerm &&
                        filteredData.map((item) => (
                          <Checkbox
                            fontSize="14px"
                            fontWeight="500"
                            color="#656565"
                            borderColor="#656565"
                            p="5px 10px"
                            _hover={{
                              backgroundColor: '#1264A3',
                              color: 'white',
                              borderColor: 'white',
                            }}
                            onChange={(e) => {
                              const updatedData = [...searchData];
                              const dataIndex = searchData.findIndex(
                                (dataItem) => dataItem.name === item.name
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchData(updatedData);
                              }
                            }}
                            isChecked={item.checked}
                          >
                            {item.name}
                          </Checkbox>
                        ))}
                      {!userChecked && (
                        <Box>
                          <Text p="0px 10px" fontSize="13px" color="#656565">
                            제안
                          </Text>
                          <Checkbox
                            fontSize="14px"
                            fontWeight="500"
                            color="#656565"
                            borderColor="#656565"
                            w="100%"
                            p="5px 10px"
                            _hover={{
                              backgroundColor: '#1264A3',
                              color: 'white',
                              borderColor: 'white',
                            }}
                            onChange={(e) => {
                              const updatedData = [...searchData];
                              const dataIndex = searchData.findIndex(
                                (dataItem) => dataItem.name === userData[0].name
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchData(updatedData);
                              }
                            }}
                            isChecked={userData[0].checked}
                          >
                            {userData[0].name}
                          </Checkbox>
                        </Box>
                      )}
                    </Flex>
                  </Box>
                </>
              )}
            </Box>

            <Divider
              orientation="vertical"
              m="0 24px"
              border="1px"
              opacity="10%"
            />
            <ButtonGroup gap="4px">
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={fileType === 'all' ? '#575DFB' : '#FFFFFF'}
                color={fileType === 'all' ? 'white' : 'black'}
                _hover={fileType === 'all' ? { bgColor: '#575DFB' } : undefined}
                border={
                  fileType === 'all' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setFileType('all')}
              >
                모든 파일
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={fileType === 'pic' ? '#575DFB' : '#FFFFFF'}
                color={fileType === 'pic' ? 'white' : 'black'}
                _hover={fileType === 'pic' ? { bgColor: '#575DFB' } : undefined}
                border={
                  fileType === 'pic' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setFileType('pic')}
              >
                사진
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={fileType === 'file' ? '#575DFB' : '#FFFFFF'}
                color={fileType === 'file' ? 'white' : 'black'}
                _hover={
                  fileType === 'file' ? { bgColor: '#575DFB' } : undefined
                }
                border={
                  fileType === 'file'
                    ? '1px solid #575DFB'
                    : '1px solid #898989'
                }
                onClick={() => setFileType('file')}
              >
                파일
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={fileType === 'zip' ? '#575DFB' : '#FFFFFF'}
                color={fileType === 'zip' ? 'white' : 'black'}
                _hover={fileType === 'zip' ? { bgColor: '#575DFB' } : undefined}
                border={
                  fileType === 'zip' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setFileType('zip')}
              >
                ZIP
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={fileType === 'pdf' ? '#575DFB' : '#FFFFFF'}
                color={fileType === 'pdf' ? 'white' : 'black'}
                _hover={fileType === 'pdf' ? { bgColor: '#575DFB' } : undefined}
                border={
                  fileType === 'pdf' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setFileType('pdf')}
              >
                PDF
              </Button>
            </ButtonGroup>

            <Divider
              orientation="vertical"
              m="0 24px"
              border="1px"
              opacity="10%"
            />
            <ButtonGroup gap="4px">
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={sortBy === 'date' ? '#575DFB' : '#FFFFFF'}
                color={sortBy === 'date' ? 'white' : 'black'}
                _hover={sortBy === 'date' ? { bgColor: '#575DFB' } : undefined}
                border={
                  sortBy === 'date' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setSortBy('date')}
              >
                날짜 순
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={sortBy === 'name' ? '#575DFB' : '#FFFFFF'}
                color={sortBy === 'name' ? 'white' : 'black'}
                _hover={sortBy === 'name' ? { bgColor: '#575DFB' } : undefined}
                border={
                  sortBy === 'name' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setSortBy('name')}
              >
                이름 순
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={sortBy === 'size' ? '#575DFB' : '#FFFFFF'}
                color={sortBy === 'size' ? 'white' : 'black'}
                _hover={sortBy === 'size' ? { bgColor: '#575DFB' } : undefined}
                border={
                  sortBy === 'size' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setSortBy('size')}
              >
                크기 순
              </Button>
              <Button
                borderRadius="8px"
                fontSize="14px"
                fontWeight="500"
                p="12px 26px"
                bgColor={sortBy === 'type' ? '#575DFB' : '#FFFFFF'}
                color={sortBy === 'type' ? 'white' : 'black'}
                _hover={sortBy === 'type' ? { bgColor: '#575DFB' } : undefined}
                border={
                  sortBy === 'type' ? '1px solid #575DFB' : '1px solid #898989'
                }
                onClick={() => setSortBy('type')}
              >
                유형 순
              </Button>
            </ButtonGroup>
          </Flex>
          <GridSwitch switchstate={switchstate} onChange={handleChange} />
        </Flex>
        <Box
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          h="calc(100% - 184px)"
          overflowY="scroll"
        >
          {data.length > 0 && !switchstate && (
            <>
              <Box m="64px 0">
                <Text
                  fontSize="22px"
                  fontWeight="500"
                  color="#656565"
                  mb="27px"
                >
                  1월18일
                </Text>
                <Wrap spacing="40px">
                  {data.map((x, index) => (
                    <FileBox
                      key={index}
                      fileName={x.fileName}
                      sharedBy={x.sharedBy}
                      date={x.date}
                      type={x.type}
                      size={x.size}
                      src={x.src}
                    />
                  ))}
                </Wrap>
              </Box>
            </>
          )}
          {data.length > 0 && switchstate && (
            <>
              <Box>
                <Flex>
                  <Text w="52%" align="center" fontSize="14px" fontWeight="600">
                    파일명
                  </Text>
                  <Text
                    w="12%"
                    align="center"
                    fontSize="14px"
                    fontWeight="600"
                    color="#000000B2"
                  >
                    공유한사람
                  </Text>
                  <Text
                    w="12%"
                    align="center"
                    fontSize="14px"
                    fontWeight="600"
                    color="#000000B2"
                  >
                    날짜
                  </Text>
                  <Text
                    w="12%"
                    align="center"
                    fontSize="14px"
                    fontWeight="600"
                    color="#000000B2"
                  >
                    유형
                  </Text>
                  <Text
                    w="12%"
                    align="center"
                    fontSize="14px"
                    fontWeight="600"
                    color="#000000B2"
                  >
                    크기
                  </Text>
                </Flex>
                <Divider color="#0000001A" m="15px 0" />

                {data.map((x, index) => (
                  <FileList
                    key={index}
                    fileName={x.fileName}
                    sharedBy={x.sharedBy}
                    date={x.date}
                    type={x.type}
                    size={x.size}
                  />
                ))}
              </Box>
            </>
          )}
          {data.length === 0 && (
            <Center
              w="100%"
              h="100%"
              flexDir="column"
              fontSize="20px"
              fontWeight="600"
            >
              <Image src={nofile} />
              <Text>파일을 찾을 수가 없습니다.</Text>
              <Text display="flex">
                팀원과
                <Text color="#575DFB" m="0 5px">
                  파일 공유
                </Text>
                를 해보세요.
              </Text>
            </Center>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default Files;
