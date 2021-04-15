import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const WorkTimeline = ({user}) => {
    
    const workDescription = (summary) => {
        return (
            summary.toString().split('-').map(paragraph => (
                <p>
                    {paragraph}
                </p>
            ))
        )
    }
    return (
        <Timeline  lineColor={'#fff'}>
            {user.work.map((work, index) => {
                return (
                <TimelineItem
                    key={index}
                    dateText={work.startDate + " - " + work.endDate}
                    style={{ color: '#695E93' }}
                    dateInnerStyle={{ background: '#695E93', color: '#fff' }}
                    bodyContainerStyle={{
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                >
                    <h3>{work.company}</h3>
                    <h4>{work.position}</h4>
                    {workDescription(work.summary)}
                </TimelineItem>
            )})}
              

        </Timeline>
    )
}

export default WorkTimeline;