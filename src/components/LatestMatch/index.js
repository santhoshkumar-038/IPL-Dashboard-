import './index.css'

const LatestMatch = props => {
  const {teamMatchesData} = props
  // console.log(teamMatchesData)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = teamMatchesData
  console.log(competingTeam, competingTeamLogo, date, firstInnings)

  return (
    <div className="latest-matches-bg-container">
      <div className="competing-team-details">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="competing-team-image">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="match-details">
        <h1 className="first-innings-heading">First Innings</h1>
        <p className="first-innings">{firstInnings}</p>
        <h1 className="second-innings-heading">Second Innings</h1>
        <p className="second-innings">{secondInnings}</p>
        <h1 className="man-of-the-match-heading">Man Of The Match</h1>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <h1 className="umpires-heading">Umpires</h1>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
