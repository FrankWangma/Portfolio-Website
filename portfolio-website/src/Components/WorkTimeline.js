import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkTimeline = ({user}) => {
    
    const workDescription = (summary) => {
        return (
            summary.toString().split('-').map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))
        )
    }
    return (
        <VerticalTimeline>
            {user.work.map((work, index) => {
                const startDate = new Date(work.startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
                const endDate = new Date(work.endDate).toLocaleString('default', { month: 'long', year: 'numeric' });

                return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={ startDate + " - " + endDate }
                    contentStyle={{ background: '#927fbf', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #927fbf' }}
                    iconStyle={{ background: '#4f3b78', color: '#fff' }}
                    key={index}
                >
                    <h3 className="vertical-timeline-element-title">{work.company}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{work.position}</h4>
                    {workDescription(work.summary)}
                </VerticalTimelineElement>
            )})}
              

        </VerticalTimeline>
    )
}

export default WorkTimeline;