import { useEffect } from 'react'
import {preLoaderAnim} from "../animations/animations.js";

const PreLoader = () => {
    useEffect(() => {
           preLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Pata</span>
                <span>Caliente</span>
                <span> &reg;</span>

            </div>
        </div>
    )
}

export default PreLoader