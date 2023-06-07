import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [state, setState] = useState(
        {
            data: null,
            loading: null,
            error: null
        }
    );
    useEffect(() => {
        fetch(url)
            .then((resp => resp.json()))
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }

            )
        return state;
    }, [])



}

export default useFetch