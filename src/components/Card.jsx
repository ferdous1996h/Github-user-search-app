import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { BsBuildingsFill } from 'react-icons/bs';
export default function Card({ gitInfo }) {
  const date = new Date(gitInfo.created_at)
    .toUTCString()
    .split(' ')
    .slice(1, 4)
    .join(' ');

  return (
    <section className="card_Main">
      {gitInfo && (
        <>
          <div className="card_Head">
            <div className="card_Head--img">
              <img src={gitInfo?.avatar_url} alt="" />
            </div>
            <div>
              <h2>{gitInfo?.name}</h2>
              <p className="userName">@{gitInfo?.login}</p>
              <p>Joined {date}</p>
            </div>
          </div>
          <div className="bio" style={{ textAlign: 'center' }}>
            Bio: {gitInfo?.bio ? gitInfo?.bio : 'This profile has no bio'}
          </div>
          <div className="gitHUpdateInfo">
            <div className="info">
              <span>Repos</span>
              <h2>{gitInfo?.public_repos}</h2>
            </div>
            <div className="info">
              <span>Followers</span>
              <h2>{gitInfo?.followers}</h2>
            </div>
            <div className="info">
              <span>Following</span>
              <h2>{gitInfo?.following}</h2>
            </div>
          </div>
          <footer className="card_footer">
            <div className="placeLink">
              <FaLocationDot />
              <span>{gitInfo?.location}</span>
            </div>
            <div className="placeLink">
              <FaLink />
              <a href={gitInfo?.html_url}>{gitInfo?.html_url}</a>
            </div>
            <div className="placeLink">
              <FaTwitter />
              <span>
                {gitInfo?.twitter_username
                  ? gitInfo?.twitter_username
                  : 'Not available'}
              </span>
            </div>
            <div className="placeLink">
              <BsBuildingsFill />
              <span>{gitInfo?.company}</span>
            </div>
          </footer>
        </>
      )}
    </section>
  );
}
