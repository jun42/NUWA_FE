import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import { useParams } from 'react-router-dom';
import { imageMatcher } from '@components/TextEditorFunctionalComponent/quill/clipboard';
import useBoundStore from '../../store/store';

const Editor = forwardRef(
  (
    { readOnly, onTextChange, onSelectionChange, channelId, defaultValue },
    ref
  ) => {
    const { workSpaceId } = useParams();
    const uploadType = useBoundStore((state) => state.uploadType);
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
        return imageMatcher(node, quill, workSpaceId, channelId, uploadType);
      });
      // quill.clipboard.addMatcher('IMG', (node, delta) => {
      //   const Delta = Quill.import('delta');
      //   return new Delta().insert('');
      // });
      // quill.clipboard.addMatcher('PICTURE', (node, delta) => {
      //   const Delta = Quill.import('delta');
      //   return new Delta().insert('');
      // });
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
