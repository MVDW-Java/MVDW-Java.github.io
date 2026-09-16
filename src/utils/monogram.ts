// Some icons are not included (yet) in simple icon or have been removed..
//
// powershell/C#/Visual Basic: https://github.com/simple-icons/simple-icons/issues/11236
// LlamaCPP: https://github.com/simple-icons/simple-icons/pull/14633 (TODO: bump simple-icons version when merged)
// WEM: No PR or issues found, have to create a pr myself
// Discord.py: No PR or issues found, have to create a pr myself
// Protocol Buffers: No official logo
export const monogram = (name: string) =>
    name
        .split(/[^A-Za-z0-9+#.]+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
