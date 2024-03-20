import { Box, Center, Checkbox, Flex, Input } from '@chakra-ui/react';
import React from 'react';

const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

export const UserSearchModal = (setIsOpen, searchTerm, setSearchTerm, checkedUsers, searchUsers, setSearchUsers, filteredUsers, findMyInfo) => {
  return (
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
                    (dataItem) => dataItem.email === findMyInfo?.email
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
  );
};

export default UserSearchModal;
