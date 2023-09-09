"use client";
import Typewriter from 'typewriter-effect'

export const Loading = () => {
    return (
        <>
        <p className={'text-5xl flex text-text gap-1 items-center justify-center'}>Loading <Typewriter options={{
            strings: ['...'],
            loop: true,
            autoStart: true,
            cursor: ''
        }} /></p>
        </>
    )
}