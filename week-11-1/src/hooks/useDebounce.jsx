import { useEffect, useReducer, useRef, useState } from "react"

const useDebounce = (value) => {
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(value, 200);
    }

    return fn;
}

export default useDebounce;