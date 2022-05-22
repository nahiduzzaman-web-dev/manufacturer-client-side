import React, { useEffect, useRef, useState } from 'react';

const Countdown = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = (countdownDate) => {
        const now = new Date().getTime();

        const distance = countdownDate - now;

        const days = (Math.floor(distance / (1000 * 60 * 60 * 24)) + 20);
        const hours = (Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 15)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(interval.current);
        } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    };
    function saveInLocalStorage(time) {
        localStorage.setItem("timer", time);
    }

    function getTimeFromLocalStorage() {
        return localStorage.getItem("timer");
    }

    useEffect(() => {
        const localTimer = getTimeFromLocalStorage();

        if (localTimer) {
            interval.current = setInterval(() => {
                startTimer(+localTimer);
            }, 1000);
        } else {
            const countdownDate = new Date().getTime() + 14 * 24 * 60 * 1000;
            saveInLocalStorage(countdownDate);
            interval.current = setInterval(() => {
                startTimer(+countdownDate);
            }, 1000);
        }

        return () => clearInterval(interval.current);
    }, []);

    return (
        <div className='grid grid-flow-col gap-5 text-center auto-cols-max my-10'>
            <div className="flex flex-col p-2 bg-red-600 rounded-box text-neutral-content">
                <span className="font-mono text-5xl">
                    <span>{timerDays}</span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 bg-red-600 rounded-box text-neutral-content">
                <span className=" font-mono text-5xl">
                    <span> {timerHours}</span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-red-600 rounded-box text-neutral-content">
                <span className=" font-mono text-5xl">
                    <span>{timerMinutes}</span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-red-600 rounded-box text-neutral-content">
                <span className="font-mono text-5xl">
                    <span>{timerSeconds}</span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Countdown;