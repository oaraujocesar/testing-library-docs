import React from 'react'
import useThemeContext from '@theme/hooks/useThemeContext'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export const Showcase = ({users}) => {
  const {siteConfig} = useDocusaurusContext()
  const {isDarkTheme} = useThemeContext()
  
  const {baseUrl} = siteConfig
  
  return users.map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img
        src={isDarkTheme ? `${baseUrl}${user.darkImage}` : `${baseUrl}${user.lightImage}`}
        alt={user.caption}
        title={user.caption}
      />
    </a>
  ))
}
