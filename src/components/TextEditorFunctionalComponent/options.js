const options = {
  theme: 'snow',
  modules: {
    // toolbar: '.toolbar',

    keyboard: {
      bindings: {
        customEnter: {
          key: 'Enter',
          handler: function (range, context) {
            console.log(this.quill.getContents());
            this.quill.deleteText(0, this.quill.getLength());
          },
        },
        newLineEnter: {
          key: 'Enter',
          shiftKey: true,
          handler: function (range, context) {
            this.quill.insertText(range, '\n');
          },
        },
      },
    },
  },
};

export default options;
