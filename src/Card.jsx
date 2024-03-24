import profilePic from "./assets/profile.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="A man in a hoodie" />
      <h2 className="card-title">Aimable</h2>
      <p className="card-text">I am a student and read books</p>
    </div>
  );
}

export default Card;
