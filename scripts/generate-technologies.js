import { mkdirSync, writeFileSync } from 'node:fs';
import * as icons from 'simple-icons';

// https://simpleicons.org/
const list = [

    // front (https://www.tiobe.com/tiobe-index/)
    { name: 'JavaScript', slug: 'javascript', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
    { name: 'Cloudflare', slug: 'cloudflare', url: 'https://www.cloudflare.com' },
    { name: 'Docker', slug: 'docker', url: 'https://www.docker.com' },
    { name: 'Rust', slug: 'rust', url: 'https://www.rust-lang.org' },
    { name: 'C', slug: 'c', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { name: 'C#', url: 'https://learn.microsoft.com/dotnet/csharp/' },
    { name: "Swift", slug: "swift", url: "https://www.swift.org/" },
    { name: 'Visual Basic', url: 'https://learn.microsoft.com/dotnet/visual-basic/' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', url: 'https://tailwindcss.com' },
    { name: '.NET', slug: 'dotnet', url: 'https://dotnet.microsoft.com' },
    { name: 'Bash', slug: 'gnubash', url: 'https://www.gnu.org/software/bash/' },
    { name: 'Python', slug: 'python', url: 'https://www.python.org' },
    { name: 'HTML', slug: 'html5', url: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'CSS', slug: 'css', url: 'https://developer.mozilla.org/docs/Web/CSS' },
    { name: 'MySQL', slug: 'mysql', url: 'https://www.mysql.com' },
    { name: 'Go', slug: 'go', url: 'https://go.dev' },
    { name: 'PHP', slug: 'php', url: 'https://www.php.net' },
    { name: 'Java', slug: 'openjdk', url: 'https://openjdk.org' },


    // more
    { name: 'SQLite', slug: 'sqlite', url: 'https://sqlite.org' },
    { name: 'React', slug: 'react', url: 'https://react.dev' },
    { name: 'Node.js', slug: 'nodedotjs', url: 'https://nodejs.org' },
    { name: 'NGINX', slug: 'nginx', url: 'https://nginx.org' },
    { name: 'Apache HTTPd', slug: 'apache', url: 'https://httpd.apache.org' },
    { name: 'GDScript', slug: 'godotengine', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/' },
    { name: 'WEM Script', "url": "https://docs.wem.io/platform/template-editor/miscellaneous/script" },
    { name: 'Vite', slug: 'vite', url: 'https://vite.dev' },

    { name: 'Astro', slug: 'astro', url: 'https://astro.build' },
    { name: 'PowerShell', url: 'https://learn.microsoft.com/powershell/' },
    { name: 'Next.js', slug: 'nextdotjs', url: 'https://nextjs.org' },
    { name: 'Bootstrap', slug: 'bootstrap', url: 'https://getbootstrap.com' },
    { name: 'Kotlin', slug: 'kotlin', url: 'https://kotlinlang.org' },
    { name: 'TypeScript', slug: 'typescript', url: 'https://www.typescriptlang.org' },
    { name: 'Bun', slug: 'bun', url: 'https://bun.sh' },
    { name: 'Zig', slug: 'zig', url: 'https://ziglang.org' },
    { name: 'Laravel', slug: 'laravel', url: 'https://laravel.com' },
    { name: 'PostgreSQL', slug: 'postgresql', url: 'https://www.postgresql.org' },
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
    { name: "Unity", slug: "unity", url: "https://unity.com/" },
    { name: "SQLAlchemy", slug: "sqlalchemy", url: "https://www.sqlalchemy.org/" },
    { name: "Fedora Linux", slug: "fedora", url: "https://fedoraproject.org/" },
    { name: "RHEL", slug: "redhat", url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux" },
    { name: "Ubuntu", slug: "ubuntu", url: "https://ubuntu.com/" },
    { name: "JSFiddle", slug: "jsfiddle", url: "https://jsfiddle.net/" },
    { name: "Pretier", slug: "prettier", url: "https://prettier.io/" },
    { name: "LottieFiles", slug: "lottiefiles", url: "https://lottiefiles.com/" },
    { name: "Preact", slug: "preact", url: "https://preactjs.com/" },
    { name: "Raylib", slug: "raylib", url: "https://www.raylib.com/" },
    { name: "WebGL", slug: "webgl", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" },
    { name: "Anaconda", slug: "anaconda", url: "https://www.anaconda.com/" },
    { name: "Roblox Studio", slug: "robloxstudio", url: "https://create.roblox.com/" },
    { name: "FFmpeg", slug: "ffmpeg", url: "https://ffmpeg.org/" },
    { name: "Debian", slug: "debian", url: "https://www.debian.org/" },
    { name: "Proxmox", slug: "proxmox", url: "https://www.proxmox.com/" },
    { name: "Electron", slug: "electron", url: "https://www.electronjs.org/" },
    { name: "Tauri", slug: "tauri", url: "https://v2.tauri.app/" },
    { name: "Android Studio", slug: "androidstudio", url: "https://developer.android.com/studio" },
    { name: "Flutter", slug: "flutter", url: "https://flutter.dev/" },
    { name: "Dart", slug: "dart", url: "https://dart.dev/" },
    { name: "shadcn/ui", slug: "shadcnui", url: "https://ui.shadcn.com/" },
    { name: "Zod", slug: "zod", url: "https://zod.dev/" },
    { name: "Zed", slug: "zedindustries", url: "https://zed.dev/" },
    { name: "WordPress", slug: "wordpress", url: "https://wordpress.org/" },
    { name: "Visual Studio", url: "https://visualstudio.microsoft.com/" },
    { name: "VSCode", url: "https://code.visualstudio.com/" },

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
