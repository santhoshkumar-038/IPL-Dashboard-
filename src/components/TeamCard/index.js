import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
