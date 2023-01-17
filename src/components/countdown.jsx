// Countdown component
// prettier-ignore

import { useState, useEffect } from "react";
import "../styles/countdown.css";

function CountdownTimer() {
  const calculatedCountDown = () => {
    const countDownDate = new Date("Dec 24, 2023, 00:00:01").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let countdown = {};

    if (distance > 0) {
      countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    }

    return countdown;
  };

  const [timeLeft, setTimeLeft] = useState(calculatedCountDown());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculatedCountDown());
    }, 1000);
  });

  return (
    <div>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <>
          <h1 className="countdownh1">Time until christmas</h1>
          <p className="CountdownTimer">
            {timeLeft.days} Days {timeLeft.hours} Hrs {timeLeft.minutes} Min{" "}
            {timeLeft.seconds} Sec !
          </p>
        </>
      ) : (
        <p className="CountdownTimer">Tis' christmas</p>
      )}
    </div>
  );
}

export default CountdownTimer;
