import React, {useState ,useEffect} from 'react';

export default function TimeStopwatch(props) {
   const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('End of minute');
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata', // 'Asia/Kolkata' is the time zone for IST
      hour12: true, // Use 12-hour format
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeIST = now.toLocaleString('en-IN', options);
   
    return timeIST
  }


  return <div>{time}</div>;
};
