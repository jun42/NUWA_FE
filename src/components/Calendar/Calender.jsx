import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

const Calender = () => {
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        style={{ width:900,height: 780 }}
      />
    </div>
  );
};

export default Calender;
