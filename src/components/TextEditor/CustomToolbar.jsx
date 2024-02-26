import { Divider } from '@chakra-ui/react';
import BoldImage from '@assets/textEditor/bold.svg';
import ItalicImage from '@assets/textEditor/italic.svg';
import StrikeThroughImage from '@assets/textEditor/strikethrough.svg';
import LinkImage from '@assets/textEditor/link.svg';
import NumberListImage from '@assets/textEditor/number-list.svg';
import BulletListImage from '@assets/textEditor/bullet-list.svg';
// import CodeImage from '../../assets/textEditor/code.svg';
import CodeBlockImage from '@assets/textEditor/code-block.svg';
import './CustomToolbar.css';
const CustomToolBar = () => {
  return (
    <div className="toolbar-top__container">
      <div className="toolbar-top toolbar">
        {/* <button className="ql-bold" /> */}

        <ToolBarIcon className="ql-bold" src={BoldImage} />
        <ToolBarIcon className="ql-italic" src={ItalicImage} />
        <ToolBarIcon className="ql-strike" src={StrikeThroughImage} />

        <ToolBarDevider />

        <ToolBarIcon className="ql-link" src={LinkImage} />

        <ToolBarDevider />

        <ToolBarIcon
          className="ql-list"
          value="ordered"
          src={NumberListImage}
        />
        <ToolBarIcon className="ql-list" value="bullet" src={BulletListImage} />

        <ToolBarDevider />

        {/* <ToolBarIcon src={CodeImage} /> */}
        <ToolBarIcon className="ql-code-block" src={CodeBlockImage} />
      </div>
    </div>
  );
};

export default CustomToolBar;

const ToolBarIcon = ({ src, className, ...props }) => {
  return (
    <button className={`toolbar-top__icon ${className}`} {...props}>
      <img src={src} />
    </button>
  );
};
const ToolBarDevider = () => {
  return <Divider orientation="vertical" height={'25px'} />;
};
