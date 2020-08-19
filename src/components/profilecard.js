import React from "react"
import Image from "gatsby-image"
import { object } from "prop-types"

const ProfileCard = ({ profile, placeholder }) => {
  let cardImage = object
  if (profile.picture == null) {
    cardImage = placeholder.childImageSharp.fluid
  } else {
    cardImage = profile.picture.localFiles[0].childImageSharp.fluid
  }

  return (
    <>
      {/* start of card */}
      <article>
        <Image fluid={cardImage} className="cardImage" alt={profile.name} />
        <div className="information">
          <p className="name">
            {profile.name} - {profile.jobRole}
          </p>
          <p className="twitter">{profile.twitterUsername}</p>
          <p className="askabout">ASK ME ABOUT: {profile.awesomeAt}</p>
          <p className="fact">RANDOM FACT: {profile.randomFact}</p>
        </div>
      </article>
      {/* end of card */}
    </>
  )
}

export default ProfileCard
