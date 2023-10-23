import { useNavigate } from "react-router-dom"

const NavigateExample = () =>{

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <h1>This is the navigate example</h1>
            <button onClick={handleClick}>Click to Navigate</button>
        </>
    )
}

export default NavigateExample