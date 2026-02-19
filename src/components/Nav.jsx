import { Link } from "react-router-dom";

function Nav() {
    return (<nav>
            <link to="/">Home</link>
            <link to="/users/ronaldo">Ronaldo</link>
            <link to="/users/messi">Messi</link>
            <link to="/users/br4gg">David Bragg</link>
          </nav>
          )
}
export default Nav;