import './statusCard.css'
import HappyHomer from '../../assets/homer_happy.jpg'
import MadHomer from '../../assets/mad_homer.jpg'

function StatusCard(props) {
    return (
      <div className='statusCard-parent-container'>
        <div className='statusCard-child-container'>
          <img className='picture' src={props.statusText === "Happy Boy!" ? HappyHomer : MadHomer } alt='Happy Homer'></img>
          <p className='status-text'>{props.statusText}</p>
        </div>
      </div>
    );
}

export default StatusCard;