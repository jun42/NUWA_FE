import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import { useParams } from 'react-router-dom';
import { imageMatcher } from '@components/TextEditorFunctionalComponent/quill/clipboard';

const Editor = forwardRef(
  (
    { readOnly, onTextChange, onSelectionChange, channelId, defaultValue },
    ref
  ) => {
    const { workSpaceId } = useParams();

    const containerRef = useRef(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const defaultValueRef = useRef(defaultValue);

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

      const quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {},
      });

      quill.clipboard.addMatcher('img', function (node) {
        return imageMatcher(node, quill, workSpaceId, channelId);
      });
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
      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, []);

    return <div id="canvas-editor" ref={containerRef}></div>;
  }
);

Editor.displayName = 'Editor';

export default Editor;
