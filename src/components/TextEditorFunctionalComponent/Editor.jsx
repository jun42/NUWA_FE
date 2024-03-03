import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import CustomToolBar from '../TextEditor/CustomToolbar';
import CustomToolbarBottom from '../TextEditor/CustomToolbarBottom';
import options from './options';
import EmojiPicker from 'emoji-picker-react';
import useBoundStore from '../../store/store';
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
    // console.log('EDITOR', publish);

    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    const clearText = () => {
      ref.current.deleteText(0, ref.current.getLength());
    };
    const handleSendMessage = () => {
      // console.log('EDITOR publish', publish);
      // console.log('GET CONTENTS', ref.current.getContents());
      console.log(ref.current.getText());
      // publish(ref.current.getContents().ops);
      publish(ref.current.getText());

      console.log(ref.current.getContents().ops);
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

    useEffect(() => {
      const sendButton = document.querySelector('#send-button');
      sendButton.addEventListener('click', handleSendMessage);

      return () => {
        sendButton.removeEventListener('click', handleSendMessage);
      };
    }, [publish]);

    // useEffect(() => {
    //   const handleEditorKey = (e) => {
    //     console.log(e.key);
    //     if (e.key === 'Enter') {
    //       clearText();
    //     }
    //   };
    //   const editorEl = document.querySelector('#editor');
    //   console.log(editorEl);
    //   editorEl.addEventListener('keydown', handleEditorKey);
    //   return () => {
    //     editorEl.removeEventListener('keydown', handleEditorKey);
    //   };
    // }, []);

    return (
      <>
        <CustomToolBar>
          <EmojiPicker
            open={emojiPickerIsOpen}
            className="emoji-picker"
            onEmojiClick={console.log}
          />
        </CustomToolBar>
        <div id="editor" ref={containerRef}></div>
        <CustomToolbarBottom setEmojiPickerIsOpen={setEmojiPickerIsOpen} />
      </>
    );
  }
);

Editor.displayName = 'Editor';

export default Editor;
