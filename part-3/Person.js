const Person = (props) => {
  let reply;
  let name;

  if (props.age >= 18) {
    reply = "Please go vote!";
  } else {
    reply = "You must be 18.";
  }

  if (props.name.length > 6) {
    name = props.name.slice(0, 6);
  } else {
    name = props.name;
  }
  return (
    <div>
      <p>Learn more about this person.</p>
      <h3>{reply}</h3>
      <p>{name}</p>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
