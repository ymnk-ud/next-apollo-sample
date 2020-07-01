import * as React from 'react';
import { NextPage } from 'next';

interface InitialProps {
    text: string,
    time: string,
}

const OldApiSample: NextPage<InitialProps> = ({ text, time }) => {
    return (
        <div>
            <h1> getInitialProps sample </h1>
            <ul>
                <li>
                    <a>passed text: {text}</a>
                </li>
                <li>
                    <a>time: {time}</a>
                </li>
            </ul>
        </div>
    )
}

OldApiSample.getInitialProps = () => {
    const text = 'default'; // api叩いて取ってくる
    const time = new Date().toString()

    return {
        text: text,
        time: time
    }
}

export default OldApiSample;
