import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type MDXFrontmatter = {
  title: string;
  slug: string;
  tags?: string[];
  links?: Record<string, string>;
  cover?: string;
  summary?: string;
  kpis?: {label: string; value: string}[];
};

export function readMDXFile(dir: string, slug: string) {
  const full = path.join(process.cwd(), dir, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const {data, content} = matter(raw);
  return {frontmatter: data as MDXFrontmatter, content};
}

export function listMDX(dir: string) {
  const full = path.join(process.cwd(), dir);
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const {data} = matter(raw);
      return data as MDXFrontmatter;
    });
}


