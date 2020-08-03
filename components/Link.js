import Link from "next/link";
import { useRouter } from "next/router";

export default function NextLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
