import { useEffect, useState } from 'react';
import search from '@assets/search.svg';
import nofile from '@assets/nofile.png';

import {
  Button,
  ButtonGroup,
  Flex,
  Box,
  Text,
  Image,
  Divider,
  Center,
  Input,
  Checkbox,
} from '@chakra-ui/react';

import GridSwitch from '@components/Switch/GridSwitch.jsx';
import { getAllFiles, getSearchedFiles, deleteFile } from '@apis/files/files';
import { useParams } from 'react-router-dom';
import {
  useMyInfoQuery,
  useWorkSpaceMemberListQuery,
} from '@queries/workSpace/workSpaceMemberList';
import { renderFilesBySortTypeList } from './renderingFilesByList.jsx';
import { sortFiles } from './sortFiles.jsx';
import renderingFilesByGrid from './renderingFilesByGrid.jsx';
import { getFilesByType } from './getFiles.jsx';
import TypeSelectButton from '@components/Button/TypeSelectButton';
import SortSelectButton from './../../components/Button/SortSelectButton';

const Files = () => {
  const { workSpaceId } = useParams();
  const [switchstate, setSwitchstate] = useState(false);
  const handleChange = () => {
    setSwitchstate((prev) => !prev);
  };

  const members = useWorkSpaceMemberListQuery(workSpaceId);
  const myInfo = useMyInfoQuery(workSpaceId);

  const addCheckedList = members.memberList?.map((item) => ({
    ...item,
    checked: false,
  }));

  const [fileType, setFileType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isOpen, setIsOpen] = useState(false);

  const [fileList, setFileList] = useState([]);

  const [currentPage, setCurrentPage] = useState([]);
  const filesPerPage = 10;

  const [searchTerm, setSearchTerm] = useState('');

  const [fileSearchWord, setFileSearchWord] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        // getAllFiles 함수를 사용하여 파일을 가져옵니다.
        const files = await getAllFiles({ workSpaceId });
        // 가져온 파일 목록을 fileList로 설정합니다.
        setFileList(files.data.data.content);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchFiles();
  }, []);

  const [searchUsers, setSearchUsers] = useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (
      members.memberList &&
      members.memberList.length > 0 &&
      searchUsers.length === 0
    ) {
      setSearchUsers(addCheckedList);
    }
  }, [members.memberList, searchUsers, addCheckedList]);

  const filteredUsers = searchUsers.filter((item) =>
    item.nickname.includes(searchTerm)
  );
  const checkedUsers = searchUsers.filter((item) => item.checked === true);

  const findMyInfo = searchUsers.find((item) => {
    return item.email === myInfo?.myInfo?.email;
  });

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

  useEffect(() => {
    setCurrentPage([]);
    if (switchstate) setCurrentPage(0);
  }, [sortBy, switchstate]);

  //파일 검색

  const handleSearchWordChange = (e) => {
    setFileSearchWord(e.target.value);
  };
  const searchFiles = async () => {
    const searchedFiles = await Promise.resolve(
      getSearchedFiles({ workSpaceId, fileName: fileSearchWord })
    );
    if (searchedFiles.data.data.content.length > 0)
      setFileList(searchedFiles.data.data.content);
    else setFileList([]);
    console.log('검색어:', fileSearchWord);
    console.log(fileList);
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchFiles();
    }
  };
  useEffect(() => {
    if (fileSearchWord === '') {
      const fetchFiles = async () => {
        try {
          const files = await getAllFiles({ workSpaceId });
          setFileList(files.data.data.content);
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      };
      fetchFiles();
    }
  }, [fileSearchWord]);

  //파일 삭제
  // useEffect(() => {
  //   deleteFile({ fileId: 13 });
  // }, []);
  //날짜 순 정렬
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
            value={fileSearchWord}
            onChange={handleSearchWordChange}
            onKeyDown={handleSearchKeyDown}
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
                              const updatedData = [...searchUsers];
                              const dataIndex = searchUsers.findIndex(
                                (dataItem) => dataItem.email === item.email
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchUsers(updatedData);
                              }
                            }}
                            isChecked={item.checked}
                          >
                            {item.nickname}
                          </Checkbox>
                        ))}
                      {searchTerm &&
                        filteredUsers.map((item, index) => (
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
                              const updatedData = [...searchUsers];
                              const dataIndex = searchUsers.findIndex(
                                (dataItem) => dataItem.email === item.email
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchUsers(updatedData);
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
                              const updatedData = [...searchUsers];
                              const dataIndex = searchUsers.findIndex(
                                (dataItem) =>
                                  dataItem.email === findMyInfo?.email
                              );
                              if (dataIndex !== -1) {
                                updatedData[dataIndex] = {
                                  ...updatedData[dataIndex],
                                  checked: e.target.checked,
                                };
                                setSearchUsers(updatedData);
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
              <TypeSelectButton
                fileType={fileType}
                setFileType={setFileType}
                getFilesByType={getFilesByType}
                text="모든 파일"
                type="all"
                workSpaceId={workSpaceId}
                setFileList={setFileList}
              />
              <TypeSelectButton
                fileType={fileType}
                setFileType={setFileType}
                getFilesByType={getFilesByType}
                text="사진"
                type="pic"
                workSpaceId={workSpaceId}
                setFileList={setFileList}
              />
              <TypeSelectButton
                fileType={fileType}
                setFileType={setFileType}
                getFilesByType={getFilesByType}
                text="파일"
                type="file"
                workSpaceId={workSpaceId}
                setFileList={setFileList}
              />
              <TypeSelectButton
                fileType={fileType}
                setFileType={setFileType}
                getFilesByType={getFilesByType}
                text="ZIP"
                type="zip"
                workSpaceId={workSpaceId}
                setFileList={setFileList}
              />
              <TypeSelectButton
                fileType={fileType}
                setFileType={setFileType}
                getFilesByType={getFilesByType}
                text="PDF"
                type="pdf"
                workSpaceId={workSpaceId}
                setFileList={setFileList}
              />
            </ButtonGroup>

            <Divider
              orientation="vertical"
              m="0 24px"
              border="1px"
              opacity="10%"
            />
            <ButtonGroup gap="4px">
              <SortSelectButton
                sortBy={sortBy}
                setSortBy={setSortBy}
                text="날짜 순"
                type="date"
              />
              <SortSelectButton
                sortBy={sortBy}
                setSortBy={setSortBy}
                text="이름 순"
                type="name"
              />
              <SortSelectButton
                sortBy={sortBy}
                setSortBy={setSortBy}
                text="크기 순"
                type="size"
              />
              <SortSelectButton
                sortBy={sortBy}
                setSortBy={setSortBy}
                text="유형 순"
                type="type"
              />
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
          {!switchstate &&
            (checkedUsers.length === 0 ||
              (checkedUsers.length > 0 &&
                filterByUsers(sortFiles(sortBy, fileList)).length > 0)) &&
            renderingFilesByGrid(
              sortBy,
              fileList,
              currentPage,
              setCurrentPage,
              switchstate,
              checkedUsers,
              filesPerPage,
              filterByUsers
            )}

          {fileList.length > 0 && switchstate && (
            <>
              {(checkedUsers.length === 0 ||
                (checkedUsers.length > 0 &&
                  filterByUsers(sortFiles(sortBy, fileList)).length > 0)) && (
                <>
                  <Flex>
                    <Text
                      w="52%"
                      align="center"
                      fontSize="14px"
                      fontWeight="600"
                    >
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
                </>
              )}
              <Box>
                {renderFilesBySortTypeList(
                  sortBy,
                  fileList,
                  filesPerPage,
                  switchstate,
                  currentPage,
                  setCurrentPage,
                  checkedUsers,
                  filterByUsers
                )}
              </Box>
            </>
          )}
          {(fileList.length === 0 ||
            (checkedUsers.length > 0 &&
              filterByUsers(sortFiles(sortBy, fileList)).length === 0)) && (
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
