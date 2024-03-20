const getFiles = async (type) => {
  switch (type) {
    case 'all':
      const allFiles = await Promise.resolve(getAllFiles({ workSpaceId }));
      return allFiles.data.data.content;
    case 'zip':
      const zipFiles = await Promise.resolve(
        getExtensionFiles({ workSpaceId, fileExtension: 'zip' })
      );
      return zipFiles.data.data.content;
    case 'pdf':
      const pdfFiles = await Promise.resolve(
        getExtensionFiles({ workSpaceId, fileExtension: 'pdf' })
      );
      return pdfFiles.data.data.content;
    case 'file':
      const fileTypeFiles = await Promise.resolve(
        getTypeFiles({ workSpaceId, fileUploadType: 'FILE' })
      );
      return fileTypeFiles.data.data.content;
    case 'pic':
      const jpegFiles = getExtensionFiles({
        workSpaceId,
        fileExtension: 'jpeg',
      });
      const jpgFiles = getExtensionFiles({
        workSpaceId,
        fileExtension: 'jpg',
      });
      const pngFiles = getExtensionFiles({
        workSpaceId,
        fileExtension: 'png',
      });
      const [jpegFilesResponse, jpgFilesResponse, pngFilesResponse] =
        await Promise.all([jpegFiles, jpgFiles, pngFiles]);
      const imageFiles = [
        ...jpegFilesResponse.data.data.content,
        ...jpgFilesResponse.data.data.content,
        ...pngFilesResponse.data.data.content,
      ];

      return imageFiles;
    default:
      return Promise.reject(new Error('Invalid file type'));
  }
};
export const getFilesByType = (type) => {
  getFiles(type).then((response) => {
    setFileList(response);
  });
};
