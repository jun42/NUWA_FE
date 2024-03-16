export const createSSEAlarmSlice = (set) => ({
  alarmList: [],
  setAlarmList: (alarm) =>
    set((state) => {
      if (state.alarmList.length >= 10) {
        return {
          alarmList: [alarm, ...state.alarmList.slice(0, 10)],
        };
      } else {
        return {
          alarmList: [alarm, ...state.alarmList],
        };
      }
    }),
});
