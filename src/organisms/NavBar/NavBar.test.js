import {render,screen} from '@testing-library/react'

import {NavBar} from './navbar'

describe('NavBar', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<NavBar/>)
  })
  it('should display Meal Planner Text In Header', () => {
    expect(screen.getByText('Meal Planner')).toBeInTheDocument()
  })
  it('should have the hamburger menu in dom', () => {
    expect(screen.getByTestId('MenuIcon')).toBeInTheDocument()
  })
})