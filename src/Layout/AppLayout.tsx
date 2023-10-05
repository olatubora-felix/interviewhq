import SideNav from "../Layout/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const RootLayout = ({ children }: Props) => {
  return (
    <section className="flex flex-col">
      <nav className="">
        <SideNav />
      </nav>
      <main className="bg-white]">{children}</main>
    </section>
  );
};

export default RootLayout;
