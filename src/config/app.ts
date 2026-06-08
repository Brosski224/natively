
export const CONFIG = {
    GA_MEASUREMENT_ID: "G-6MX6YCGYGH",
    APP_VERSION: "2.7.0", // Main version, kept consistent
    DOWNLOADS: {
        MACOS: {
            VERSION: "2.7.0",
            ARM64: "Natively-2.7.0-arm64.dmg",
            INTEL: "Natively-2.7.0.dmg",
        },
        WINDOWS: {
            VERSION: "2.7.0",
            INSTALLER: "Natively-Setup-2.7.0.exe",
            PORTABLE: "Natively-Setup-2.7.0.exe",
        },
        LINUX: {
            VERSION: "Coming Soon",
        },
        BASE_URL: "https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant/releases/download",
    },
} as const;
