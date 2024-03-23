export const sortFiles = (sort, fileList) => {
  switch (sort) {
    case 'date':
      const sortedByDate = fileList.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      return sortedByDate;
    case 'name':
      const sortedByName = fileList.sort((a, b) => {
        const nameA = a.fileName.toLowerCase();
        const nameB = b.fileName.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return sortedByName;
    case 'size':
      const sortedBySize = fileList.sort((a, b) => {
        return b.fileSize - a.fileSize;
      });
      return sortedBySize;
    case 'type':
      const sortedByType = fileList.sort((a, b) => {
        const nameA = a.fileExtension.toLowerCase();
        const nameB = b.fileExtension.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return sortedByType;
  }
};
