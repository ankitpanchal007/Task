import React from 'react'

const HomeLayout = ({title, children}) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  )
}

export default HomeLayout