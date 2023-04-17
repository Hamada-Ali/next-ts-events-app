import { type } from 'os'
import React, { ReactNode, Fragment } from 'react'
import MainHeader from './MainHeader'

type propTypes = {
    children: ReactNode
}

const Layout = ({children}: propTypes) => {
  return (
    <Fragment>
        <MainHeader />
        <main>{children}</main>
    </Fragment>
  )
}

export default Layout