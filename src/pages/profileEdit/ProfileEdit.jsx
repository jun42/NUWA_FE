import  { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image } from "@chakra-ui/react"



const ProfileEdit = ( { isOpen, onClose, profile, handleChange, handleSave }) => {

 



  const handleSaveClick = () => {
    alert("프로필 정보가 업데이트 되었습니다.");
 
    
  //API 로직 구현해야됨
  
  onClose();
  }

  const [selectedImage, setSelectedImage ] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader =new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSave =() => {

    //api 구현해야함

    handleSave(profile, selectedImage);
    onClose();

  };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
        <ModalContent>
          <ModalHeader>프로필 편집</ModalHeader>
          <ModalCloseButton/>
            <ModalBody>
              <FormControl>
                <FormLabel>프로필 이미지</FormLabel>
                <Input type= "file" accept="image/*"  onChange={handleImageChange}/>
                {selectedImage && <Image src={selectedImage} alt="프로필 이미지 미리보기" boxSize="100px" />}

              </FormControl>
              <FormControl>
                <FormLabel>Name </FormLabel>
                <Input name="name" value={profile.name} onChange={handleChange} />

              </FormControl>
              <FormControl mt={4}
              ><FormLabel>Position</FormLabel>
              <Input name="position" value={profile.position}  onChange={handleChange}/>
              </FormControl>

              <FormControl mt={4}
              ><FormLabel>Email</FormLabel>
              <Input name="email" value={profile.email} onChange={handleChange}/>
              </FormControl>

              <FormControl mt={4}
              ><FormLabel>Phone</FormLabel>
              <Input name="phone" value={profile.phone} onChange={handleChange} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onSave}>저장</Button>
              <Button colorScheme="teal" onClick={onClose}>취소</Button>
            </ModalFooter>


        </ModalContent>
   </Modal>
  )
}

export default ProfileEdit