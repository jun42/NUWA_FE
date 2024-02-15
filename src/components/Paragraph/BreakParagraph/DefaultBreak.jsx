import Paragraph from '../Paragraph';

const DefaultBreak = ({ firstText, secondText, ...props }) => {
  return (
    <Paragraph {...props}>
      {firstText}
      <br />
      {secondText}
    </Paragraph>
  );
};

export default DefaultBreak;
