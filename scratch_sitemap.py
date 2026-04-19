import re
from datetime import datetime

with open('scripts/prerender.js', 'r') as f:
    content = f.read()

# Extract routes from seoRoutes array
# We can find all lines with "path: '/something'"
paths = set()
for match in re.finditer(r"path:\s*['\"]([^'\"]+)['\"]", content):
    paths.add(match.group(1))

today = "2026-04-19" # standardizing on the current given project clock

xml_parts = []
xml_parts.append('<?xml version="1.0" encoding="UTF-8"?>')
xml_parts.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

def add_url(loc, changefreq="weekly", priority="0.80"):
    xml_parts.append('  <url>')
    xml_parts.append(f'    <loc>https://natively.software{loc}</loc>')
    xml_parts.append(f'    <lastmod>{today}</lastmod>')
    xml_parts.append(f'    <changefreq>{changefreq}</changefreq>')
    xml_parts.append(f'    <priority>{priority}</priority>')
    xml_parts.append('  </url>')

# Add home
add_url('/', 'daily', '1.0')
add_url('/ru/', 'daily', '0.9')

structure_lines = []
structure_lines.append('# Natively AI Site Architecture')
structure_lines.append('')
structure_lines.append('Total URLs: ' + str(2 + len(paths)*2))
structure_lines.append('')
structure_lines.append('## Routes Organization')

# Categorize
core_pages = []
blog_posts = []
docs = []

for p in sorted(list(paths)):
    if p.startswith('/blog'):
        blog_posts.append(p)
    elif p.startswith('/docs'):
        docs.append(p)
    else:
        core_pages.append(p)

    # Determine priority
    pr = "0.90"
    if p in ['/ai-interview-assistant', '/cluely-alternative']: pr = "0.95"
    if p.startswith('/blog/'): pr = "0.85"

    add_url(p, 'weekly', pr)
    # ru version
    ru_path = '/ru' + p
    add_url(ru_path, 'weekly', str(round(float(pr)-0.05, 2)))

xml_parts.append('</urlset>')

with open('public/sitemap.xml', 'w') as f:
    f.write('\n'.join(xml_parts) + '\n')

structure_lines.append('\n### Core Pages')
for c in core_pages: structure_lines.append(f'- {c}')
structure_lines.append('\n### Blog Posts')
for b in blog_posts: structure_lines.append(f'- {b}')
structure_lines.append('\n### Documentation')
for d in docs: structure_lines.append(f'- {d}')

with open('STRUCTURE.md', 'w') as f:
    f.write('\n'.join(structure_lines) + '\n')
