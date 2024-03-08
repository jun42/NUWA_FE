const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image'],

  // [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }][
    // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    // [{ direction: 'rtl' }], // text direction

    // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    // [{ align: [] }],

    'clean'
  ], // remove formatting button
];

const options = {
  theme: 'snow',
  modules: {
    toolbar: toolbarOptions,

    keyboard: {
      bindings: {
        // customEnter: {
        //   key: 'Enter',
        //   handler: function (range, context) {
        //     console.log(this.quill.getContents());
        //     this.quill.deleteText(0, this.quill.getLength());
        //   },
        // },
        newLineEnter: {
          key: 'Enter',
          shortKey: true,
          handler: function (range, context) {
            this.quill.insertText(range, '\n');
          },
        },
      },
    },
  },
};

export default options;
