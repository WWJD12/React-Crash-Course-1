import { Link } from "react-router-dom";

function Nav() {
    return (<nav>
            <link to="/">Home</link>
            <link to="/user/ronaldo">Ronaldo</link>
            <link to="/user/messi">Messi</link>
            <link to="/user/br4gg">David Bragg</link>
          </nav>
          )
}
export default Nav;