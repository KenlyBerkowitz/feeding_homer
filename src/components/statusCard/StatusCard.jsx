import './statusCard.css'
import Homer from '../../assets/homer_happy.jpg'

function StatusCard(props) {
    return (
      <div className='statusCard-parent-container'>
        <div className='statusCard-child-container'>
          <img className='picture' src={Homer} alt='Happy Homer'></img>
          <p className='status-text'>I am Happy</p>
        </div>
      </div>
    );
}

export default StatusCard;