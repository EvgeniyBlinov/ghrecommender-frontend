import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './index'

const stories = storiesOf('Page - Home', module)
stories.addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
stories.add('<HomePage />', () => <HomePage />)
