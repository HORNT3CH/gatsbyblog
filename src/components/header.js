import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  margin: 0;
  padding: 20px;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkblue`,
      marginBottom: 0,
    }}
  >
    <div>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
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
