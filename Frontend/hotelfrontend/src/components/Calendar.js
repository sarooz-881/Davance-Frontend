import React ,{ useState } from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import "../css/main.css";
import { enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
function Calendar() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (<div className="calendar">
               <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={setStartDate}
                  onEndDateChange={setEndDate}
                  minimumDate={new Date()}
                  minimumLength={1}
                  format='dd MMM yyyy'
                  locale={enGB}
                   >
                    {({ startDateInputProps, endDateInputProps, focus }) => (
                      <div className='date-range'>
                        <input
                          className={'input' + (focus === START_DATE ? ' -focused' : '')}
                          {...startDateInputProps}
                          placeholder='Start date'
                        />
                        <span className='date-range_arrow END_DATE'  />
                        <input
                          className={'input' + (focus === END_DATE ? ' -focused' : '')}
                          {...endDateInputProps}
                          placeholder='End date'
                        />
                      </div>
                    )}
                  </DateRangePicker>
                
    </div>)}
    export default Calendar;