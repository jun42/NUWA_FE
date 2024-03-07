import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import CustomToolbarBottom from '../TextEditor/CustomToolbarBottom';
import options from './options';
import EmojiPicker from 'emoji-picker-react';
// Editor is an uncontrolled React component
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
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useEffect(() => {
      options.modules.keyboard.bindings.customEnter = {
        key: 'Enter',
        handler: function (range, context) {
          publish(JSON.stringify(this.quill.getContents().ops));
          this.quill.deleteText(0, this.quill.getLength());
        },
      };
    }, [publish]);

    const clearText = () => {
      if (ref.current) {
        ref.current.deleteText(0, ref.current.getLength());
      }
    };
    //todo 빈값 안보내기
    const handleSendMessage = () => {
      publish(JSON.stringify(ref.current.getContents().ops));
      clearText();
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
    }, []);

    useLayoutEffect(() => {
      const sendButton = document.querySelector('#send-button');
      sendButton.addEventListener('click', handleSendMessage);

      return () => {
        sendButton.removeEventListener('click', handleSendMessage);
      };
    }, [publish]);

    return (
      <>
        {/* <CustomToolBar> */}
        <EmojiPicker
          open={emojiPickerIsOpen}
          className="emoji-picker"
          onEmojiClick={console.log}
        />
        {/* </CustomToolBar> */}
        <div id="editor" ref={containerRef}></div>
        <CustomToolbarBottom setEmojiPickerIsOpen={setEmojiPickerIsOpen} />
      </>
    );
  }
);

Editor.displayName = 'Editor';

export default Editor;
