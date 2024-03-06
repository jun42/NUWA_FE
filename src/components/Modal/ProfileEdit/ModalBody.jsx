import React, { useState, useRef } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Box,
  Divider,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Connecting from '@assets/connecting.png';
import Ban from '@assets/ban.png';
import Sleeping from '@assets/sleeping.png';
import Offline from '@assets/offline.png';
import { ChevronDownIcon } from '@chakra-ui/icons';

const EditableField = ({
  label,
  initialValue,
  onChange,
  fontSize = 'md',
  color = '#434343',
  fontWeight = 'normal',
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleCompleteClick = () => {
    setIsEditing(false); // 편집 모드 종료
    onChange(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <FormControl mt={4}>
      <FormLabel>{label}</FormLabel>
      <Flex justifyContent="space-between" alignItems="center">
        {isEditing ? (
          <>
            <Input
              ref={inputRef}
              value={value}
              onChange={handleChange}
              variant="unstyled"
              flexGrow={1}
              fontSize={fontSize}
              fontWeight={fontWeight}
              border={'1px solid #F2F2F2'}
            />

            <Text
              color="#5d5d60"
              cursor="pointer"
              marginLeft={'20px'}
              onClick={handleCompleteClick}
              sx={{ whiteSpace: 'nowrap' }}
            >
              완료
            </Text>
          </>
        ) : (
          <>
            <Text
              flexGrow={1}
              fontSize={fontSize}
              fontWeight={fontWeight}
              color={color}
            >
              {value}
            </Text>

            <Text
              color="#5d5d60"
              cursor="pointer"
              onClick={() => setIsEditing(true)}
            >
              편집
            </Text>
          </>
        )}
      </Flex>
    </FormControl>
  );
};
const UserStatusSelector = ({ initialStatus = 'active', onSave }) => {
  const [status, setStatus] = useState(initialStatus);

  const handleStatusChange = (nextValue) => {
    setStatus(nextValue);
    onSave(nextValue);
  };

  const statusImages = {
    active: Connecting,
    away: Ban,
    sleeping: Sleeping,
    offline: Offline,
  };

  const statusText = {
    active: '활동 중',
    away: '방해 금지',
    sleeping: '자리 비움',
    offline: '오프라인',
  };

  return (
    <Box>
      <FormControl mt={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Image src={statusImages[status]} boxSize="15px" mr="12px" />
            <Text>{statusText[status]}</Text>
          </Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
              상태 변경
            </MenuButton>
            <MenuList>
              {Object.entries(statusImages).map(([key, imgSrc]) => (
                <MenuItem key={key} onClick={() => handleStatusChange(key)}>
                  <Flex alignItems="center">
                    <Image src={imgSrc} boxSize="15px" mr="12px" />
                    <Text>{statusText[key]}</Text>
                  </Flex>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </FormControl>
    </Box>
  );
};

const ModalBody = ({ profile, onSave }) => {
  const [editedProfile, setEditedProfile] = useState(profile);
  const [userStatus, setUserStatus] = useState(profile.status);

  const [imagePreview, setImagePreview] = useState(profile.image?.url || '');
  const fileInputRef = useRef(null);

  const handleFieldChange = (field, value) => {
    setEditedProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditedProfile((prev) => ({
          ...prev,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFieldSave = (field, value) => {
    onSave({ ...profile, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box textAlign="center" py={5}>
        <Image
          src={imagePreview || 'https://via.placeholder.com/100'}
          boxSize="100px"
          borderRadius="full"
          mx="auto"
          cursor="pointer"
          onClick={triggerFileInput}
        />
        <Input
          ref={fileInputRef}
          type="file"
          onChange={handleImageChange}
          hidden
        />
      </Box>

      <EditableField
        initialValue={profile.name}
        onChange={(value) => handleFieldChange('name', value)}
        fontSize="24px"
        fontWeight="bold"
      />

      <EditableField
        initialValue={profile.position}
        onSave={(value) => handleFieldSave('position', value)}
        fontSize="md"
        fontWeight="bold"
      />
      <div>
        <UserStatusSelector
          userStatus={userStatus}
          setUserStatus={setUserStatus}
        />
      </div>
      <Divider color="#898989" my={5} />
      <Flex>
        <Text color="#434343" fontSize="19px" fontWeight="bold">
          연락처 정보
        </Text>
      </Flex>
      <EditableField
        initialValue={profile.email}
        onSave={(value) => handleFieldSave('email', value)}
        fontSize="md"
      />
      <EditableField
        initialValue={profile.phone}
        onSave={(value) => handleFieldSave('phone', value)}
        fontSize="md"
      />

      <Divider color="#898989" my={5} />
      <Flex>
        <Text color="#434343" fontSize="19px" fontWeight="bold">
          {' '}
          비밀번호 변경
        </Text>
      </Flex>

      <FormControl mt={5}>
        <FormLabel sx={{ color: '#434343' }}>현재 비밀번호</FormLabel>
        <Input
          name="currentPassword"
          type="password"
          value={editedProfile.currentPassword || ''}
          placeholder="현재 비밀번호 입력"
          borderRadius="full"
          borderColor="#d6d6d6"
          onChange={(e) =>
            setEditedProfile({
              ...editedProfile,
              currentPassword: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel sx={{ color: '#434343' }}>새로운 비밀번호</FormLabel>
        <Input
          name="newPassword"
          type="password"
          value={editedProfile.newPassword || ''}
          placeholder="새 비밀번호 입력"
          borderRadius="full"
          borderColor="#d6d6d6"
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, newPassword: e.target.value })
          }
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel sx={{ color: '#434343', fontWeight: 'nomal' }}>
          새로운 비밀번호 확인
        </FormLabel>
        <Input
          name="confirmNewPassword"
          type="password"
          value={editedProfile.confirmNewPassword || ''}
          placeholder="새 비밀번호 확인"
          borderRadius="full"
          borderColor="#d6d6d6"
          onChange={(e) =>
            setEditedProfile({
              ...editedProfile,
              confirmNewPassword: e.target.value,
            })
          }
        />
      </FormControl>

      <Button
        mt={6}
        bgColor="#575DF8"
        color="white"
        borderRadius="full"
        width="full"
        type="submit"
      >
        수정하기
      </Button>
    </form>
  );
};

export default ModalBody;
