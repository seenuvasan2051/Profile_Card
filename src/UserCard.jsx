import PropTypes from "prop-types";

const userData = [
  {
    name: "MS Dhoni",
    city: "Chennai",
    franchise: "Chennai Super Kings",
    skills: ["2010", "2011", "2018", "2021", "2023"],
    online: true,
    profile: "/images/dhoni.jpg",
  },

  {
    name: "Virat Kholi",
    city: "Bangalore",
    franchise: "Royal Challengers Bangaluru",
    skills: ["No Trophies Yet"],
    online: false,
    profile: "/images/virat.jpeg",
  },

  {
    name: "Rohit Sharma",
    city: "Mumbai",
    franchise: "Mumbai Indians",
    skills: ["2013", "2015", "2017", "2019", "2020"],
    online: false,
    profile: "/images/rohit.jpeg",
  },

  {
    name: "Shreyas Iyer",
    city: "Kolkata",
    franchise: "Kolkata Knight Riders",
    skills: ["2012", "2014", "2024"],
    online: false,
    profile: "/images/shreyas.jpeg",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img className="img" src={props.profile} alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.franchise}</p>
      <div className="buttons">
        <button className="primary">Messages</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Achivements</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          franchise={user.franchise}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  franchise: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
