import { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const abortControl = new AbortController();
    useEffect(() => {
        fetch(url, {signal:abortControl.signal}).then(
            res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
        return () => abortControl.abort();
    }, [url])
    return { data, isPending };
};

export default useFetch;