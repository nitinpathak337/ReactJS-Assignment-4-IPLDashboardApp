// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamList: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const promise = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await promise.json()

    const formattedData = iplData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamList: formattedData, isLoading: false})
  }

  getTeamCard = () => {
    const {teamList} = this.state

    return (
      <ul className="teams-list">
        {teamList.map(eachItem => (
          <TeamCard key={eachItem.id} teamDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg">
        <div className="logo-heading-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          this.getTeamCard()
        )}
      </div>
    )
  }
}

export default Home
