import react from "react";
import style from "../styles/Mission.module.css";
import Image from "next/image";

const Mission = () => {
    return (
        <div className={style.container}>
            <div className={style.B_image}>
                <Image
                    className={style.backgroundImage}
                    src="/B_image.svg"
                    width={1682.59}
                    height={1051.55}
                    alt="pic"
                />
            </div>
            <div className={style.B_image2}>
                <Image
                    className={style.backgroundImage2}
                    src="/B_image2.svg"
                    width={612.02}
                    height={337.27}
                    alt="pic"
                />
            </div>
            <div className={style.frame}>
                <div className={style.F_mission}>
                    <div className={style.OurMission}>
                        Our Mission
                    </div>
                    <p className={style.Cement}>
                        To cement & anchor a place for Afrika’s
                        most talented minds inside the largest
                        tech innovation markets globally while
                        significantly lowering the cost of tech
                        development worldwide.
                    </p>
                </div>
                <div className={style.F_Promise}>
                    <div className={style.OurPromise}>
                        Our promise
                    </div>
                    <p className={style.Studio}>
                        1000 in-studio developers by 2026, withdeveloper rates 5 -10x cheaper than the Americas
                        & Europe. Targeting a $50mm raise to expand to
                        1000 further 4000 community network
                    </p>
                </div>
            </div>
            <div className = {style.Card}>
            <div className = {style.topRec}></div>
            <div className = {style.Work}>Work With a World Class Team</div>
            <p className = {style.Vision}>Your Vision, Our Expertise</p>
            <button className = {style.btn}>Contact us today</button>
            <div className = {style.email}>
                <Image 
                    className = {style.EMAIL}
                    src = "/email.svg"
                    width={453}
                    height={281}
                    alt="pic"
                />
            </div>
            </div>
        </div>
    )
}

export default Mission;