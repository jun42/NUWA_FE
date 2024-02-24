import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text, Button, Image, useDisclosure } from '@chakra-ui/react';
import Exclude from '@assets/Exclude.png';
import OutletSearchBar from '@components/SearchBar/OutletSearchBar';
import GreySort from '@components/Button/GreySort';
import CanvasData from '@components/DataBox/CanvasData';
import { canvas_data } from '@constants/selectPlan/SELECT_ALL_INFO';
import NotCanvasData from '@components/DataBox/NotCanvasData';
import CanvasModal from '@components/Modal/CanvasModal/index.jsx';
import useModal from '@hooks/useModal';
import WorkSpaceModalEdit from '@components/Modal/WorkspaceEdit';
const Canvas = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Stcontainer>
      <Flex justify={'space-between'} align={'center'} width={'100%'}>
        <Text fontSize={'40px'} fontWeight={'700'}>
          캔버스
        </Text>
        <Button
          className={'apple'}
          leftIcon={<Image src={Exclude} boxSize="20px" />}
          colorScheme="blue"
          variant="solid"
          onClick={onOpen}
        >
          새 캔버스
        </Button>
      </Flex>

      <OutletSearchBar />

      <Flex justify={'flex-end'} gap={'10px'}>
        <GreySort label="필터" />
        <GreySort label="정렬" />
      </Flex>
      {/* <WorkSpaceModalEdit /> */}
      {/* <StateModal /> */}
      <CanvasModal isOpen={isOpen} onClose={onClose} />
      <DataContainer>
        {canvas_data.length > 0 ? (
          canvas_data.map((data, index) => (
            <CanvasData key={index} name={data.name} date={data.date} />
          ))
        ) : (
          <NotDataSection>
            <NotCanvasData />
          </NotDataSection>
        )}
      </DataContainer>
    </Stcontainer>
  );
};

export default Canvas;

const Stcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 50px;
`;

const DataContainer = styled.div`
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`;

const NotDataSection = styled.div`
  height: 100%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
