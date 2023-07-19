import react from "react";
import style from "../styles/Numbers.module.css";
import Image from "next/image";

const Numbers = () => {
    const { container, B_frame, grid, text1, text2 } = style
    const items = [
        {
            head: "60+",
            text: "Web3 & Blockchain Developers at Parallel88 Nairobi Studios"
        },
        {
            head: "3000+",
            text: "Coding Hours by our Web3 Developers every week across our Studios",
        },
        {
            head: "346+",
            text: "Web3 & Web2 Community network developers supported by Parallel88",
        },
        {
            head: "36+",
            text: "dApps & Applications Completed for Web3 & Blockchain projects Globally",
        },
    ]
    return (
        <div className={container}>
            <div className={B_frame}>
                {items.map((item, index) => {
                    return (
                        <div className={grid} key={index}>
                            <h>{item.head}</h>
                            <p className={text2}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Numbers;