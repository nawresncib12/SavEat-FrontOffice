import classes from "./Why.module.css";
import HomeTitle from "../../UI/HomeTitle";
import { Bar } from "react-chartjs-2";
import { useRef, useState, useEffect } from "react";
import Chart from "chart.js/auto";
const Why = () => {
  const state = {
    labels: [
      "Of the world's food",
      "Of all fruits and vegetables",
      "Of all fish and seafood",
      "Of all cereals",
      "Of all dairy products",
      "Of all meat and poultry",
    ],
    datasets: [
      {
        label: "Percentage of food wasted in total from each category ",
        data: [33, 45, 35, 30, 20, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div  className={classes.whySection}>
      <div ref={domRef} className={`${classes.anim}  ${isVisible ? classes.animate : ""}`}>
        <HomeTitle>Why is this so important ?</HomeTitle>
      </div>
      <div className={classes.why}>
        <div className={classes.quote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="95.333px"
            height="95.332px"
            viewBox="0 0 95.333 95.332"
          >
            <g>
              <g>
                <path
                  d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
			c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
			s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
			c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
			c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"
                />
                <path
                  d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
			c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
			c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
			c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
			c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <div className={classes.quoteContent}>
            <p>
              The level of food waste is morally unacceptable (since) the
              country has, at the same time, 600,000 Tunisians who suffer from
              malnutrition
            </p>
            <h5 className={`${classes.anim}  ${isVisible ? classes.animate : ""}`} >-- Tarek BEN JAZIA , Minister of commerce</h5>
          </div>
        </div>
        <div className={classes.charts}>
          <div className={classes.chartBack}></div>

          <div  className={`${classes.chart}  ${isVisible ? classes.animate : ""}`}>
            <Bar
              data={state}
              options={{
                legend: {
                  display: false,
                },
                plugins: {
                  legend: {
                    labels: {
                      boxWidth: 0,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
