// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const GetTag = props => {
  const {name} = props

  return <p className="c-li">{name}</p>
}

const CourseTimelineCard = props => {
  const {courseD} = props
  const {tagsList, duration, description, courseTitle} = courseD

  return (
    <div className="c-con">
      <div className="c-top-con">
        <h1 className="c-head">{courseTitle}</h1>{' '}
        <div className="c-icon-con">
          <AiFillClockCircle /> <p className="c-para">{duration}</p>{' '}
        </div>
      </div>
      <p className="c-desc">{description}</p>
      <ul className="c-ul">
        {tagsList.map(eachTag => (
          <GetTag key={eachTag.id} name={eachTag.name} />
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
