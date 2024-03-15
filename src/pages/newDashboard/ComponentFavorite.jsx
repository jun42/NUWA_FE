import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import AddUserIcon from '@assets/adduser_icon.svg';
import FavoriteCallIcon from '@assets/d_greencall.svg';
import FavoriteMessageIcon from '@assets/d_basecolor_message.svg';
import FavoriteCancelIcon from '@assets/d_red_cancel.svg';
import { useParams } from 'react-router-dom';
import { favoriteMembers } from '../../apis/dashboard/favoriteMembers';

const ComponentFavorite = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const { workSpaceId } = useParams();

  useEffect(() => {
    const loadFavoriteTeamMembers = async () => {
      try {
        const response = await favoriteMembers(workSpaceId);
        if (response.data.status === 'success') {
          setTeamMembers(response.data.data);
        } else {
          console.error('즐겨찾는 팀원 정보를 불러오는 데 실패했습니다.');
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadFavoriteTeamMembers();
  }, [workSpaceId]);
  return (
    <>
      <Flex
        borderTopRadius={'10px'}
        display={'flex'}
        p={'10px 15px'}
        align={'center'}
        height={'10%'}
        bg={'#F5F5F5'}
        gap={'10px'}
      >
        <Image src={AddUserIcon} />
        <Text fontSize="16px" fontWeight="bold" align={'center'}>
          즐겨찾기에 저장 된 팀원
        </Text>
      </Flex>
      <Flex flexFlow={'column'} height={'90%'}>
        <Flex justify={'space-evenly'} height={'100%'} alignItems={'center'}>
          {teamMembers.length > 4 && (
            <IconButton
              aria-label="Scroll left"
              icon={<ArrowLeftIcon />}
              bg="#FFFFFF"
              color="#D6D6D6"
              hover={{ color: '#FFFFFF' }}
            />
          )}
          {teamMembers.slice(0, 4).map((member) => (
            <Flex
              key={member.id}
              flexFlow={'column'}
              align={'center'}
              width={'20%'}
              height={'80%'}
              padding={'24px 32px'}
              justifyContent={'center'}
              alignItems={'center'}
              borderRadius={'12px'}
              gap={'22px'}
              border={'2px solid #D6D6D6'}
            >
              <Image
                src={member.image}
                alt={member.name}
                boxSize="110px"
                borderRadius="full"
              />
              <Flex flexFlow={'column'} alignItems={'center'}>
                <Text fontWeight="bold">{member.name}</Text>
                <Text fontSize="sm">{member.job || '정보없음'}</Text>
              </Flex>
              <Flex flexFlow={'column'} alignItems={'center'}>
                <Text fontSize="sm">{member.email}</Text>
                <Text fontSize="sm" paddingTop={''}>
                  {member.phoneNumber}
                </Text>
              </Flex>
              <Flex gap={'10px'}>
                <Image src={FavoriteCallIcon} />
                <Image src={FavoriteMessageIcon} />
                <Image src={FavoriteCancelIcon} />
              </Flex>
            </Flex>
          ))}
          {teamMembers.length > 4 && (
            <IconButton
              aria-label="Scroll right"
              icon={<ArrowRightIcon />}
              bg="#FFFFFF"
              color="#D6D6D6"
              //_hover={{ color: '#FFFFFF' }}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default ComponentFavorite;
