import DefaultBreak from '@components/Paragraph/BreakParagraph/DefaultBreak';
import Paragraph from '@components/Paragraph/Paragraph';

const Work = () => {
  return (
    <>
      <DefaultBreak
        fontSize="2xl"
        fontWeight="700"
        firstText="현재 팀은 어떤 업무를"
        secondText="진행하고 있나요?"
      />
      <Paragraph>NUWA에서  자유롭게 업무 협력하세요.</Paragraph>
    </>
  );
};

export default Work;
