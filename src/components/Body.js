import react from "react";
import style from "../styles/Body.module.css";
import Image from "next/image";

const Body = () => {
    const CardData = [{
        cardImg: "/image1.svg",
        cardHeader: "Joint Venture",
        cardDesc: "The company is a joint venture between Sankore 2.0 and NGENI LABs.",
    },
    {
        cardImg: "/image2.svg",
        cardHeader: "41+ Dedicated Team",
        cardDesc: "P88 has a dedicated team of 42+ inhouse Web3 blockchain engineers and developers with over 35+ years of combined experience.",
    },
    {
        cardImg: "/image3.svg",
        cardHeader: "350+ Capacity",
        cardDesc: "The company has the potential to expand its team to accomodate uptp 350+ engineers and tech minds across the region.",
    }]
    return (
        <div className={style.container}>
            <div className={style.frame}>
                <div className={style.Line1}>
                    <Image
                        className={style.line1}
                        src="/Line1.svg"
                        width={1300}
                        height={1}
                        alt="pic"
                    />
                </div>
                {CardData.map((card,index) => {
                    return(
                        <div key={index} className={style.card1}>
                        <div className={style.topRec} />
                        <Image 
                            className = {style.cardImage}
                            src = {card.cardImg}
                            width={98}
                            height={68}
                            alt="pic"
                        />
                        <h1>{card.cardHeader}</h1>
                        <p>{card.cardDesc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;