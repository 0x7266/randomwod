export default function Card(props) {
    return (
        <div className="card">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <div className="info">
            <div className="type">{props.type}</div>
            <div className="timecap">{props.timecap}</div>
          </div>
          <div className="movements">{props.movements}</div>
        </div>
      </div>
    );
  }