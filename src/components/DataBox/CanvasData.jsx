import React from 'react';
import { Box, Text, Flex, Image, CloseButton } from '@chakra-ui/react';
import CanvasIcon from '@assets/white_canvas.svg';

const CanvasData = ({
  canvasId,
  title,
  date,
  name,
  workSpaceId,
  deleteMutation,
}) => {
  const handleDelete = () => {
    deleteMutation.mutate({ workSpaceId, canvasId });
  };

  return (
    <Box
      display="flex"
      gap="10px"
      border="1px solid grey"
      padding="12px"
      borderRadius="10px"
      alignItems="center"
    >
      <Box
        boxSize="42px"
        borderRadius="8px"
        bgColor="#575DFB"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={CanvasIcon} width="25px" stroke="#ffffff" />
      </Box>
      <Flex flexFlow="column" justify="center" width="100%">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="10px">
            <Text fontSize="16px" fontWeight="500">
              {title}
            </Text>
            <Text fontSize="12px" fontWeight="500" color="#D9D9D9">
              {date}
            </Text>
          </Flex>
          <CloseButton boxSize="10px" mr="10px" onClick={handleDelete} />
        </Flex>
        <Flex align="center">
          <Text fontSize="12px" fontWeight="500" color="#575DFB">
            생성한 사람: {name}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CanvasData;
