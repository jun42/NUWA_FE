import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import CustomToolbarBottom from '../TextEditor/CustomToolbarBottom';
import { myOptions as options } from './quill/customOptions';
import EmojiPicker from 'emoji-picker-react';
import { useParams } from 'react-router-dom';
import { sendQuillDataHandler } from './quill/utils';
// Editor is an uncontrolled React component

const mockImage =
  'https://naverpa-phinf.pstatic.net/MjAyNDAxMzBfMjk1/MDAxNzA2NTg2OTA3Mzcx.Ja4USdi1fiCnmiSGrU_AIu5tEvL6hkcYCub6gF3wihIg.2qUBRJH4l6Od3IXOYlpvqC00BtBsrZy-yRY5tydtCP0g.PNG/240130_%EC%A0%9D%EC%8B%9C%EB%AF%B9%EC%8A%A4_%EC%8A%88%EC%A6%88_GFA_PC_1_17065869073464493578094502823399.png';

const Editor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      onTextChange,
      onSelectionChange,
      emojiPickerIsOpen,
      setEmojiPickerIsOpen,
      publish,
      channelId,
    },
    ref
  ) => {
    const { workSpaceId } = useParams();

    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    //todo 빈값 안보내기
    const handleSendMessage = () => {
      sendQuillDataHandler(ref.current, publish);
    };

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div')
      );

      options.externalLayer = {
        workSpaceId,
        channelId,
        publish,
      };
      const quill = new Quill(editorContainer, options);
      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });
      // quill.on();
      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, [publish]);

    useLayoutEffect(() => {
      const sendButton = document.querySelector('#send-button');
      sendButton.addEventListener('click', handleSendMessage);

      return () => {
        sendButton.removeEventListener('click', handleSendMessage);
      };
    }, [publish]);

    return (
      <>
        <EmojiPicker
          open={emojiPickerIsOpen}
          className="emoji-picker"
          onEmojiClick={console.log}
        />
        <div id="editor" ref={containerRef}></div>
        <CustomToolbarBottom setEmojiPickerIsOpen={setEmojiPickerIsOpen} />
      </>
    );
  }
);

Editor.displayName = 'Editor';

export default Editor;
