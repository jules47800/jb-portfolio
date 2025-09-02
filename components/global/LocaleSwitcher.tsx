"use client";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import {locales, Locale} from "@/lib/i18n";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${next}`);
      return;
    }
    if ((locales as readonly string[]).includes(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    router.push("/" + segments.join("/"));
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border p-1">
      {(locales as readonly Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`h-8 px-2 rounded-lg ${l === locale ? "bg-[#007DBC] text-white" : "hover:bg-accent"}`}
          aria-pressed={l === locale}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}


