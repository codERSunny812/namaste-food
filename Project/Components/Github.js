import React, { useState, useEffect } from "react";

function GitHubProfile({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div className="github-profile-card">
      {userData ? (
        <>
          <img src={userData.avatar_url} alt={`${username}'s GitHub Avatar`} />
          <h2>{username}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Public Repositories: {userData.public_repos}</p>
          <p>Location: {userData.location}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GitHubProfile;
