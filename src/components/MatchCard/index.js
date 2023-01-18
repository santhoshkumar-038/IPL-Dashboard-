// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {matchStatus, result, competingTeam, competingTeamLogo} = matchDetails
  console.log(matchStatus, result, competingTeam, competingTeamLogo)
  const lossOrWon = matchStatus === 'Won' ? 'apply-green' : 'apply-red'

  return (
    <li className="competing-team-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-image-url"
      />
      <p className="competing-team-text">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={`result-status-text ${lossOrWon}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
