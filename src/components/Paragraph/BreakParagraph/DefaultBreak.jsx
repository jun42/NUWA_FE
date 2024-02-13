import Paragraph from '../Paragraph';

const DefaultBreak = ({ firstText, secondText }) => {
  return (
    <Paragraph>
      {firstText}
      <br />
      {secondText}
    </Paragraph>
  );
};

export default DefaultBreak;
