import { useState, useEffect, useRef } from "react";

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const prevTimeLeftRef = useRef(timeLeft);

  useEffect(() => {
    // 12h ngày 18/05/2026
    const targetDate = new Date("2026-05-18T11:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "000", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Keep reference to previous state to show animation
      prevTimeLeftRef.current = timeLeft;

      setTimeLeft({
        days: String(days).padStart(3, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const prevTimeLeft = prevTimeLeftRef.current;

  // Helper to render a rolling digit
  const renderDigit = (currDigit: string, prevDigit: string, id: string) => {
    const shouldAnimate = currDigit !== prevDigit;
    return (
      <div
        key={`${id}-${currDigit}`} // remount when changed to trigger animation again
        data-v-3e77e59a=""
        className={`flex-wrap ${shouldAnimate ? "numscroll" : ""}`}
      >
        <div
          data-v-3e77e59a=""
          className="next-num"
          style={{ color: "rgb(242, 119, 149)" }}
        >
          {shouldAnimate ? prevDigit : currDigit}
        </div>
        <div
          data-v-3e77e59a=""
          className="curr-num"
          style={{ color: "rgb(242, 119, 149)" }}
        >
          {currDigit}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="count-down eles"
        data-id="1735288969858"
        data-type="countdown"
        data-custom-type="countdown"
        data-layername="倒计时56"
        data-signsort="11"
        data-pid=""
        data-sign="true"
        style={{
          left: "0.64rem",
          top: "43.3717rem",
          transform: "rotate(0deg)",
          width: "2.26667rem",
          height: "10rem",
          boxShadow: "rgb(153, 153, 153) 0px 0px 0px",
        }}
      >
        <div className="ani-wrap">
          <div
            className="count-flip c_1735288969858"
            style={{ transform: "scale(1)", flexFlow: "column", opacity: 1 }}
          >
            {/* Days */}
            <div
              className="c-com c-day"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0)",
                borderColor: "rgb(153, 153, 153)",
                borderRadius: "0rem",
                borderStyle: "solid",
                borderWidth: "0rem",
              }}
            >
              <div data-v-3e77e59a="" className="c-wrap c-day-wrap">
                <div
                  data-v-3e77e59a=""
                  className="c-num c-day-left"
                  style={{
                    display: timeLeft.days[0] === "0" ? "none" : "block",
                  }}
                >
                  {renderDigit(timeLeft.days[0], prevTimeLeft.days[0], "d0")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-left">
                  {renderDigit(timeLeft.days[1], prevTimeLeft.days[1], "d1")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-right">
                  {renderDigit(timeLeft.days[2], prevTimeLeft.days[2], "d2")}
                </div>
                <div
                  data-v-3e77e59a=""
                  className="c-text"
                  style={{ color: "rgb(242, 119, 149)" }}
                >
                  Ngày
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="c-com c-hour"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0)",
                borderColor: "rgb(153, 153, 153)",
                borderRadius: "0rem",
                borderStyle: "solid",
                borderWidth: "0rem",
              }}
            >
              <div data-v-3e77e59a="" className="c-wrap">
                <div
                  data-v-3e77e59a=""
                  className="c-num c-day-left"
                  style={{ display: "none" }}
                >
                  {renderDigit("0", "0", "h-fake")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-left">
                  {renderDigit(timeLeft.hours[0], prevTimeLeft.hours[0], "h0")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-right">
                  {renderDigit(timeLeft.hours[1], prevTimeLeft.hours[1], "h1")}
                </div>
                <div
                  data-v-3e77e59a=""
                  className="c-text"
                  style={{ color: "rgb(242, 119, 149)" }}
                >
                  Giờ
                </div>
              </div>
            </div>

            {/* Minutes */}
            <div
              className="c-com c-minute"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0)",
                borderColor: "rgb(153, 153, 153)",
                borderRadius: "0rem",
                borderStyle: "solid",
                borderWidth: "0rem",
              }}
            >
              <div data-v-3e77e59a="" className="c-wrap">
                <div
                  data-v-3e77e59a=""
                  className="c-num c-day-left"
                  style={{ display: "none" }}
                >
                  {renderDigit("0", "0", "m-fake")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-left">
                  {renderDigit(
                    timeLeft.minutes[0],
                    prevTimeLeft.minutes[0],
                    "m0",
                  )}
                </div>
                <div data-v-3e77e59a="" className="c-num c-right">
                  {renderDigit(
                    timeLeft.minutes[1],
                    prevTimeLeft.minutes[1],
                    "m1",
                  )}
                </div>
                <div
                  data-v-3e77e59a=""
                  className="c-text"
                  style={{ color: "rgb(242, 119, 149)" }}
                >
                  Phút
                </div>
              </div>
            </div>

            {/* Seconds */}
            <div
              className="c-com c-second"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0)",
                borderColor: "rgb(153, 153, 153)",
                borderRadius: "0rem",
                borderStyle: "solid",
                borderWidth: "0rem",
              }}
            >
              <div data-v-3e77e59a="" className="c-wrap">
                <div
                  data-v-3e77e59a=""
                  className="c-num c-day-left"
                  style={{ display: "none" }}
                >
                  {renderDigit("0", "0", "s-fake")}
                </div>
                <div data-v-3e77e59a="" className="c-num c-left">
                  {renderDigit(
                    timeLeft.seconds[0],
                    prevTimeLeft.seconds[0],
                    "s0",
                  )}
                </div>
                <div data-v-3e77e59a="" className="c-num c-right">
                  {renderDigit(
                    timeLeft.seconds[1],
                    prevTimeLeft.seconds[1],
                    "s1",
                  )}
                </div>
                <div
                  data-v-3e77e59a=""
                  className="c-text"
                  style={{ color: "rgb(242, 119, 149)" }}
                >
                  Giây
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountdownSection;
