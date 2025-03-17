import React from 'react'

export const Container = ({ children, styles }) => {
  return (
    <main className={styles}>
      {children}
    </main>
  )
}
