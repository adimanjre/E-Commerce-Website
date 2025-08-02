import { Link, NavLink } from "react-router";
import Container from "../Layout/Container";
import { linkData } from "../../data";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Search } from "../Svg/icon";

const Navigation = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center py-3">
        <div className="flex gap-10 items-center">
          <div className="text-3xl font-semibold text-pink-500">
            <Link to={"/"}>Hekto</Link>
          </div>
          <ul className="flex gap-5 items-center">
            {linkData.map((link) => (
              <NavLink
                to={link.url}
                key={link.name}
                className="hover:text-pink-500"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <form className="flex gap-3">
          <Input type={"search"} placeholder={"Search..."} />
          <Button text={<Search />} />
        </form>
      </nav>
    </Container>
  );
};

export default Navigation;
