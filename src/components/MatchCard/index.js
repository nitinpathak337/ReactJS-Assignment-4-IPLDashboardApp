// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = details
  const colorStatus = matchStatus === 'Won' ? 'win' : 'lose'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <div>
        <p className="teams-name">{competingTeam}</p>

        <p className="results">{result}</p>
        <p className={`match-status ${colorStatus}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
