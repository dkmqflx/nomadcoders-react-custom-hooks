import React, { useState } from 'react'

const useTabs = (initialValue, allTabs) => {
    const [currentIndex, setSurrentIndex] = useState(initialValue)

    if(!allTabs || !Array.isArray(allTabs)){
        return
    }

    return {
        currentItem : allTabs[currentIndex],
        changeItem: setSurrentIndex
    }
}

export default useTabs
