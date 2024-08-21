// Write your code here
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectD} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = projectD

  return (
    <div>
      <img className="p-img" alt="project" src={imageUrl} />
      <div className="p-top">
        <h1 className="p-head"> {projectTitle}</h1>
        <div className="p-icon">
          <AiFillCalendar />
          <p className="p-para">{duration}</p>
        </div>
      </div>
      <p className="p-desc">{description}</p>
      <a className="p-link" href={projectUrl} target="blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
