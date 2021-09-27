const Tweet = (props) => {
  const { username, name, date, message } = props;

  return (
    <div>
      <h3>Username: {username}</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Date: {date}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  );
};
