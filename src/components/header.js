import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <Link to="/">Home</Link>
      <Link to="/">Product</Link>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/">Career</Link>
      <Link to="/">Contact Us</Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `White`,
            textDecoration: `none`,
          }}
        >
          
          {"PulseXR"}

        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
