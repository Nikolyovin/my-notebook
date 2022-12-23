import Header from './components/Header/Header'
import Main from './components/Main/Main'
import React, { useState } from 'react'
import Loader from './components/common/Loader'

function App() {
    const [time, setTime] = useState(false)
    setTimeout(() => {
        setTime(true)
    }, 200)

    if (!time) return <Loader />

    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default App
