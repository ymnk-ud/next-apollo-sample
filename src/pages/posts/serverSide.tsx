import * as React from 'react';
import { NextPage, GetServerSideProps } from 'next';

interface InitialProps {
    text: string,
    time: string,
}

const ServerSideApiSample: NextPage<InitialProps> = ({ text, time }) => {
    return (
        <div>
            <h1> getServerSideProps sample </h1>
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

export const getServerSideProps: GetServerSideProps<InitialProps> = async () => {
    const text = 'default'; // api叩いて取ってくる
    const time = new Date().toString()
    return {
        props: {
            text,
            time,
        }
    }
}

export default ServerSideApiSample;
