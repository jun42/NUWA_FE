import { Link } from 'react-router-dom';
import Image from '@components/Image/Image';
import CreateWorkspaceImg from '@assets/create_workspace.png';
import { StWrap, ButtonWrap } from '@components/Wrap/StWrap';
import SingleColor from '@components/Paragraph/BreakParagraph/SingleColor';
import Paragraph from '@components/Paragraph/Paragraph';
import LinkButton from '@components/Button/LinkButton';

const Create = () => {
  return (
    <>
      <Image src={CreateWorkspaceImg} alt="create-workspace" />
      <StWrap>
        <SingleColor
          fontWeight={600}
          fontSize={32}
          firstText="zzhong002님"
          secondText=" 환영합니다!"
          hasColor="second"
          spanColor="#575DFB"
        />
        <Paragraph color="#242424" size={16} opacity="80%">
          새로운 워크스페이스를 생성하시겠어요?
        </Paragraph>
        <ButtonWrap>
          <LinkButton
            rounded={100}
            bg={'#5158FFCC'}
            color={'#fff'}
            w={'100%'}
            toPath="agreement"
            buttonText="생성하기"
          />
          <Paragraph>
            다른 이메일로 {' '}
            <Link to="/login">로그인하기</Link>
          </Paragraph>
        </ButtonWrap>
      </StWrap>
    </>
  );
};

export default Create;
