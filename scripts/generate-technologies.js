import { mkdirSync, writeFileSync } from 'node:fs';
import * as icons from 'simple-icons';

// https://simpleicons.org/
const list = [

    // front (https://www.tiobe.com/tiobe-index/)
    { name: 'JavaScript', slug: 'javascript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', category: 'Programmeertalen' },
    { name: 'Cloudflare', slug: 'cloudflare', url: 'https://www.cloudflare.com', category: 'Development en DevOps' },
    { name: 'Docker', slug: 'docker', url: 'https://www.docker.com', category: 'Development en DevOps' },
    { name: 'Rust', slug: 'rust', url: 'https://www.rust-lang.org', category: 'Programmeertalen' },
    { name: 'C', slug: 'c', url: 'https://en.wikipedia.org/wiki/C_(programming_language)', category: 'Programmeertalen' },
    { name: 'C#', url: 'https://learn.microsoft.com/dotnet/csharp/', category: 'Programmeertalen' },
    { name: "Swift", slug: "swift", url: "https://www.swift.org/", category: 'Programmeertalen' },
    { name: 'Visual Basic', url: 'https://learn.microsoft.com/dotnet/visual-basic/', category: 'Programmeertalen' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', url: 'https://tailwindcss.com', category: 'Frameworks en libraries' },
    { name: '.NET', slug: 'dotnet', url: 'https://dotnet.microsoft.com', category: 'Frameworks en libraries' },
    { name: 'Bash', slug: 'gnubash', url: 'https://www.gnu.org/software/bash/', category: 'Programmeertalen' },
    { name: 'Python', slug: 'python', url: 'https://www.python.org', category: 'Programmeertalen' },
    { name: 'HTML', slug: 'html5', url: 'https://developer.mozilla.org/docs/Web/HTML', category: 'Programmeertalen' },
    { name: 'CSS', slug: 'css', url: 'https://developer.mozilla.org/docs/Web/CSS', category: 'Programmeertalen' },
    { name: 'MySQL', slug: 'mysql', url: 'https://www.mysql.com', category: 'Tools en platforms' },
    { name: 'Go', slug: 'go', url: 'https://go.dev', category: 'Programmeertalen' },
    { name: 'PHP', slug: 'php', url: 'https://www.php.net', category: 'Programmeertalen' },
    { name: 'Java', slug: 'openjdk', url: 'https://openjdk.org', category: 'Programmeertalen' },


    // more
    { name: 'SQLite', slug: 'sqlite', url: 'https://sqlite.org', category: 'Tools en platforms' },
    { name: 'React', slug: 'react', url: 'https://react.dev', category: 'Frameworks en libraries' },
    { name: 'Node.js', slug: 'nodedotjs', url: 'https://nodejs.org', category: 'Frameworks en libraries' },
    { name: 'NGINX', slug: 'nginx', url: 'https://nginx.org', category: 'Development en DevOps' },
    { name: 'Apache HTTPd', slug: 'apache', url: 'https://httpd.apache.org', category: 'Development en DevOps' },
    { name: 'GDScript', slug: 'godotengine', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/', category: 'Programmeertalen' },
    { name: 'WEM Script', "url": "https://docs.wem.io/platform/template-editor/miscellaneous/script", category: 'Programmeertalen' },
    { name: 'Vite', slug: 'vite', url: 'https://vite.dev', category: 'Frameworks en libraries' },

    { name: 'Astro', slug: 'astro', url: 'https://astro.build', category: 'Frameworks en libraries' },
    { name: 'PowerShell', url: 'https://learn.microsoft.com/powershell/', category: 'Programmeertalen' },
    { name: 'Next.js', slug: 'nextdotjs', url: 'https://nextjs.org', category: 'Frameworks en libraries' },
    { name: 'Bootstrap', slug: 'bootstrap', url: 'https://getbootstrap.com', category: 'Frameworks en libraries' },
    { name: 'Kotlin', slug: 'kotlin', url: 'https://kotlinlang.org', category: 'Programmeertalen' },
    { name: 'TypeScript', slug: 'typescript', url: 'https://www.typescriptlang.org', category: 'Programmeertalen' },
    { name: 'Bun', slug: 'bun', url: 'https://bun.sh', category: 'Frameworks en libraries' },
    { name: 'Zig', slug: 'zig', url: 'https://ziglang.org', category: 'Programmeertalen' },
    { name: 'Laravel', slug: 'laravel', url: 'https://laravel.com', category: 'Frameworks en libraries' },
    { name: 'PostgreSQL', slug: 'postgresql', url: 'https://www.postgresql.org', category: 'Tools en platforms' },
    { name: 'Puppeteer', slug: 'puppeteer', url: 'https://pptr.dev', category: 'Frameworks en libraries' },
    { name: 'Jest', slug: 'jest', url: 'https://jestjs.io', category: 'Frameworks en libraries' },
    { name: 'discord.js', slug: 'discorddotjs', url: 'https://discord.js.org', category: 'Frameworks en libraries' },
    { name: 'discord.py', url: 'https://discordpy.readthedocs.io', category: 'Frameworks en libraries' },
    { name: 'Jenkins', slug: 'jenkins', url: 'https://www.jenkins.io', category: 'Development en DevOps' },
    { name: 'GitHub Actions', slug: 'githubactions', url: 'https://github.com/features/actions', category: 'Development en DevOps' },
    { name: 'Protocol Buffers', url: 'https://protobuf.dev', category: 'Frameworks en libraries' },
    { name: 'Ollama', slug: 'ollama', url: 'https://ollama.com', category: 'Frameworks en libraries' },
    { name: 'llama.cpp', url: 'https://github.com/ggml-org/llama.cpp', category: 'Frameworks en libraries' },
    { name: 'PyTorch', slug: 'pytorch', url: 'https://pytorch.org', category: 'Frameworks en libraries' },
    { name: 'Flask', slug: 'flask', url: 'https://flask.palletsprojects.com', category: 'Frameworks en libraries' },
    { name: 'Jinja', slug: 'jinja', url: 'https://jinja.palletsprojects.com', category: 'Frameworks en libraries' },
    { name: 'Ansible', slug: 'ansible', url: 'https://www.ansible.com', category: 'Development en DevOps' },
    { name: 'Linux', slug: 'linux', url: 'https://www.kernel.org', category: 'Development en DevOps' },
    { name: 'Lua', slug: 'lua', url: 'https://www.lua.org', category: 'Programmeertalen' },
    { name: 'Qt', slug: 'qt', url: 'https://www.qt.io', category: 'Frameworks en libraries' },
    { name: 'GTK', slug: 'gtk', url: 'https://gtk.org', category: 'Frameworks en libraries' },
    { name: 'MUI', slug: 'mui', url: 'https://mui.com', category: 'Frameworks en libraries' },
    { name: 'GameMaker Language', slug: 'gamemaker', url: 'https://manual.gamemaker.io', category: 'Programmeertalen' },
    { name: "Portainer", slug: "portainer", url: "https://www.portainer.io/", category: 'Development en DevOps' },
    { name: "Kubernetes", slug: "kubernetes", url: "https://kubernetes.io/", category: 'Development en DevOps' },
    { name: "OpenShift", slug: "redhatopenshift", url: "https://www.redhat.com/en/technologies/cloud-computing/openshift", category: 'Development en DevOps' },
    { name: "Unity", slug: "unity", url: "https://unity.com/", category: 'Tools en platforms' },
    { name: "SQLAlchemy", slug: "sqlalchemy", url: "https://www.sqlalchemy.org/", category: 'Frameworks en libraries' },
    { name: "Fedora Linux", slug: "fedora", url: "https://fedoraproject.org/", category: 'Development en DevOps' },
    { name: "RHEL", slug: "redhat", url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux", category: 'Development en DevOps' },
    { name: "Ubuntu", slug: "ubuntu", url: "https://ubuntu.com/", category: 'Development en DevOps' },
    { name: "JSFiddle", slug: "jsfiddle", url: "https://jsfiddle.net/", category: 'Tools en platforms' },
    { name: "Prettier", slug: "prettier", url: "https://prettier.io/", category: 'Tools en platforms' },
    { name: "LottieFiles", slug: "lottiefiles", url: "https://lottiefiles.com/", category: 'Tools en platforms' },
    { name: "Preact", slug: "preact", url: "https://preactjs.com/", category: 'Frameworks en libraries' },
    { name: "Raylib", slug: "raylib", url: "https://www.raylib.com/", category: 'Frameworks en libraries' },
    { name: "WebGL", slug: "webgl", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API", category: 'Frameworks en libraries' },
    { name: "Anaconda", slug: "anaconda", url: "https://www.anaconda.com/", category: 'Tools en platforms' },
    { name: "Roblox Studio", slug: "robloxstudio", url: "https://create.roblox.com/", category: 'Tools en platforms' },
    { name: "FFmpeg", slug: "ffmpeg", url: "https://ffmpeg.org/", category: 'Tools en platforms' },
    { name: "Debian", slug: "debian", url: "https://www.debian.org/", category: 'Development en DevOps' },
    { name: "Proxmox", slug: "proxmox", url: "https://www.proxmox.com/", category: 'Development en DevOps' },
    { name: "Electron", slug: "electron", url: "https://www.electronjs.org/", category: 'Frameworks en libraries' },
    { name: "Tauri", slug: "tauri", url: "https://v2.tauri.app/", category: 'Frameworks en libraries' },
    { name: "Android Studio", slug: "androidstudio", url: "https://developer.android.com/studio", category: 'Tools en platforms' },
    { name: "Flutter", slug: "flutter", url: "https://flutter.dev/", category: 'Frameworks en libraries' },
    { name: "Dart", slug: "dart", url: "https://dart.dev/", category: 'Programmeertalen' },
    { name: "shadcn/ui", slug: "shadcnui", url: "https://ui.shadcn.com/", category: 'Frameworks en libraries' },
    { name: "Zod", slug: "zod", url: "https://zod.dev/", category: 'Frameworks en libraries' },
    { name: "Zed", slug: "zedindustries", url: "https://zed.dev/", category: 'Tools en platforms' },
    { name: "WordPress", slug: "wordpress", url: "https://wordpress.org/", category: 'Tools en platforms' },
    { name: "Visual Studio", url: "https://visualstudio.microsoft.com/", category: 'Tools en platforms' },
    { name: "VSCode", url: "https://code.visualstudio.com/", category: 'Tools en platforms' },

];

const bySlug = new Map(
    Object.values(icons)
        .filter((icon) => icon && typeof icon === 'object' && 'slug' in icon)
        .map((icon) => [icon.slug, icon]),
);

const entries = list.map(({ name, slug, url, category }) => {
    const entry = { name, category };
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
    category: string;
    url?: string;
    hex?: string;
    path?: string;
}

export const technologies: Technology[] = ${JSON.stringify(entries, null, 4)};
`;

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/technologies.ts', output);
