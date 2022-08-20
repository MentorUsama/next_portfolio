import React from "react";
import { FeedbackCard } from "../../../components/index";
import * as classes from './ClientFeedback.module.scss'

export default function ClientFeedback(props) {
  return (
    <div
      className={`${classes.feedback} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      {
        props.feedbacks.map(feedback=>(
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
        ))
      }
    </div>
  );
}
