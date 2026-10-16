import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { TRACK_NAV, CROSS_LINK } from "../tracks";

export default function TrackLayout({ lang, track }) {
  const isDev = track === "dev";
  const items = isDev ? TRACK_NAV.dev[lang] : TRACK_NAV.hemsidor;
  const crossLink = isDev ? CROSS_LINK.dev[lang] : CROSS_LINK.hemsidor;

  return (
    <>
      <Nav lang={lang} items={items} crossLink={crossLink} showLangToggle={isDev} />
      <main className="pageShell routeTransition" data-page-shell>
        <Outlet />
      </main>
      <Footer lang={lang} links={items} />
    </>
  );
}
