import { useState, useEffect } from 'react'
const useFetch = (url) => {
const [data, setBlogs] = useState(null)
const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        fetch(url).then(
            res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
            })
    }, [url])
    return {data , isPending};
};

export default useFetch;