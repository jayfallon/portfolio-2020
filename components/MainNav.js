import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import HeaderContext from "context/HeaderContext";

const NavStyles = styled.nav`
  a {
    background: ${(props) => (props.color ? "yellow" : "black")};
    color: ${(props) => (props.color ? "black" : "yellow")};
  }
  a.active {
    background: ${(props) => (props.color ? "black" : "yellow")};
    color: ${(props) => (props.color ? "white" : "black")};
  }
`;

export default function MainNav() {
  const router = useRouter();
  // console.log(router);
  // const { menuItems, color } = useContext(HeaderContext);
  return (
    <NavStyles>
      <ul>
        <li>links</li>
        {/* {menuItems.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.slug}>
                <a className={router.pathname === nav.slug ? "active" : ""}>
                  {nav.title}
                </a>
              </Link>
            </li>
          );
        })} */}
      </ul>
    </NavStyles>
  );
}
