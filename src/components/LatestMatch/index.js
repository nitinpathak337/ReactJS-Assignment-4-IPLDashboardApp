// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    venue,
    date,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="recent-match-card">
      <div>
        <p className="competing-name">{competingTeam}</p>
        <p className="basic-details-para-date">{date}</p>
        <p className="basic-details-para">{venue}</p>
        <p className="basic-details-para">{result}</p>
      </div>
      <div className="competing-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-logo"
        />
      </div>
      <div>
        <p className="match-details-para-heading">First Innings</p>
        <p className="match-details-para">{firstInnings}</p>
        <p className="match-details-para-heading">Second Innings</p>
        <p className="match-details-para">{secondInnings}</p>
        <p className="match-details-para-heading">Man Of The Match</p>
        <p className="match-details-para">{manOfTheMatch}</p>
        <p className="match-details-para-heading">Umpires</p>
        <p className="match-details-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
