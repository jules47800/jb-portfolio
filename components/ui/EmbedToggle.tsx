"use client";
import {useState} from "react";

export function EmbedToggle({
  src,
  labelClosed,
  labelOpen,
  className = "",
}: {
  src: string;
  labelClosed: string;
  labelOpen: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center rounded-2xl bg-[#007DBC] px-5 text-white hover:bg-[#0067A0]"
      >
        {open ? labelOpen : labelClosed}
      </button>
      {open ? (
        <div className="mt-4 rounded-2xl border overflow-hidden">
          <div className="aspect-[16/10]">
            <iframe title={labelClosed} src={src} className="w-full h-full" allowFullScreen />
          </div>
        </div>
      ) : null}
    </div>
  );
}


