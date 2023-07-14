/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useEffect } from 'react';

export default function Arrows({ inc }) {
    const [state, Setstate] = useState({
        hour: (new Date().getHours() + Number(inc.time_zone)) * 30,
        minute: new Date().getMinutes() * 6,
        second: new Date().getSeconds() * 6
    });

    useEffect(() => {
        const Int = {
            hour: (new Date().getHours() + Number(inc.time_zone)) * 30,
            minute: new Date().getMinutes() * 6,
            second: new Date().getSeconds() * 6
        }
        const Timer = setInterval(() => Setstate(Int), 1000);

        return (() =>
            clearInterval(Timer)
        );
    })

    return (
        <>
            <span style={{ "rotate": (state.hour) + "deg" }} className="clock__hand clock__hand--hour" />
            <span style={{ "rotate": (state.minute) + "deg" }} className="clock__hand clock__hand--minute" />
            <span style={{ "rotate": (state.second) + "deg" }} className="clock__hand clock__hand--second" />
        </>
    )
}
