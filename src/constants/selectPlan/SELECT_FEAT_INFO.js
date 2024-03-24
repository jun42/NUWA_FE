import KanbanBoard from '@assets/kanban_board.png';
import Calen from '@assets/calen.png';
import TodoList from '@assets/todolist.png';
import CircleOne from '@assets/circle_one.png';
import CircleTwo from '@assets/circle_two.png';
import CircleThree from '@assets/circle_three.png';

import FeatCardImage1 from '@assets/feat_card1.png';
import FeatCardImage2 from '@assets/feat_card2.png';
import FeatCardImage3 from '@assets/feat_card3.png';

export const SELECT_FEAT_INFO = [
  {
    HeaderText: '업무 방식을 체계화하여\n일을 더 빠르게\n진행해 보세요',
    SubText:
      'NUWA에서 생산성을 높이는 핵심 포인트는 채널이라는 체계화된 공간인데, 이는 당신이 일해온 방식과는 전혀 다릅니다. 주제와 관련된 모든 사람, 메세지, 파일이 한곳에 모여있어 업무를 획기적으로 빠르게 진행할 수 있습니다.',
    TextLink: '채널에 대해 자세히 알아보기',
    Image: FeatCardImage1,
  },
  {
    HeaderText: '팀워크를 더 간편하게\n만들어주세요',
    SubText:
      '직장 동료나 외부 파트너에게 더 생산적으로 협업할 수 있는 방법을 제공하세요. 이모티콘으로 더 빠르게 응답하고 채널을 중심으로 대화함으로써 모든 커뮤니 케이션이 한 곳에서 간편하게 이루어집니다.',
    TextLink: 'NUWA에서 외부 파트너와 협업하는 방법 알아보기',
    Image: FeatCardImage2,
  },
  {
    HeaderText: '자신의 방식대로\n시간에 집중하세요',
    SubText:
      '당신이 업무 효율을 가장 높일 수 있는 때와 장소, 방식에 유연성을 가질 수 있습니다. 알림 뿐 아니라 협업할 시간과 혼자 집중할 시간을 제어하며, 회사 에서 이루어지는 대화에서 해답을 찾을 수 있습니다',
    TextLink: 'NUWA로 더 유연한 업무 스케줄 지원하기',
    Image: FeatCardImage3,
  },
];

export const Feat_link_card = [
  {
    HeaderText: 'NUWA의 사용법과 기능에 대해서 알아보세요',
    Icon: '📝',
    LinkText: '기능 알아보기',
  },
  {
    HeaderText: 'NUWA를 사용 중인 분들의 이야기를 만나 보세요',
    Icon: '🙋🏻‍♀️',
    LinkText: '스토리 읽기',
  },
  {
    HeaderText: '당신의 팀에 어떤 도움을 주는지 알아보세요',
    Icon: '✍🏻',
    LinkText: '솔루션 살펴보기',
  },
  {
    HeaderText: '초보자를 위한 가이드를 지금 만나 보세요',
    Icon: '💡',
    LinkText: '방법 알아보기',
  },
];

export const Sub_Feat = [
  {
    Image: KanbanBoard,
    Icon: CircleOne,
    MainText: '칸반보드로 업무를\n한 눈에 확인!',
  },
  {
    Image: Calen,
    Icon: CircleTwo,
    MainText: '개인적인 일정은 물론\n업무 효율 캘린더',
  },
  {
    Image: TodoList,
    Icon: CircleThree,
    MainText: '하루의 계획을\n작성해 보세요',
  },
];

export const FAQ_text = [
  {
    QuestionText: '워크스페이스 아이콘 이미지는 어디서 변경하면 되나요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText: '비밀번호는 어디서 수정하나요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText:
      '슬랙에 스레드와 NUWA의 스레드는 다른 것 같은데 다른 점이 뭔가요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText: '대쉬보드 내용은 변경 할 수 없나요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText: '무료버전과 유료버전의 차이점이 뭔가요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText: '채팅창에서 음성채팅을 하는 경우 화면공유는 할 수 없나요?',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },

  {
    QuestionText: '개발자 코드를 이쁘게 작성하고 싶어요!',
    AnswerText:
      'NUWA 대쉬보드에 접속 후 사이드 바 프로필 상단 워크스페이스 이름을 클릭하시면 워크스페이스 이름 수정과 아이콘 변경하는 창이 나옵니다.',
  },
];
