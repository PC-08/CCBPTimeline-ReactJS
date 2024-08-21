// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const timeLines = timelineItemsList.filter(eachCour => eachCour.title)

  return (
    <div className="bg">
      <h1 className="mainhead">
        MY JOURNEY OF <span className="mainhead2">CCBP 4.0</span>
      </h1>

      <div className="chr">
        <Chrono
          theme={{
            primary: '#2b237c',
            secondary: 'white',
            cardBgColor: 'white',

            titleColor: ' #0967d2',
          }}
          items={timeLines}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachCour => {
            if (eachCour.categoryId === 'COURSE') {
              return <CourseTimelineCard key={eachCour.id} courseD={eachCour} />
            }
            return <ProjectTimelineCard key={eachCour.id} projectD={eachCour} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
