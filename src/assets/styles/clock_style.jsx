import styled from 'styled-components';

export const ClockStyle = styled.div`
    .clock-box {
    width: 100px;
    height: 125px;
}

.clock-box:nth-child(2n) {
    margin-left: 10px;
    margin-right: 10px;
}

.clock-top {
    display: flex;
}

.clock-title {
    flex: 1;
    max-width: 80px;
    overflow: hidden;
    text-align: center;
    padding-bottom: 10px;
}

.clock-delete {
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
}

/* Another stles  */

.clock {
    box-shadow: inset 0 0 0 0.02em #000;
    display: flex;
    justify-content: center;
    border-radius: 0.5em;
    position: relative;
    font-size: 100px;
    overflow: hidden;
    height: 1em;
    width: 1em;
}

.clock__hand {
    margin-left: -0.5em;
    margin-top: -0.5em;
    font-size: inherit;
    position: absolute;
    display: block;
    height: 1em;
    width: 1em;
    left: 50%;
    top: 50%;
}

.clock__hand--hour::after {
    content: "";
    border-radius: 0.015em 0.015em 0.01em 0.01em;
    background-color: #000;
    margin-bottom: -0.02em;
    margin-left: -0.025em;
    font-size: inherit;
    position: absolute;
    display: block;
    height: 0.25em;
    width: 0.05em;
    bottom: 50%;
    left: 50%;
}

.clock__hand--minute::after {
    content: "";
    border-radius: 0.012em 0.012em 0.01em 0.01em;
    background-color: #000;
    margin-bottom: -0.02em;
    margin-left: -0.015em;
    font-size: inherit;
    position: absolute;
    display: block;
    height: 0.4em;
    width: 0.03em;
    bottom: 50%;
    left: 50%;
}

.clock__hand--second::after {
    content: "";
    border-radius: 0.01em 0.01em 0.005em 0.005em;
    background-color: #f00;
    margin-bottom: -0.02em;
    margin-left: -0.005em;
    font-size: inherit;
    position: absolute;
    display: block;
    height: 0.46em;
    width: 0.01em;
    bottom: 50%;
    left: 50%;
}
 `