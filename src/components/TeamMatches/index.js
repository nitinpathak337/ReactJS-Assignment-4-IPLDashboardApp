// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamSpecificDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamsMatchesDetails()
  }

  getTeamsMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const promise = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await promise.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamSpecificDetails: updatedData, isLoading: false})
  }

  displayData = () => {
    const {teamSpecificDetails} = this.state
    const {
      recentMatches,
      latestMatchDetails,
      teamBannerUrl,
    } = teamSpecificDetails
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      venue: latestMatchDetails.venue,
      date: latestMatchDetails.date,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      venue: eachItem.venue,
      date: eachItem.date,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    return (
      <div className="bg-teams">
        <img src={teamBannerUrl} alt="team banner" className="team-image" />
        <p className="latest-matches">Latest Matches</p>
        <LatestMatch latestMatchDetails={updatedLatestMatchDetails} />
        <ul className="matches-list">
          {updatedRecentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="`bg-teams">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          this.displayData()
        )}
      </div>
    )
  }
}

export default TeamMatches
