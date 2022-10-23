import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Typography, alpha } from '@material-ui/core';
import styles from './Calendar.module.css';

export default function Calendar() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </div>
  );
}
