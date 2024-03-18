export const clearContentHandler = (range, context) => {
  this.quill.deleteText(0, this.quill.getLength());
};

export const newLineHandler = (range, context) => {
  this.quill.insertText(range.index, '\n', Quill.sources.USER);
  this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
};
