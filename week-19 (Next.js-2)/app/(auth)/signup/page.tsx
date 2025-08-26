"use client";

import { Component, useEffect, useRef } from "react"
import axios from "axios";

export default function SignUp() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user", {
                email: emailRef.current?.value,
                password: passRef.current?.value
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-[90vh] w-full flex justify-center items-center">
            <div className="w-[400px] rounded p-6 bg-gray-700 text-gray-400">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={signUp} className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="email">Email</label><br></br>
                        <input ref={emailRef} name="email" type="text" placeholder="enter your name.." className="mt-1 border outline-none w-full px-4 py-2 rounded-full"></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br></br>
                        <input ref={passRef} name="password" type="text" placeholder="enter your password.." className="mt-1 border outline-none w-full px-4 py-2 rounded-full"></input>
                    </div>

                    <button type="submit" className="my-2 bg-gray-900 w-full rounded-full py-2 cursor-pointer">Sign Up</button>
                </form>
            </div>
        </div>
    )
}