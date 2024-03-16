 import { getAlarms } from '@apis/alarm/getAlarm';

export const fetchAlarms = async ({ queryKey }) => {
    const [_key, workSpaceId] = queryKey; // queryKey 구조: ['alarms', workSpaceId]
    const response = await getAlarms(workSpaceId);
    return response.data.content; // API 응답 구조에 따라 조정
  };