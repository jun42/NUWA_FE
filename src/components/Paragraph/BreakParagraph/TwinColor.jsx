import Paragraph from '../Paragraph';

const TwinColor = ({ firstText, secondText }) => {
  return (
    <Paragraph>
      {firstText}
      <br />
      {secondText}
    </Paragraph>
  );
};

export default TwinColor;
