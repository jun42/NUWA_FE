import { sendQuillDataHandler } from './utils';

export const bindings = {
  customEnter: {
    key: 'Enter',
    handler: function (range, context) {
      const publish = this.quill.options.externalLayer.publish;
      const quill = this.quill;

      sendQuillDataHandler(quill, publish);
    },
  },
  newLineEnter: {
    key: 'Enter',
    shortKey: true,
    handler: function (range, context) {
      this.quill.insertText(range, '\n');
    },
  },
};
