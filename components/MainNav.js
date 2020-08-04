import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavStyles = styled.nav`
  a.active {
    background: pink;
  }
`;

import links from "../public/routes.json";

export default function MainNav({ navigations }) {
  const router = useRouter();
  console.log(navigations, "navvies");
  return (
    <NavStyles>
      Nav goes here
      <ul>
        {links.website.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={link.href}>
                <a className={router.pathname === link.href ? "active" : ""}>
                  {link.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </NavStyles>
  );
}
