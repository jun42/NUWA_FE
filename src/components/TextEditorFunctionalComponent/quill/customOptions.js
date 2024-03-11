import Emitter from 'quill/core/emitter';
import { bindings } from './keyboardBindings';
import Quill from 'quill';
import { uploadFile } from '../../../apis/file/file';

const Delta = Quill.import('delta');

export const myOptions = {
  theme: 'snow',
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['send'],
      ],
      handlers: {
        image: imageHandler,
        send: function () {
          console.log(1111111);
        },
      },
    },
    keyboard: {
      bindings: bindings,
    },
  },
};

function imageHandler() {
  const { workSpaceId, channelId } = this.quill.options.externalLayer;
  const fileRequestDto = {
    workSpaceId,
  };

  let fileInput = this.container.querySelector('input.ql-image[type=file]');
  if (fileInput == null) {
    fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute(
      'accept',
      'image/png, image/jpg, image/jpeg, image/svg'
    );
    fileInput.multiple = true;
    fileInput.classList.add('ql-image');
    fileInput.addEventListener('change', async (e) => {
      if (fileInput.files != null && fileInput.files[0] != null) {
        const formData = new FormData();
        formData.append(
          'fileRequestDto',
          new Blob([JSON.stringify(fileRequestDto)], {
            type: 'application/json',
          })
        );
        for (let file of e.target.files) {
          formData.append('fileList', file);
        }
        fileInput.value = null;

        const imageUrlArray = await uploadFile(
          'DIRECT',
          channelId,
          formData
        ).then((r) => r.data.data);
        formData.forEach((value, key) => {
          formData.delete(key);
        });

        for (let fileInfo of imageUrlArray) {
          let range = this.quill.getSelection(true);
          this.quill.updateContents(
            new Delta()
              .retain(range.index)
              .delete(range.length)
              .insert({ image: fileInfo.fileUrl }),
            Emitter.sources.USER
          );
          this.quill.setSelection(range.index + 1, Emitter.sources.SILENT);
        }
      }
    });
    this.container.appendChild(fileInput);
  }
  fileInput.click();
}
