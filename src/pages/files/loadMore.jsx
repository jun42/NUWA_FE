

  // // 더보기 버튼을 클릭할 때 호출되는 함수
  export const loadMoreFiles = (index, switchstate, setCurrentPage) => {
    if (switchstate) {
      setCurrentPage((prev) => prev + 1);
    } else
      setCurrentPage((prevPages) => {
        // 인덱스 위치의 currentPage를 1 증가시킴
        return prevPages.map((page, i) => (i === index ? page + 1 : page));
      });
  };

    // 파일 목록을 페이지별로 분할하는 함수
    export const paginateFiles = (files, filesPerPage) => {
      const filesStack = [];
      for (let i = 0; i < files.length; i += filesPerPage) {
        filesStack.push(files.slice(i, i + filesPerPage));
      }
      return filesStack;
    };