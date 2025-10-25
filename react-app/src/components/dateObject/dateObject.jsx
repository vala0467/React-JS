import React, { useEffect, useState } from 'react';
import moment from 'moment';

export function DateObject() {
    const [cDate, setCDate] = useState(new Date());
    useEffect(() => {   
        var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        setCDate(today);
    }, []);
    console.log(cDate);
  return (
    <> 
        {cDate.toString()} 
    </>
  );
}