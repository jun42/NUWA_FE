import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

const event = [
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '휴가',
  },
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '개발',
  },
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '개발',
  },
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '개발',
  },
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '개발',
  },
  {
    start: moment('2024-03-16T10:00:00'),
    end: moment('2024-03-18T10:00:00'),
    title: '연차',
  },
];
const Calender = () => {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        popup
        events={event}
        style={{ width: 1000, height: 780 }}
      />
    </div>
  );
};

export default Calender;
