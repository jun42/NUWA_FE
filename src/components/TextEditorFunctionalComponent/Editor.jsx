import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import CustomToolBar from '../TextEditor/CustomToolbar';
import CustomToolbarBottom from '../TextEditor/CustomToolbarBottom';
import { clearContentHandler, newLineHandler } from './keyBinding';
import options from './options';
// Editor is an uncontrolled React component
const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

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

      // quill.keyboard.addBinding(
      //   {
      //     key: 'Enter',
      //   },
      //   () => {
      //     clearText();
      //   }
      // );
      // quill.keyboard.addBinding(
      //   {
      //     key: 'Enter',
      //     shiftKey: true,
      //   },
      //   newLineHandler
      // );
      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, []);

    const clearText = () => {
      ref.current.deleteText(0, ref.current.getLength());
    };
    const handleSendMessage = (e) => {
      clearText();
    };

    useEffect(() => {
      const sendButton = document.querySelector('#send-button');
      sendButton.addEventListener('click', handleSendMessage);

      return () => {
        sendButton.removeEventListener('click', handleSendMessage);
      };
    }, []);

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
        <CustomToolBar />
        <div id="editor" ref={containerRef}></div>
        <CustomToolbarBottom />
      </>
    );
  }
);

Editor.displayName = 'Editor';

export default Editor;
