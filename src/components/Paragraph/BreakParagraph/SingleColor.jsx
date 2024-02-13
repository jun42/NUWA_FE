import Span from '../../Span/Span';
import Paragraph from '../Paragraph';

const SingleColor = ({ firstText, secondText, hasColor, spanColor, ...props }) => {
  const renderTextColor = (hasColor) => {
    switch (hasColor) {
      case 'first':
        return (
          <Paragraph {...props}>
            <Span spanColor={spanColor} spanText={firstText} />
            {secondText}
          </Paragraph>
        );
      case 'second':
        return (
          <Paragraph {...props}>
            {firstText}
            <Span spanColor={spanColor} spanText={secondText} />
          </Paragraph>
        );
    }
  };
  return renderTextColor(hasColor);
};

export default SingleColor;
