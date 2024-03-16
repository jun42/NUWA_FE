import { formatDate } from './formatDate.js';
  
  export const groupAlarmsByDateThenSender = (alarms) => {
    const groupedByDate = alarms.reduce((acc, curr) => {
      const date = formatDate(curr.createdAt);
      if (!acc[date]) acc[date] = [];
      acc[date].push(curr);
      return acc;
    }, {});
  
    return Object.keys(groupedByDate).reduce((acc, date) => {
      const senderGrouped = groupedByDate[date].reduce((sAcc, curr) => {
        const senderId = curr.notificationSenderId;
        if (!sAcc[senderId]) sAcc[senderId] = { data: [], count: 0 };
        sAcc[senderId].data.push(curr);
        sAcc[senderId].count++;
        return sAcc;
      }, {});
  
      acc[date] = Object.values(senderGrouped).map(group => ({
        ...group.data[0],
        count: group.count,
      }));
      return acc;
    }, {});
  };