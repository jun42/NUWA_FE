import { useMemo, useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import Toolbar from './Toolbar';
import { useDisclosure } from '@chakra-ui/react';
import EditSlot from './EditSlot';


const localizer = momentLocalizer(moment);

const events = [
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
    end: moment('2024-03-16T10:00:00'),
    title: '연차',
  },
];

const Calender = () => {
  const { onOpen, isOpen } = useDisclosure();
  const [popoverContent, setPopoverContent] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({});
  const { formats } = useMemo(
    () => ({
      formats: {
        dateFormat: (date, culture, localizer) =>
          localizer.format(date, 'D', culture),
        weekdayFormat: (date, culture, localizer) =>
          localizer.format(date, 'ddd', culture).toUpperCase(),
      },
    }),
    []
  );
  const handleEventClick = (event) => {
    // 클릭한 이벤트의 위치를 가져옵니다.
    const { box } = event;
    if (!box) return; // 이벤트의 위치 정보가 없는 경우 처리

    const { clientX, clientY } = box;

    onOpen();
    const popoverContent = (
      <EditSlot isOpen={isOpen} onClose={handlePopoverClose} />
    );

    setPopoverContent(popoverContent);
    setPopoverPosition({
      top: clientY,
      left: clientX,
      position: 'absolute',
    });
  };

  const handlePopoverClose = () => {
    setPopoverContent(null);
  };

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        popup
        components={{
          toolbar: Toolbar,
        }}
        events={events}
        selectable
        style={{ height: 646 }}
        onSelectSlot={handleEventClick}
        onSelectEvent={handleEventClick}
        formats={formats}
      />

      {popoverContent && <div style={popoverPosition}>{popoverContent}</div>}
    </div>
  );
};

export default Calender;
