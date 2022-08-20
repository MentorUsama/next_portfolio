import React from "react";
import Image from "next/image";
import { Rating } from "../index";
import * as classes from "./FeedbackCard.module.scss";
export default function FeedbackCard(props) {
    return (
        <div
            className={`${classes.feedback_card} ${props.mode == "light" ? classes.light : classes.dark
                }`}
        >
            {/* Desscription Container */}
            <div className={classes.feedback_card__detail}>
                {/* Image and Rating */}
                <div>
                    <div className={classes.Images_container}>
                        <div className={classes.profiel_pic}>
                            <Image
                                src={`/images/feedback_profiles/${props.profile_pic}`}
                                alt="Profile Pic"
                                width="80px"
                                height="80px"
                            />
                        </div>
                        <div className={classes.source__image}>
                            <a href="https://www.upwork.com/freelancers/~01a36c260b24da516c" target="__blank">
                                <Image
                                    src={`/images/feedback_profiles/${props.source}`}
                                    alt="Feedback Source"
                                    width="20px"
                                    height="20px"
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <Rating mode={props.mode} rating={props.rating} />
                    </div>
                </div>
                {/* Description */}
                <div className={classes.description}>
                    <div className={classes.description__title}>
                        <p>{props.title}</p>
                        <span>{`( `}{props.job_type}{` )`}</span>
                    </div>
                    <p className={classes.description__earning}>{props.earning} $</p>
                    <div className={classes.description__dates}>
                        <p>{props.start_date}</p>
                        <p>to</p>
                        <p>{props.end_date}</p>
                    </div>
                </div>
            </div>
            {/* Feedback */}
            <div className={classes.feedback_card__feedback}>
                <div>
                    <p>{props.feedback}</p>
                </div>
            </div>
        </div>
    );
}
