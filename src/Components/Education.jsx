import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa";
import css from "../Style/Education.module.css"

function Education() {
  return (
    <section class={css.education} id='education'>
<VerticalTimeline lineColor="#000">
    <VerticalTimelineElement class='vertical-timeline-elemet' iconStyle={{background:"#000" , color:"#FFFF00"}}
    icon={<FaUserGraduate />} date='2011-2014'>
<h3 class={css.text}>KSRM College(JNTUA)</h3>
<p class={css.text}>ECE Branch</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement class='vertical-timeline-elemet' iconStyle={{background:"#000" , color:"#FFFF00"}}
    icon={<FaUserGraduate />} date='2009-2011'>
<h3 class={css.text}>Sri Chaitanya Jr College</h3>
<p class={css.text}>M.P.C</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement class='vertical-timeline-elemet' iconStyle={{background:"#000" , color:"#FFFF00"}}
    icon={<FaUserGraduate />} date='2009'>
<h3 class={css.text}>Little Angels English Medium High School</h3>
    </VerticalTimelineElement>
  </VerticalTimeline>
    </section>
  
  )
}

export default Education
