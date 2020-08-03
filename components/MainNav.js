import Link from "next/link";

import links from "../public/siteLinks.json";

export default function MainNav() {
  return (
    <nav>
      Nav goes here
      <ul>
        {links.website.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
