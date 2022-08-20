import React from "react";
import { FeedbackCard } from "../../../components/index";
import * as classes from "./ClientFeedback.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PrevIcon({ onClickHandler, hasPrev, label, mode }) {
  return (
    hasPrev && (
      <div
        className={`client_feedback_arrow prev ${
          mode == "light" ? "" : "dark"
        } ${hasPrev ? "" : "disabled"}`}
      >
        <button
          disabled={hasPrev ? false : true}
          type="button"
          onClick={onClickHandler}
          title={label}
        >
          <IoIosArrowBack />
        </button>
      </div>
    )
  );
}
function NextIcon({ onClickHandler, hasNext, label, mode }) {
  return (
    hasNext && (
      <div
        className={`client_feedback_arrow forw ${
          mode == "light" ? "" : "dark"
        } ${hasNext ? "" : "disabled"}`}
      >
        <button
          disabled={hasNext ? false : true}
          type="button"
          onClick={onClickHandler}
          title={label}
        >
          <IoIosArrowForward />
        </button>
      </div>
    )
  );
}

export default function ClientFeedback(props) {
  return (
    <div className={`${classes.feedback} ${
      props.mode == "light" ? classes.light : classes.dark
    }`}>
      <h1>Feedbacks</h1>
      <div
        className={`${classes.feedback__container} ${
          props.mode == "light" ? classes.light : classes.dark
        }`}
      >
        <div style={{ paddingTop: "1px", width: "100%", position: "relative" }}>
          <Carousel
            showIndicators={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <PrevIcon
                onClickHandler={onClickHandler}
                hasPrev={hasPrev}
                label={label}
                mode={props.mode}
              />
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <NextIcon
                onClickHandler={onClickHandler}
                hasNext={hasNext}
                label={label}
                mode={props.mode}
              />
            )}
            swipeable={true}
            emulateTouch
            // showArrows={false}
          >
            {props.feedbacks.map((feedback) => (
              <div key={feedback.id}>
                <FeedbackCard
                  mode={props.mode}
                  profile_pic={feedback.profile_pic}
                  source={feedback.source}
                  rating={feedback.rating}
                  title={feedback.title}
                  job_type={feedback.job_type}
                  earning={feedback.earning}
                  start_date={feedback.start_date}
                  end_date={feedback.end_date}
                  feedback={feedback.feedback}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
