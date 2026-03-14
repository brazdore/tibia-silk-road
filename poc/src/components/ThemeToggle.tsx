import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

type ViewTransition = {
    finished: Promise<void>;
};

type DocumentWithTransition = Document & {
    startViewTransition?: (callback: () => void) => ViewTransition;
};

const STORAGE_KEY = "tsr-theme";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark";

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    function handleToggle(event: React.MouseEvent<HTMLButtonElement>): void {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        const root = document.documentElement;
        const rect = event.currentTarget.getBoundingClientRect();

        root.style.setProperty("--toggle-x", `${rect.left + rect.width / 2}px`);
        root.style.setProperty("--toggle-y", `${rect.top + rect.height / 2}px`);
        root.classList.add("theme-transition");

        const switchTheme = () => {
            flushSync(() => {
                setTheme(nextTheme);
            });
        };

        const doc = document as DocumentWithTransition;

        if (!doc.startViewTransition) {
            switchTheme();
            window.setTimeout(() => {
                root.classList.remove("theme-transition");
            }, 700);
            return;
        }

        const transition = doc.startViewTransition(() => {
            switchTheme();
        });

        transition.finished.finally(() => {
            root.classList.remove("theme-transition");
        });
    }

    return (
        <button
            type="button"
            className={`theme-toggle ${theme}`}
            onClick={handleToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <span className="theme-toggle__track" aria-hidden="true">
                <span className="theme-toggle__thumb">
                    <span className="theme-toggle__face">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </span>
                </span>
                <span className="theme-toggle__spark theme-toggle__spark--1" />
                <span className="theme-toggle__spark theme-toggle__spark--2" />
                <span className="theme-toggle__spark theme-toggle__spark--3" />
            </span>

            <span className="theme-toggle__text">
                {theme === "dark" ? "Night mode" : "Day mode"}
            </span>
        </button>
    );
}