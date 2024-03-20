import { loadMoreFiles, paginateFiles } from "./loadMore";
import { sortFiles } from "./sortFiles";
import FileList from './FileList';
import { Button, Box } from '@chakra-ui/react';

const renderFilteredFilesList = (files, fileList, filesPerPage, switchstate, currentPage, setCurrentPage) => {
  return (
    <Box mb="5rem">
      {files.map((x, index) => (
        <FileList
          key={index}
          fileName={x.fileName}
          sharedBy={x.fileMemberUploadName}
          date={x.createdAt}
          type={x.fileExtension}
          size={x.fileSize}
          src={x.fileUrl}
        />
      ))}
      {currentPage < Math.ceil(fileList.length / filesPerPage) - 1 && (
        <Button onClick={() => loadMoreFiles(0, switchstate, setCurrentPage)}>
          더보기
        </Button>
      )}
    </Box>
  );
};

const filteredFilesOnList = (sortBy, fileList, filesPerPage, switchstate, currentPage, setCurrentPage, checkedUsers, filterByUsers) => {
  const filteredFiles =
    checkedUsers.length > 0
      ? filterByUsers(sortFiles(sortBy, fileList))
      : sortFiles(sortBy, fileList);
  const stack = paginateFiles(filteredFiles, filesPerPage);
  let renderedFiles = [];
  for (let i = 0; i <= currentPage; i++) {
    const pageFiles = stack[i] || [];
    renderedFiles = [...renderedFiles, ...pageFiles];
  }

  return renderFilteredFilesList(renderedFiles, fileList, filesPerPage, switchstate, currentPage, setCurrentPage);
};

export const renderFilesBySortTypeList = (sortBy, fileList, filesPerPage, switchstate, currentPage, setCurrentPage, checkedUsers, filterByUsers) => {
  switch (sortBy) {
    case 'date':
    case 'name':
    case 'size':
    case 'type':
      return filteredFilesOnList(sortBy, fileList, filesPerPage, switchstate, currentPage, setCurrentPage, checkedUsers, filterByUsers);
    default:
      return null;
  }
};