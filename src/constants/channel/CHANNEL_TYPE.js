import chatIcon from '@assets/channel/chat_icon.svg';
import soundIcon from '@assets/channel/sound_icon.svg';
import openLockIcon from '@assets/channel/open_lock.svg';
import closeLockIcon from '@assets/channel/close_lock.svg';

export const CHANNEL_TYPE = [
  {
    id: 1,
    value: 'chat',
    label: '채팅채널',
    description: '파일, 이미지, TEXT를 통해 팀원에게 정보를 전달하세요.',
    icon: chatIcon,
  },
  {
    id: 2,
    value: 'audio',
    label: '음성채널',
    description: '음성, 영상, 화상으로 팀원과 소통하세요.',
    icon: soundIcon,
  },
];

export const CHANNEL_OPEN_TYPE = [
  {
    id: 1,
    value: 'public',
    label: '공개',
    description: '워크스페이스의 누구나 이용가능합니다.',
    icon: openLockIcon,
  },
  {
    id: 2,
    value: 'private',
    label: '비공개',
    description: '워크스페이스의 특정인원만 이용가능합니다.',
    icon: closeLockIcon,
  },
];
