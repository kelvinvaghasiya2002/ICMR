
import GoogleImg from '../../assets/Google_Icon.png'



const handleClick = ()=>{
    window.open("http://localhost:3000/auth/google/callback", "_self")
}


export default function GoogleSI() {
    return (
        <div onClick={handleClick}  className='webimg' style={{cursor : "pointer"}}>
            <img src={GoogleImg} alt="Google" />
        </div>
    )
}