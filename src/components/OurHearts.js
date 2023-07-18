import react from "react";
import style from "../styles/OurHearts.module.css";
import Image from "next/image";

const OurHearts = () => {
    const {
        container,
        text_At,
        frame,
        box,
        Line,
        Line1,
        gap,
        Anim,
        text_We,
        H_image,
        image,
    } = style
    return (
        <div className={container}>
            <span className={text_At}>
                At the heart of our work is a deep commitment to the principles of blockchain technology
            </span>
            <div className={frame}>
                <span className={box}>Transparency</span>
                <span className={box}>Decentralization</span>
                <span className={box}>Trust</span>
            </div>
            <div className={Line}>
                <div className={Anim}>
                    <div className={Line1}></div>
                    <span className={gap}></span>
                    <div className={Line1}></div>
                </div>
            </div>
            <span className = {text_We}>
            We believe that these principles have the power to transform industries, create new opportunities, and help to build a more equitable and sustainable world. 
            </span>
            <div className = {H_image}>
                <Image 
                    className = {image}
                    src = "/H_image.svg"
                    width={1192}
                    height={795.04}
                    alt="pic"
                />
            </div>
        </div>
    )
}

export default OurHearts;