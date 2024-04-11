import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import leftArrowDate from '../Images/MainLogo.png';

function Calendar() {

    const DateContainer = styled.div`
  height: 130px;
  color: #727070;
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 80%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const [dateList, setDateList] = useState([]);
  const [day, setDay] = useState({});
  const [intervalsLeft, setIntervalsLeft] = useState([]);
  const [intervalsRight, setIntervalsRight] = useState([]);
  const [intervalIdLeft, setIntervalIdLeft] = useState();
  const [intervalIdRight, setIntervalIdRight] = useState();

const toDayName = (n) => {
    switch (n) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 0:
        return "Saunday";
    }
  };

  const toMonthName = (n) => {
    switch (n) {
      case 1:
        return "JAN";
      case 2:
        return "FEB";
      case 3:
        return "MAR";
      case 4:
        return "APR";
      case 5:
        return "MAY";
      case 6:
        return "JUN";
      case 7:
        return "JUL";
      case 8:
        return "AUG";
      case 9:
        return "SEP";
      case 10:
        return "OCT";
      case 11:
        return "NOV";
      case 12:
        return "DEC";
    }
  };

 const generateDateList = () => {
    let date = new Date();
    let newDateList = [];
    for (let i = 0; i < 90; i++) {
      newDateList.push({
        number: date.getDate(),
        day: toDayName(date.getDay()),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      });
      date.setDate(date.getDate() + 1);
    }
    return newDateList;

//  useEffect(() => {
//     const newDateList = generateDateList();
//     setDateList(newDateList);
//     setDay(newDateList);
//   }, []);

  };


  const autoScroll = (direction) => {
    if (direction === "left") {
      setIntervalIdLeft(
        setInterval(() => {
          document.getElementById("scroll")?.scrollBy(-3, 0);
        }, 5)
      );
      setIntervalsLeft([...intervalsLeft, intervalIdLeft]);
    } else {
      setIntervalIdRight(
        setInterval(() => {
          document.getElementById("scroll")?.scrollBy(3, 0);
        }, 5)
      );
      setIntervalsRight([...intervalsRight, intervalIdRight]);
    }
  };
  const clearRunningIntervals = () => {
    intervalsLeft.map((i) => {
      clearInterval(i);
      return null;
    });
    intervalsRight.map((i) => {
      clearInterval(i);
      return null;
    });
  };
  return (
    <div>
        {window.innerWidth > 10 ? (
          <img
            src={leftArrowDate}
            alt="left"
            style={{
              position: "absolute",
              left: "15px",
              height: "15px",
              cursor: "pointer",
            }}
            id="scroll-left"
            // onClick={() => autoScroll("left")}
            onMouseDown={() => autoScroll("left")}
            onMouseUp={() => {
              clearInterval(intervalIdLeft);
              clearRunningIntervals();
            }}
            onDrag={() => {
              clearInterval(intervalIdLeft);
            }}
          />
        ) : null}

<DateContainer id="scroll">
          {dateList.map((d, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center font-bold"
            >
              <span className="text-[13px] leading-10">{d.day[0]}</span>
              <div className="w-[40px] m-0 p-0 h-0 border-2 border-purple-400" />
              <div
                onClick={() => setDay(d)}
                className={`rounded-full ${
                  day.number === d.number &&
                  day.month === d.month &&
                  day.year === d.year
                    ? "bg-purple-500"
                    : "bg-transparent"
                } w-[30px] h-[20px] flex justify-center items-center cursor-pointer my-3 0 4`}
              >
                <span className="text-xs leading-40">
                  {("0" + d.number).slice(-2)}
                </span>
              </div>
              <span
                className={`text-xs ${
                  day.number === d.number &&
                  day.month === d.month &&
                  day.year === d.year
                    ? "font-bold text-purple-600"
                    : "font-medium text-purple-400"
                } ${
                  d.number === 1 ||
                  index === 0 ||
                  (day.number === d.number &&
                    day.month === d.month &&
                    day.year === d.year)
                    ? "visible"
                    : "invisible"
                }`}
              >
                {toMonthName(d.month)}
              </span>
            </div>
          ))}
        </DateContainer>
        {window.innerWidth > 10 ? (
          <img
            src={leftArrowDate}
            alt="right"
            style={{
              position: "absolute",
              right: "15px",
              height: "15px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
            // onClick={() => autoScroll("right")}
            onMouseDown={() => autoScroll("right")}
            onMouseUp={() => {
              clearInterval(intervalIdRight);
              clearRunningIntervals();
            }}
            onDrag={() => {
              clearInterval(intervalIdRight);
            }}
          />
        ) : null}



    </div>
  )
  
}

export default Calendar