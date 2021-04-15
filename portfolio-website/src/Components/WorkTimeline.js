import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const WorkTimeline = ({user}) => {
    const timelineObjects = user.work.concat(user.education)
    timelineObjects.sort((d1, d2) => new Date(d2.endDate).getTime() - new Date(d1.endDate).getTime());
    console.log(timelineObjects)
    return (
        <Timeline  lineColor={'#fff'}>
            {timelineObjects.map((object, index) => {
                return (
                <TimelineItem
                    key={index}
                    dateText={object.startDate + " - " + object.endDate}
                    style={{ color: '#e86971' }}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                    </p>
                </TimelineItem>
            )})}
              

        </Timeline>
    )
}

export default WorkTimeline;