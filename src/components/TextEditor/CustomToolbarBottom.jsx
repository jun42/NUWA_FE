import './CustomToolbarBottom.css';
import EmojiIcon from '@assets/textEditor/emoji-1.svg';
import FormattingIcon from '@assets/textEditor/formatting.svg';
import MentionIcon from '@assets/textEditor/mention.svg';
import SendIcon from '@assets/textEditor/send-fill.svg';

const CustomToolbarBottom = ({ setEmojiPickerIsOpen }) => {
  return (
    <div className="ql-toolbar ql-snow ql-bottom toolbar-bottom">
      {/*TODO  + 버튼 */}
      {/* hide formatting show formatting button */}
      <button
        className="toolbar-bottom__icon"
        onClick={() => {
          setEmojiPickerIsOpen((state) => !state);
        }}
      >
        <img src={EmojiIcon} alt="이모지 아이콘" />
      </button>
      {/* 이모지 버튼 */}
      <button className="toolbar-bottom__icon">
        <img src={FormattingIcon} alt="포매팅 아이콘" />
      </button>
      {/* 멘션 버튼 */}
      <button className="toolbar-bottom__icon">
        <img src={MentionIcon} alt="멘션 아이콘" />
      </button>
      <button id="send-button">
        <img src={SendIcon} alt="" />
      </button>
    </div>
  );
};
export default CustomToolbarBottom;
/* <IconButton
        icon={<GrSend size={'1.5rem'} />}
        colorScheme="secondary"
        rounded={'full'}
        px={'1.5rem'}
      /> */
