import createMiddleware from "next-intl/middleware";
import {defaultLocale, locales} from "./lib/i18n";

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};


