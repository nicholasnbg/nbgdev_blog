import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import styled from 'styled-components'



import Layout from '../components/Layout'

class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Hi, I'm Nick</h1>
        <h2>The Short...</h2>
        <p>I'm a software engineer at {`{...insert awesome company here}`}.</p>
        <p>I'm a self taught full stack developer, based in Melbourne, Australia.</p>
        <p>I love all things programming, but have a passion for full stack Javscript (Node + React), as well as Ruby + Rails </p>

        <h2>Nick the... <em>Developer</em></h2>
        <p>dafdgaa</p>

        <h2>Nick the ...</h2>
        <ul>
          <li>
            <BulletHeading>Traveller</BulletHeading>
            <p>I love to travel</p>
          </li>
        </ul>


      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


const BulletHeading = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`