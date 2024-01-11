import { Link } from "react-router-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Son Gün!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="text-muted small">
        {hours}:{minutes}:{seconds} Sol
      </span>
    );
  }
};

const CardDealsOfTheDay = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title pb-3 border-bottom">
          {props.title} <i className="bi bi-stopwatch text-primary" />{" "}
          <Countdown date={props.endDate} renderer={renderer} />
          <span className="float-end">
            <Link to={props.to} className="btn btn-sm btn-outline-primary">
              Hepsini gör
            </Link>
          </span>
        </h5>
        {props.children}
      </div>
    </div>
  );
};

export default CardDealsOfTheDay;
