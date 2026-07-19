import "./Card.css";

function Card(props) {
  return (
    <div className="card">

      <div className="top">

        <div className="company">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="logo"
          />
        </div>

        <button className="save">🔖</button>

      </div>

      <div className="middle">
        <h2>Frontend Developer</h2>
        <p>Google</p>

        <div className="details">
          <span>{props.skill}</span>
          <span>Remote</span>
          <span>2+ Years</span>
        </div>
      </div>

      <hr />

      <div className="bottom">
        <h3>⭐ 4.8</h3>
        <button className="apply">Apply Now</button>
      </div>

    </div>
  );
}

export default Card;