import { StSection } from '@components/Section/StSection';
import Image from '@components/Image/Image';
import CreateWorkspaceImg from '@assets/create_workspace.png';
import { StWrap, ButtonWrap } from '@components/Wrap/StWrap';
import StText from '@components/Text/StText';
import { Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';


const CreateWorkspace = () => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate('agreement')
    }
  return (
    <StSection>
      <Image src={CreateWorkspaceImg} alt="create-workspace" />
      <StWrap>
        <div>
          <StText $color="grey700" $weight={600} $size={32}>
            zzhong002
          </StText>
          <StText $weight={600} $size={32}>
            님
          </StText>
          <StText $color="primary400" $weight={600} $size={32}>
            {' '}
            환영합니다!
          </StText>
        </div>
        <StText $color="grey700" $size={16} $opacity="80%">
          새로운 워크스페이스를 생성하시겠어요?
        </StText>
        <ButtonWrap>
          <Button rounded={100} bg={'#5158FFCC'} color={'#fff'} w={'100%'} onClick={handleButtonClick  }>
            생성하기
          </Button>
          <div>
            <StText>다른 이메일로</StText>{" "}
            <Link to="/login">로그인하기</Link>
          </div>
        </ButtonWrap>
      </StWrap>
    </StSection>
  );
};

export default CreateWorkspace;
