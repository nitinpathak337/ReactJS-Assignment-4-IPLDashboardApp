// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="list-item">
      <img className="team-logo" src={teamImageUrl} alt={name} />
      <p className="team-name">{name}</p>
    </Link>
  )
}

export default TeamCard
