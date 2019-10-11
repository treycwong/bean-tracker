import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `blockstack`]} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p>
              Welcome to DRIPR
            </p>
            <ul>
              <li>
                Sign In or Register with Blockstack <Link to="/page-2/">page 2.</Link>{' '}
              </li>
              <li>
                Then start brewing!
              </li>
            </ul>
            <Link to="/app/">
                <b>Go to App (with Blockstack)</b>
            </Link>{' '}

            <hr />
          </div>
          <div
            style={{
              borderLeft: 'brown',
              borderLeftStyle: 'dashed',
              paddingLeft: '3rem',
            }}
          >
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
              <Image />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
