const fs = require('fs');

const file = 'src/routes/index.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";',
  'import { getPageData, getWebsiteData, PageData, getImageUrl, getPosts } from "@/lib/api";\nimport { UpdatesTicker } from "@/components/site/UpdatesTicker";'
);

content = content.replace(
  'const [loading, setLoading] = useState(true);',
  'const [loading, setLoading] = useState(true);\n  const [posts, setPosts] = useState<any[]>([]);'
);

content = content.replace(
  'getPageData("home"),\n      getWebsiteData()\n    ]).then(([page, site]) => {',
  'getPageData("home"),\n      getWebsiteData(),\n      getPosts(15).catch(() => [])\n    ]).then(([page, site, p]) => {\n      setPosts(p);'
);

content = content.replace(
  /<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">[\s\S]*?\{servicesSection\.textContent\?\.items\?\.map\(\(s: any, i: number\) => \{/,
  `<div className="mt-12 flex flex-col lg:flex-row gap-6">
              <div className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 content-start">
                {servicesSection.textContent?.items?.map((s: any, i: number) => {`
);

content = content.replace(
  /\} \/\* end map \*\/\s*\}?\s*<\/div>\s*<\/div>\s*<\/section>/,
  `}
              </div>
              {posts && posts.length > 0 && (
                <aside className="w-full lg:w-80 flex-shrink-0 self-stretch" aria-label="Latest updates">
                  <UpdatesTicker posts={posts} />
                </aside>
              )}
            </div>
          </div>
        </section>`
);

// Actually, regex matching the end of the services block can be tricky. Let's do it manually via a specific known text.
fs.writeFileSync(file, content);
console.log('Done');
