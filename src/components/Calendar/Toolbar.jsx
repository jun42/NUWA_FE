import moment from 'moment';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const Toolbar = ({label, onNavigate}) => {
  const formattedLabel = moment(label).format('YYYY-MM');
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}><MdOutlineArrowLeft /></button>
        <span className="rbc-toolbar-label">{formattedLabel}</span>
        <button type="button" onClick={() => onNavigate('NEXT')}><MdOutlineArrowRight /></button>
      </span>
      <span className="rbc-btn-group"></span>
    </div>
  );
};

export default Toolbar;
