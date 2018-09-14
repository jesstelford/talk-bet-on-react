import React from 'react'
import styled from 'styled-components'
import { updaters, constants } from 'mdx-deck'
import Footer from './footer'

const Bottom = styled.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
})

const Button = styled.div([], {
  cursor: 'pointer',
  width: '64px',
  height: '100vh'
})
const Previous = styled(Button)([], {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
})
const Next = styled(Button)([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
})

export default class Provider extends React.Component {
  render () {
    const {
      children,
      mode,
      index,
      length,
      update,
    } = this.props

    if (mode !== constants.modes.normal) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {children}
        <Bottom>
          <Footer {...{ mode, index, length }} />
        </Bottom>
        <Previous
          role='button'
          title='Previous Slide'
          onClick={e => {
            update(updaters.previous)
          }}
        />
        <Next
          role='button'
          title='Next Slide'
          onClick={e => {
            update(updaters.next)
          }}
        />
      </React.Fragment>
    )
  }
}
