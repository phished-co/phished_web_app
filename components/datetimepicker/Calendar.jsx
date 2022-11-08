import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { useState } from 'react';

export default function Calendar({ onChange }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString().slice(0, -3)
  );

  function handleChange(date, time) {
    onChange(date, `${time}:00`);
  }

  return (
    <>
      <br />
      {/* {date}
      &nbsp;{time} */}
      <DateTimePicker
        dateFormat="YYYY-MM-DD"
        timeFormat="HH:mm:ss"
        datePickerProps={{
          value: date || new Date().toISOString().split('T')[0],
          parseInputValue: (date) => parseISO(date),
          onChange: (date) => {
            console.log('date =', date);
            setDate(date);
            handleChange(date, time);
          },
          testId: 'datepicker',
        }}
        timePickerProps={{
          placeholder: time || new Date().toLocaleTimeString(),
          onChange: (time) => {
            console.log('time =', time);
            setTime(`${time}:00`);
            handleChange(date, time);
          },
        }}
      />
      <br />
    </>
  );
}
