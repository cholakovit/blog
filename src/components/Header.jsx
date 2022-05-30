import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div className="headerMenu">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/users'>Users</Link>
        </div>
    </div>
  )
}

export default Header