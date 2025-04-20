"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const Stats = () => {
  const stats = [
    { number: "2K+", details: "Happy Customers" },
    { number: "30+", details: "Unique Collections" },
    { number: "15K+", details: "Items Sold" },
    { number: "90%", details: "Repeat Customers" },
  ];

  const extractNumberAndSuffix = (numStr: string) => {
    const number = parseInt(numStr.replace(/[^0-9]/g, ""));
    const suffix = numStr.replace(/[0-9]/g, "").trim();
    return { number, suffix };
  };

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    stats.forEach((stat, index) => {
      const { number: targetNumber } = extractNumberAndSuffix(stat.number);
      let count = 0;
      const step = Math.ceil(targetNumber / 100);

      const interval = setInterval(() => {
        count += step;
        if (count >= targetNumber) {
          count = targetNumber;
          clearInterval(intervals[index]);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = count;
          return newCounts;
        });
      }, 20);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid xs:grid-cols-4 grid-cols-2 xs:gap-10 gap-6"
          )}
        >
          {stats.map((item, index) => {
            const { suffix } = extractNumberAndSuffix(item.number);

            return (
              <div
                key={index}
                className={classNames(
                  styles.statItem,
                  "flex flex-col items-center"
                )}
              >
                <span
                  className={classNames(
                    styles.number,
                    "flex items-center gap-1.5"
                  )}
                >
                  {counts[index]}
                  {counts[index] ===
                    parseInt(item.number.replace(/[^0-9]/g, "")) && suffix}
                </span>
                <p className="font-semibold mt-2">{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
