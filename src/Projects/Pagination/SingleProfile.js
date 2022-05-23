import React from 'react'

const SingleProfile = ({ profileData }) => {
  const { login, avatar_url, html_url } = profileData

  return (
    <div className='singleProfile'>
      <div className="singleProfile_img">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="singleProfile_text">
        <h3>{login}</h3>
        <a href={html_url} target="_blank">
          <button>View Profile</button>
        </a>
      </div>

    </div>
  )
}

export default SingleProfile