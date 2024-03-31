import MapImg from "../../assets/Map.png"
import Navbar from "../Navbar/Navbar"
import './Map.css'
export default function Map() {
    return (
        <>
            <Navbar />
            <div className="map_main">
                <img src={MapImg} alt="MapImg" />
            </div>
        </>
    )
}