function toggleTheme() {
    let nextTheme: string;

    switch (document.documentElement.dataset.theme) {
        case "light":
            nextTheme = "dark"; break;
        case "dark":
            nextTheme = "light"; break;
        default:
            nextTheme = "dark";
    }

    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem("theme", nextTheme)
}

export default function useTheme() {
    return { toggleTheme }
}