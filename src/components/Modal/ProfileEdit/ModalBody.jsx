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
  RadioGroup,
  Radio,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const EditableField = ({
  label,
  initialValue,
  onSave,
  fontSize = 'md',
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onSave(value);
  };

  return (
    <FormControl mt={4}>
      <FormLabel>{label}</FormLabel>
      <Flex justifyContent="space-between" alignItems="center">
        {isEditing ? (
          <Input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="unstyled"
            flexGrow={1}
          />
        ) : (
          <>
            <Text flexGrow={1} fontSize={fontSize} fontWeight={fontWeight}>
              {value}
            </Text>

            <Text color="blue.500" cursor="pointer" onClick={handleEditClick}>
              편집
            </Text>
          </>
        )}
      </Flex>
    </FormControl>
  );
};

const UserStatusSelector = ({ initialStatus, onSave }) => {
  const [status, setStatus] = useState(initialStatus);
  // const [isEditing, setIsEditing] = useState(false);

  const handleStatusChange = (nextValue) => {
    setStatus(nextValue);
    onSave(nextValue);
    // setIsEditing(false);
  };

  return (
    <Box>
      <FormControl mt={4}>
        <FormLabel>현재 상태</FormLabel>
        <Flex justifyContent="space-between" alignItems="center">
          <Text mb={4}>{status === 'active' ? '활동 중' : '자리 비움'}</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
              상태변경
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleStatusChange('active')}>
                활동중
              </MenuItem>
              <MenuItem onClick={() => handleStatusChange('away')}>
                자리 비움
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </FormControl>
    </Box>
  );
};

const ModalBody = ({ profile, onSave }) => {
  const [editedProfile, setEditedProfile] = useState(profile);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditedProfile((prev) => ({
          ...prev,
          image: { ...prev.image, url: reader.result },
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
      <Box textAlign="center" py={8}>
        <Image
          src={editedProfile.image?.url || 'https://via.placeholder.com/100'}
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
        onSave={(value) => handleFieldSave('name', value)}
        fontSize="24px"
        fontWeight="bold"
      />
      <EditableField
        initialValue={profile.position}
        onSave={(value) => handleFieldSave('position', value)}
        fontSize="md"
      />
      <form>
        <UserStatusSelector
          initialStatus={profile.status}
          onSave={(newStatus) =>
            onSave({ ...editedProfile, status: newStatus })
          }
        />
      </form>
      <Divider my={4} />
      <Flex>
        <Text>연락처 정보</Text>
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

      <Divider my={4} />
      <Flex>
        <Text> 비밀번호 변경</Text>
      </Flex>

      <FormControl mt={5}>
        <FormLabel>Current Password</FormLabel>
        <Input
          name="currentPassword"
          type="password"
          value={editedProfile.currentPassword || ''}
          borderRadius="full"
          onChange={(e) =>
            setEditedProfile({
              ...editedProfile,
              currentPassword: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>New Password</FormLabel>
        <Input
          name="newPassword"
          type="password"
          value={editedProfile.newPassword || ''}
          borderRadius="full"
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, newPassword: e.target.value })
          }
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Confirm New Password</FormLabel>
        <Input
          name="confirmNewPassword"
          type="password"
          value={editedProfile.confirmNewPassword || ''}
          borderRadius="full"
          onChange={(e) =>
            setEditedProfile({
              ...editedProfile,
              confirmNewPassword: e.target.value,
            })
          }
        />
      </FormControl>

      <Button
        mt={10}
        colorScheme="blue"
        borderRadius="full"
        width="full"
        type="submit"
      >
        Save Changes
      </Button>
    </form>
  );
};

export default ModalBody;
