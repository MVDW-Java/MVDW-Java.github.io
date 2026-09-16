const INK = "#121212";
const SYMBOL = "#ffffff";
const DARK_SURFACE = "#171717";
const LIGHT_SURFACE = "#f5f5f5";

const MIN_CONTRAST = 2;

// https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color
const channel = (value: number) => {
    const srgb = value / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
    const value = hex.replace("#", "");
    const [r, g, b] = [0, 2, 4].map((i) =>
        parseInt(value.slice(i, i + 2), 16),
    );
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrast = (a: string, b: string) => {
    const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (lighter + 0.05) / (darker + 0.05);
};

const legible = (hex: string | undefined, surface: string, fallback: string) =>
    hex && /^#[0-9a-f]{6}$/i.test(hex) && contrast(hex, surface) >= MIN_CONTRAST
        ? hex
        : fallback;

export const onDark = (hex?: string) => legible(hex, DARK_SURFACE, SYMBOL);
export const onLight = (hex?: string) => legible(hex, LIGHT_SURFACE, INK);
