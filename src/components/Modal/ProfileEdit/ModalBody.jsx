import React, { useState, useRef } from 'react';
import { updateProfile } from '@apis/dashboard/updateProfile';
import { changePassword } from '@apis/dashboard/changePassword';
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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';

const EditableField = ({
  label,
  initialValue,
  onChange,
  fontSize = 'md',
  color = '#434343',
  fontWeight = 'normal',
}) => {
  const [value, setValue] = useState(initialValue || '');
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

const UserStatusDisplay = ({ status }) => {
  return (
    <Box>
      <Text fontSize="md">{status}</Text>
    </Box>
  );
};

const ModalBody = ({ profile, onSave, onClose }) => {
  const [editedProfile, setEditedProfile] = useState(profile);
  const [userStatus, setUserStatus] = useState(profile.status);
  const { workSpaceId } = useParams();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (
      editedProfile.newPassword &&
      !passwordRegex.test(editedProfile.newPassword)
    ) {
      alert(
        '비밀번호는 8자리 이상이어야 하며, 최소 하나의 문자와 하나의 숫자를 포함해야 합니다.'
      );
      return;
    }

    if (editedProfile.newPassword !== editedProfile.confirmNewPassword) {
      alert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    try {
      await updateProfile(workSpaceId, {
        workSpaceMemberName: editedProfile.name,
        workSpaceMemberJob: editedProfile.job,
      });

      if (editedProfile.newPassword) {
        await changePassword(editedProfile.newPassword);
        alert('비밀번호가 성공적으로 변경되었습니다.');
      }

      alert('프로필이 성공적으로 업데이트되었습니다.');
      onClose(); // 모달 닫기
    } catch (error) {
      console.error('업데이트 실패:', error);
      alert('업데이트에 실패했습니다. 다시 시도해주세요.');
    }
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

      <Box mt={'40px'}>
        <EditableField
          initialValue={profile.name}
          onChange={(value) => handleFieldChange('name', value)}
          fontSize="24px"
          fontWeight="bold"
        />
      </Box>
      <Box mt={'20px'} mb={'20px'}>
        <EditableField
          initialValue={profile.job || '직무를 입력해주세요'}
          onChange={(value) => handleFieldChange('job', value)}
          fontSize="18px"
          fontWeight="bold"
        />
      </Box>
      <div>
        <UserStatusDisplay status={profile.status} />
      </div>
      <Divider color="#898989" my={5} />
      <Flex>
        <Text color="#434343" fontSize="20px" fontWeight="bold">
          연락처 정보
        </Text>
      </Flex>
      <Box mt={'20px'}>
        <EditableField
          initialValue={profile.email}
          onChange={(value) => handleFieldChange('email', value)}
          fontSize="md"
        />
      </Box>
      <Box mt={'20px'} mb={'20px'}>
        <EditableField
          initialValue={profile.phone}
          onChange={(value) => handleFieldChange('phone', value)}
          fontSize="md"
        />
      </Box>

      <Divider color="#898989" my={5} />
      <Flex>
        <Text color="#434343" fontSize="19px" fontWeight="bold">
          {' '}
          비밀번호 변경
        </Text>
      </Flex>

      <FormControl mt={6}>
        <FormLabel sx={{ color: '#434343' }}> 새로운 비밀번호</FormLabel>
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
      <FormControl mt={3}>
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
