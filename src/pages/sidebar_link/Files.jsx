import { useEffect, useState } from 'react';
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
import { getAllFiles } from './../../apis/files/files';
import { useParams } from 'react-router-dom';
import { getWorkSpaceMemberList } from './../../apis/workspace/workSpaceMember';
import {
  useMyInfoQuery,
  useWorkSpaceMemberListQuery,
} from './../../queries/workSpace/workSpaceMemberList';

const Files = () => {
  const { workSpaceId } = useParams();
  const [switchstate, setSwitchstate] = useState(false);
  const handleChange = () => {
    setSwitchstate((prev) => !prev);
  };

  const members = useWorkSpaceMemberListQuery(workSpaceId);
  console.log('members', members);
  const myInfo = useMyInfoQuery(workSpaceId);
  console.log('myInfo', myInfo);

  const addCheckedList = members.memberList?.map((item) => ({
    ...item,
    checked: false,
  }));

  const [fileType, setFileType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   uploadFiles(1, 1, [profile]);
  // });

  const mockData = [
    {
      fileId: 1,
      fileUrl: file_bg,
      fileName:
        '파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1파일1',
      fileSize: 1722,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-02-24 06:42:21.368',
    },
    {
      fileId: 2,
      fileUrl: file_bg2,
      fileName: 'dpirng',
      fileSize: 1721,
      fileExtension: 'svg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-02-25 06:42:21.368',
    },
    {
      fileId: 3,
      fileUrl:
        'https://s3.ap-northeast-2.amazonaws.com/nuwabucket/file/direct/3.%20API%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%20%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%20-%20%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%AB%20%E1%84%85%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%80%E1%85%AA%20%E1%84%8C%E1%85%A9%E1%84%92%E1%85%AC%20%E1%84%89%E1%85%A5%E1%86%BC%E1%84%82%E1%85%B3%E1%86%BC%20%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA_2024-02-24T06%3A42%3A21.140179.pdf',
      fileName: 'spirngdatajpa-v20231224',
      fileSize: 1729,
      fileExtension: 'pdf',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 2,
      fileMemberUploadName: '윤철일반',
      createdAt: '2024-02-24 07:42:21.368',
    },
    {
      fileId: 4,
      fileUrl: file_bg2,
      fileName: 'ypirng',
      fileSize: 172,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 5,
      fileMemberUploadName: 'zecaumr',
      createdAt: '2024-02-25 06:42:21.368',
    },
    {
      fileId: 5,
      fileUrl: file_bg2,
      fileName: 'epirng',
      fileSize: 1721,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-02-25 06:42:21.368',
    },
    {
      fileId: 6,
      fileUrl: file_bg2,
      fileName: 'apirng',
      fileSize: 1723,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-02-25 06:42:21.368',
    },
    {
      fileId: 7,
      fileUrl: file_bg2,
      fileName: 'cpirng',
      fileSize: 1721,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-02-25 06:42:21.368',
    },
    {
      fileId: 8,
      fileUrl: file_bg2,
      fileName: 'bpirng413',
      fileSize: 1721,
      fileExtension: 'jpeg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-09-25 06:42:21.368',
    },
    {
      fileId: 9,
      fileUrl: file_bg2,
      fileName: '1Spirng6754',
      fileSize: 1721,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-07-25 06:42:21.368',
    },
    {
      fileId: 10,
      fileUrl: file_bg2,
      fileName: 'Spirng2',
      fileSize: 1721,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-06-25 06:42:21.368',
    },
    {
      fileId: 10,
      fileUrl: file_bg2,
      fileName: 'Spirng8',
      fileSize: 6,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-01-25 06:42:21.368',
    },
    {
      fileId: 10,
      fileUrl: file_bg2,
      fileName: 'Spirng10',
      fileSize: 9,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-03-25 06:42:21.368',
    },
    {
      fileId: 10,
      fileUrl: file_bg2,
      fileName: 'Spirng10',
      fileSize: 9,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-03-25 06:42:21.368',
    },
    {
      fileId: 10,
      fileUrl: file_bg2,
      fileName: 'Spirng10',
      fileSize: 9,
      fileExtension: 'jpg',
      fileUploadType: 'IMAGE',
      fileType: 'CANVAS',
      fileMemberUploadId: 1,
      fileMemberUploadName: '루루',
      createdAt: '2024-03-25 06:42:21.368',
    },
  ];

  // useEffect(() => {
  //   uploadFiles({ workSpaceId, channelId: 1, profile });
  // }, []);

  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    const id = setTimeout(() => {
      Promise.resolve(mockData).then((r) => setFileList(r));
    }, 300);
    // getAllFiles({ workSpaceId }).then(console.log);
    return () => {
      clearTimeout(id);
    };
  }, []);

  //날짜 순 정렬
  const dateList = [];
  for (let i = 0; i < fileList.length; i++) {
    if (!dateList.includes(fileList[i].createdAt.substring(0, 10))) {
      dateList.push(fileList[i].createdAt.substring(0, 10));
    }
  }
  const compareDates = (date1, date2) => {
    return new Date(date2) - new Date(date1);
  };
  dateList.sort(compareDates);

  const filterByDate = (date) => {
    return fileList.filter((file) => {
      return file.createdAt.substring(0, 10) === date;
    });
  };
  function removeLeadingZero(number) {
    return String(number).replace(/^0+/, '');
  }

  //이름 순 정렬
  function getInitial(text) {
    const doubleConsonants = {
      ㄲ: 'ㄱ',
      ㄸ: 'ㄷ',
      ㅃ: 'ㅂ',
      ㅆ: 'ㅅ',
      ㅉ: 'ㅈ',
    };

    const firstChar = text.charAt(0);
    if (doubleConsonants.hasOwnProperty(firstChar)) {
      return doubleConsonants[firstChar];
    } else {
      const initialList = [
        'ㄱ',
        'ㄲ',
        'ㄴ',
        'ㄷ',
        'ㄸ',
        'ㄹ',
        'ㅁ',
        'ㅂ',
        'ㅃ',
        'ㅅ',
        'ㅆ',
        'ㅇ',
        'ㅈ',
        'ㅉ',
        'ㅊ',
        'ㅋ',
        'ㅌ',
        'ㅍ',
        'ㅎ',
      ];
      const unicode = text.charCodeAt(0);
      if (unicode >= 44032 && unicode <= 55203) {
        // 한글 유니코드 범위
        const initialIndex = Math.floor((unicode - 44032) / 588);
        const initial = initialList[initialIndex];
        if (
          initial === 'ㄲ' ||
          initial === 'ㄸ' ||
          initial === 'ㅃ' ||
          initial === 'ㅆ' ||
          initial === 'ㅉ'
        ) {
          return initialList[initialIndex - 1]; // 단자음으로 변환
        }
        return initial;
      } else {
        return text.charAt(0);
      }
    }
  }

  const initialList = [];
  for (let i = 0; i < fileList.length; i++) {
    if (!initialList.includes(getInitial(fileList[i].fileName).toLowerCase())) {
      initialList.push(getInitial(fileList[i].fileName).toLowerCase());
    }
  }
  //숫자 한글 알파벳 순
  // initialList.sort((a, b) => a.localeCompare(b));
  //숫자 알파벳 한글 순
  initialList.sort();
  const filterByInitial = (initial) => {
    return fileList.filter((file) => {
      return getInitial(file.fileName).toLowerCase() === initial;
    });
  };

  //크기 순 정렬
  const sortedBySize = fileList.sort((a, b) => a.fileSize - b.fileSize);

  //유형 순 정렬
  const extensionList = [];
  for (let i = 0; i < fileList.length; i++) {
    if (!extensionList.includes(fileList[i].fileExtension)) {
      extensionList.push(fileList[i].fileExtension);
    }
  }
  extensionList.sort();
  const filterByExtension = (extension) => {
    return fileList.filter((file) => {
      return file.fileExtension === extension;
    });
  };

  const sortFiles = (sort) => {
    switch (sort) {
      case 'date':
        const sortedByDate = fileList.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
        return sortedByDate;
      case 'name':
        const sortedByName = fileList.sort((a, b) => {
          const nameA = a.fileName.toLowerCase();
          const nameB = b.fileName.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        return sortedByName;
      case 'size':
        const sortedBySize = fileList.sort((a, b) => {
          a.fileSize - b.fileSize;
        });
        return sortedBySize;
      case 'type':
        const sortedByType = fileList.sort((a, b) => {
          const nameA = a.fileExtension.toLowerCase();
          const nameB = b.fileExtension.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        return sortedByType;
    }
  };

  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    if (
      members.memberList &&
      members.memberList.length > 0 &&
      searchData.length === 0
    ) {
      setSearchData(addCheckedList);
    }
  }, [members.memberList, searchData, addCheckedList]);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = searchData.filter((item) =>
    item.nickname.includes(searchTerm)
  );
  const checkedUsers = searchData.filter((item) => item.checked === true);
  console.log('cu', checkedUsers);

  console.log('searchData', searchData);

  const findMyInfo = searchData.find((item) => {
    return item.email === myInfo?.myInfo?.email;
  });
  console.log('findMyInfo', findMyInfo);

  const userChecked = findMyInfo?.checked;

  const filterByUsers = (list) => {
    const matchedFiles = []; // 일치하는 파일을 저장할 배열
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < checkedUsers.length; j++) {
        if (list[i].fileMemberUploadId === checkedUsers[j].id) {
          matchedFiles.push(list[i]); // 일치하는 파일을 배열에 추가
          break; // 일치하는 사용자를 찾으면 추가 확인이 필요하지 않으므로 루프 종료
        }
      }
    }
    return matchedFiles; // 일치하는 파일의 배열 반환
  };
  const filteredFilesOnList = (sortBy) =>
    checkedUsers.length > 0
      ? filterByUsers(sortFiles(sortBy))
      : sortFiles(sortBy);

  const renderFilesByCheckedUsers = (files) => {
    return (
      <Wrap spacing="40px">
        {files.map((x, index) => (
          <FileBox
            key={index}
            fileName={x.fileName}
            fileMemberUploadName={x.fileMemberUploadName}
            createdAt={x.createdAt}
            fileExtension={x.fileExtension}
            fileSize={x.fileSize}
            fileUrl={x.fileUrl}
          />
        ))}
      </Wrap>
    );
  };
  const renderFilesBySortType = () => {
    switch (sortBy) {
      case 'date':
        return dateList.map((item, index) => (
          <Box m="64px 0" key={index}>
            <Text fontSize="22px" fontWeight="500" color="#656565" mb="27px">
              {removeLeadingZero(item.substring(5, 7))}월
              {removeLeadingZero(item.substring(8))}일
            </Text>
            {checkedUsers.length > 0
              ? renderFilesByCheckedUsers(filterByUsers(filterByDate(item)))
              : renderFilesByCheckedUsers(filterByDate(item))}
          </Box>
        ));
      case 'name':
        return initialList.map((item, index) => (
          <Box m="64px 0" key={index}>
            <Text fontSize="22px" fontWeight="500" color="#656565" mb="27px">
              {item}
            </Text>
            {checkedUsers.length > 0
              ? renderFilesByCheckedUsers(filterByUsers(filterByInitial(item)))
              : renderFilesByCheckedUsers(filterByInitial(item))}
          </Box>
        ));
      case 'size':
        return (
          <Box m="64px 0">
            {checkedUsers.length > 0
              ? renderFilesByCheckedUsers(filterByUsers(sortedBySize))
              : renderFilesByCheckedUsers(sortedBySize)}
          </Box>
        );
      case 'type':
        return extensionList.map((item, index) => (
          <Box m="64px 0" key={index}>
            <Text fontSize="22px" fontWeight="500" color="#656565" mb="27px">
              {item}
            </Text>
            {checkedUsers.length > 0
              ? renderFilesByCheckedUsers(
                  filterByUsers(filterByExtension(item))
                )
              : renderFilesByCheckedUsers(filterByExtension(item))}
          </Box>
        ));
      default:
        return null;
    }
  };
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
                {checkedUsers.length === 0 && <Text>From</Text>}
                {checkedUsers.length === 1 && (
                  <Text>From {checkedUsers[0].nickname}</Text>
                )}
                {checkedUsers.length > 1 && (
                  <Text>{checkedUsers.length}명의 팀원으로부터</Text>
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
                        checkedUsers.map((item, index) => (
                          <Checkbox
                            key={index}
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
                                (dataItem) => dataItem.email === item.email
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
                            {item.nickname}
                          </Checkbox>
                        ))}
                      {searchTerm &&
                        filteredData.map((item, index) => (
                          <Checkbox
                            key={index}
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
                                (dataItem) => dataItem.email === item.email
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
                            {item.nickname}
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
                                (dataItem) =>
                                  dataItem.email === findMyInfo?.email
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchData(updatedData);
                              }
                            }}
                            isChecked={findMyInfo?.checked}
                          >
                            {findMyInfo.nickname}
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
                onClick={() => {
                  setFileType('pic');
                }}
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
          {!switchstate && renderFilesBySortType()}

          {fileList.length > 0 && switchstate && (
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

                {sortBy === 'date' &&
                  filteredFilesOnList('date').map((x, index) => (
                    <FileList
                      key={index}
                      fileName={x.fileName}
                      sharedBy={x.fileMemberUploadName}
                      date={x.createdAt}
                      type={x.fileExtension}
                      size={x.fileSize}
                      src={x.fileUrl}
                    />
                  ))}
                {sortBy === 'name' &&
                  filteredFilesOnList('name').map((x, index) => (
                    <FileList
                      key={index}
                      fileName={x.fileName}
                      sharedBy={x.fileMemberUploadName}
                      date={x.createdAt}
                      type={x.fileExtension}
                      size={x.fileSize}
                      src={x.fileUrl}
                    />
                  ))}
                {sortBy === 'size' &&
                  filteredFilesOnList('size').map((x, index) => (
                    <FileList
                      key={index}
                      fileName={x.fileName}
                      sharedBy={x.fileMemberUploadName}
                      date={x.createdAt}
                      type={x.fileExtension}
                      size={x.fileSize}
                      src={x.fileUrl}
                    />
                  ))}
                {sortBy === 'type' &&
                  filteredFilesOnList('type').map((x, index) => (
                    <FileList
                      key={index}
                      fileName={x.fileName}
                      sharedBy={x.fileMemberUploadName}
                      date={x.createdAt}
                      type={x.fileExtension}
                      size={x.fileSize}
                      src={x.fileUrl}
                    />
                  ))}
              </Box>
            </>
          )}
          {fileList.length === 0 && (
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
