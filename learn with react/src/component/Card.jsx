import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
        alt="Profile"
      />

      <div className="card-content">
        <h2>harsh</h2>

        <p>
          Frontend Developer passionate about React and modern web
          development.
        </p>

        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Card;