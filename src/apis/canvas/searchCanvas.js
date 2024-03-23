import { request } from '@apis/axios/axios';

export const searchCanvas = ({
  workSpaceId,
  title = '',
  page = 0,
  size = 10,
  sortBy = 'createdAt',
  sortOrder = 'asc'
}) => {
  return request.get(`/canvas/search/${workSpaceId}`, {
    params: {
      title,
      page,
      size,
      sortBy,
      sortOrder
    }
  });
};