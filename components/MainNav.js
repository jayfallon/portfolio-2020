import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const NavStyles = styled.nav`
  a.active {
    background: pink;
  }
`;

export default function MainNav({ navigation }) {
  const router = useRouter();
  console.log(router);
  return (
    <NavStyles>
      <ul>
        {navigation.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.slug}>
                <a className={router.pathname === nav.slug ? "active" : ""}>
                  {nav.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </NavStyles>
  );
}
