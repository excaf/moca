function toggleTheme() {
    const themeSequences = new Map([
        ["light", "dark"],
        ["dark", "light"]
    ])
    const currTheme:string | undefined = document.documentElement.dataset.theme
    
    document.documentElement.dataset.theme = currTheme ? themeSequences.get(currTheme) : "dark"
}

export default function useTheme() {
    return { toggleTheme }
}