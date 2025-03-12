export const NavBar = ({children, styleNav, styleUl}) => {
  return (
    <nav className={styleNav}>
      <ul className={styleUl}>
        {
          children
        }
      </ul>
    </nav>
  )
}
