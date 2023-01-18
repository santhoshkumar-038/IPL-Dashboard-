import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getIplDashboardData()
  }

  getIplDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    const {teams} = teamData
    const updatedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="dashboard-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="team-details-container">
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          ) : (
            teamData.map(eachItem => (
              <TeamCard teamDetails={eachItem} key={eachItem.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
