import React from "react"
import PropTypes from "prop-types"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="title">
        <Logo siteT={siteTitle} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
