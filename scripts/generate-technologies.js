import { mkdirSync, writeFileSync } from 'node:fs';
import * as icons from 'simple-icons';

// https://simpleicons.org/
const list = [
    { name: 'JavaScript', slug: 'javascript', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
    { name: 'Go', slug: 'go', url: 'https://go.dev' },
    { name: 'Rust', slug: 'rust', url: 'https://www.rust-lang.org' },
    { name: 'C', slug: 'c', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { name: 'C#', url: 'https://learn.microsoft.com/dotnet/csharp/' },
    { name: '.NET', slug: 'dotnet', url: 'https://dotnet.microsoft.com' },
    { name: 'Bash', slug: 'gnubash', url: 'https://www.gnu.org/software/bash/' },
    { name: 'Visual Basic', url: 'https://learn.microsoft.com/dotnet/visual-basic/' },
    { name: 'HTML', slug: 'html5', url: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'CSS', slug: 'css', url: 'https://developer.mozilla.org/docs/Web/CSS' },
    { name: 'GDScript', slug: 'godotengine', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/' },
    { name: 'MySQL', slug: 'mysql', url: 'https://www.mysql.com' },
    { name: 'PostgreSQL', slug: 'postgresql', url: 'https://www.postgresql.org' },
    { name: 'SQLite', slug: 'sqlite', url: 'https://sqlite.org' },
    { name: 'Bun', slug: 'bun', url: 'https://bun.sh' },
    { name: 'React', slug: 'react', url: 'https://react.dev' },
    { name: 'Node.js', slug: 'nodedotjs', url: 'https://nodejs.org' },
    { name: 'Java', slug: 'openjdk', url: 'https://openjdk.org' },
    { name: 'PHP', slug: 'php', url: 'https://www.php.net' },
    { name: 'NGINX', slug: 'nginx', url: 'https://nginx.org' },
    { name: 'Apache HTTPd', slug: 'apache', url: 'https://httpd.apache.org' },
    { name: 'Docker', slug: 'docker', url: 'https://www.docker.com' },
    { name: 'Cloudflare', slug: 'cloudflare', url: 'https://www.cloudflare.com' },
    { name: 'WEM Script', "url": "https://docs.wem.io/platform/template-editor/miscellaneous/script" },
    { name: 'Vite', slug: 'vite', url: 'https://vite.dev' },
    { name: 'Astro', slug: 'astro', url: 'https://astro.build' },
    { name: 'PowerShell', url: 'https://learn.microsoft.com/powershell/' },
    { name: 'Next.js', slug: 'nextdotjs', url: 'https://nextjs.org' },
    { name: 'Bootstrap', slug: 'bootstrap', url: 'https://getbootstrap.com' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', url: 'https://tailwindcss.com' },
    { name: 'Kotlin', slug: 'kotlin', url: 'https://kotlinlang.org' },
    { name: 'TypeScript', slug: 'typescript', url: 'https://www.typescriptlang.org' },
    { name: 'Python', slug: 'python', url: 'https://www.python.org' },
    { name: 'Zig', slug: 'zig', url: 'https://ziglang.org' },
    { name: 'Laravel', slug: 'laravel', url: 'https://laravel.com' },
    { name: 'Puppeteer', slug: 'puppeteer', url: 'https://pptr.dev' },
    { name: 'Jest', slug: 'jest', url: 'https://jestjs.io' },
    { name: 'discord.js', slug: 'discorddotjs', url: 'https://discord.js.org' },
    { name: 'discord.py', url: 'https://discordpy.readthedocs.io' },
    { name: 'Jenkins', slug: 'jenkins', url: 'https://www.jenkins.io' },
    { name: 'GitHub Actions', slug: 'githubactions', url: 'https://github.com/features/actions' },
    { name: 'Protocol Buffers', url: 'https://protobuf.dev' },
    { name: 'Ollama', slug: 'ollama', url: 'https://ollama.com' },
    { name: 'llama.cpp', url: 'https://github.com/ggml-org/llama.cpp' },
    { name: 'PyTorch', slug: 'pytorch', url: 'https://pytorch.org' },
    { name: 'Flask', slug: 'flask', url: 'https://flask.palletsprojects.com' },
    { name: 'Jinja', slug: 'jinja', url: 'https://jinja.palletsprojects.com' },
    { name: 'Ansible', slug: 'ansible', url: 'https://www.ansible.com' },
    { name: 'Linux', slug: 'linux', url: 'https://www.kernel.org' },
    { name: 'Lua', slug: 'lua', url: 'https://www.lua.org' },
    { name: 'Qt', slug: 'qt', url: 'https://www.qt.io' },
    { name: 'GTK', slug: 'gtk', url: 'https://gtk.org' },
    { name: 'MUI', slug: 'mui', url: 'https://mui.com' },
    { name: 'GameMaker Language', slug: 'gamemaker', url: 'https://manual.gamemaker.io' },
    { name: "Portainer", slug: "portainer", url: "https://www.portainer.io/" },
    { name: "Kubernetes", slug: "kubernetes", url: "https://kubernetes.io/" },
    { name: "OpenShift", slug: "redhatopenshift", url: "https://www.redhat.com/en/technologies/cloud-computing/openshift" },

];

const bySlug = new Map(
    Object.values(icons)
        .filter((icon) => icon && typeof icon === 'object' && 'slug' in icon)
        .map((icon) => [icon.slug, icon]),
);

const entries = list.map(({ name, slug, url }) => {
    const entry = { name };
    if (url) entry.url = url;

    if (slug) {
        const icon = bySlug.get(slug);

        if (icon) {
          entry.hex = `#${icon.hex}`;
          entry.path = icon.path;
        }

    }

    return entry;
});

const output = `
export interface Technology {
    name: string;
    url?: string;
    hex?: string;
    path?: string;
}

export const technologies: Technology[] = ${JSON.stringify(entries, null, 4)};
`;

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/technologies.ts', output);
