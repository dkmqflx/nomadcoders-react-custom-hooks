import React, { useEffect, useState } from 'react'

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle)
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")  // title tag in head tag
        htmlTitle.innerText = title
    }
    // useEffect는 title이 바뀔 때 마다 호출된다.
    useEffect(() => {
        updateTitle()
    }, [title])

    return setTitle
}

export default useTitle
