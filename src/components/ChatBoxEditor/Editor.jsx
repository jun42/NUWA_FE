import Quill from 'quill';
import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { updateQuillDataHandler } from '../TextEditorFunctionalComponent/quill/utils';

// Editor is an uncontrolled React component
const Editor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      onTextChange,
      onSelectionChange,
      updatePublish,
      messageId,
      setReadOnly,
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    // useEffect(() => {
    //   console.log('eeeeeeeeeeee', readOnly, ref.current);
    //   if (ref.current) {
    //     ref.current?.enable(!readOnly);
    //   }
    // }, [ref, readOnly, updatePublish]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div')
      );
      const quill = new Quill(editorContainer, {
        externalLayer: {
          updatePublish,
        },
        theme: readOnly ? false : 'snow',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
            ],
          },
          keyboard: {
            bindings: {
              customEnter: {
                key: 'Enter',
                handler: function (range, context) {
                  const updatePublish =
                    this.quill.options.externalLayer.updatePublish;
                  const quill = this.quill;
                  updateQuillDataHandler(quill, updatePublish, messageId);
                  setReadOnly(true);
                },
              },
            },
          },
        },
      });

      ref.current = quill;

      if (ref.current) {
        ref.current?.enable(!readOnly);
      }

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
    }, [ref, readOnly, updatePublish]);

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = 'Editor';

export default Editor;
