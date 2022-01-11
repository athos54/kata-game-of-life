import {useState} from 'react'

export function Header () {
    const [showHeader, setShowHeader] = useState(true)
    const handleStartClick = ()=>{
        setShowHeader(!showHeader)
    }

    return (
        <>
            {showHeader &&
                <>
                    <input type='number' name='size' placeholder='Introduce the size of table' />
                    <div onClick={handleStartClick}>Start!</div>
                </>
            }
        </>
    )
}
