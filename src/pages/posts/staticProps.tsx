import * as React from 'react';
import { NextPage, GetStaticProps } from 'next';

interface InitialProps {
    text: string,
    time: string,
}

const StaticApiSample: NextPage<InitialProps> = ({ text, time }) => {
    return (
        <div>
            <h1> getStaticProps sample </h1>
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

export const getStaticProps: GetStaticProps<InitialProps> = async () => {
    const text = 'default'; // api叩いて取ってくる
    const time = new Date().toString()
    return {
        props: {
            text,
            time,
        }
    }
}

export default StaticApiSample;
