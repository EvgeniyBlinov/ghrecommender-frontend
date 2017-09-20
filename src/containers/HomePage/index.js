// @flow
import React from 'react'

import { Button, Container, Header, Icon, Menu, Segment, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/index'
import Background from '../../components/Background'
import StatisticGroups from '../../components/Statistics'
import { trackClick } from '../../utils'

const renderHeaders = (mobile: boolean) => {
  const fontSize1 = mobile ? '2em' : '4em'
  const fontSize2 = mobile ? '1.5em' : '1.7em'
  return (
    <div>
      <Header
        as="h1"
        content="GHRecommender"
        inverted
        style={{ fontSize: fontSize1, fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
      />
      <Header
        as="h2"
        content="Welcome to the GHRecommender project – the place where you can find the GitHub projects that may be of interest to you but you haven’t discovered yet."
        inverted
        style={{ fontSize: fontSize2, fontWeight: 'normal', marginBottom: '1.7em' }}
      />
    </div>
  )
}

const HomePage = () => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={{ padding: '1em 0em', minHeight: '100vh' }}
      vertical
    >
      <Container style={{ zIndex: 999, position: 'inherit' }}>
        <Menu inverted pointing secondary size="large">
          <Menu.Item as={Link} to="/" active>
            Home
          </Menu.Item>
          <Menu.Item as="a" onClick={trackClick('Menu: How it works')}>
            How it Works
          </Menu.Item>
        </Menu>
      </Container>

      <Container text style={{ zIndex: 999, position: 'inherit' }}>
        <Responsive minWidth={700}>{renderHeaders(false)}</Responsive>
        <Responsive maxWidth={700}>{renderHeaders(true)}</Responsive>
        <Button
          primary
          size="huge"
          as={Link}
          to="/app/recommendations/"
          onClick={trackClick('Get Recommendations')}
        >
          Get Recommendations
          <Icon name="right arrow" />
        </Button>
        <Header
          as="h3" // ToDo: add link
          inverted
        >
          Want to know more? Read check out the{' '}
          <a href="#" color="white">
            “How it Works”
          </a>{' '}
          page.
        </Header>
      </Container>

      <Container text style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <StatisticGroups />
      </Container>

      <Background />
    </Segment>
    <Footer />
  </div>
)

export default HomePage
