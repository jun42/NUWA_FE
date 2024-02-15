import { Button, Flex } from '@chakra-ui/react';
import TextInput from '@components/Input/TextInput';
import { useRef } from 'react';
const CopyLink = ({ linkAdress }) => {
  const copyLinkRef = useRef();
  const copyTextUrl = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();

    navigator.clipboard.writeText(copyLinkRef.current.value).then(() => {
      alert('링크를 복사했습니다.');
    });
  };
  return (
    <Flex
      alignContent="center"
      rounded="50px"
      border="2px"
      w="400px"
      h="46px"
      borderColor="#5158FF"
      p="6px"
    >
      <TextInput
        borderColor="transparent"
        w="100%"
        h="28px"
        focusBorderColor="transparent"
        value={linkAdress}
        ref={copyLinkRef}
      />
      <Flex justifyContent="flex-end">
        <Button rounded="50px" h="30px" fontSize="12px" onClick={copyTextUrl}>
          링크복사
        </Button>
      </Flex>
    </Flex>
  );
};

export default CopyLink;
