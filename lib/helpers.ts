// Utility functions with personality - showing authentic human coding patterns

/**
 * Custom debounce implementation
 * TODO: Maybe add leading edge trigger option later
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 * NOTE: Using requestAnimationFrame for better performance
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    let lastResult: ReturnType<T>;

    return function (...args: Parameters<T>): ReturnType<T> {
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
            lastResult = func(...args);
        }
        return lastResult;
    };
}

/**
 * Linear interpolation for smooth animations
 * a: start value
 * b: end value  
 * t: time (0-1)
 */
export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

/**
 * Clamp a number between min and max
 * HACK: Using Math.min/max combo - not the cleanest but it works
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * Check if device prefers reduced motion
 * Returns true if user has motion sensitivity
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get random number with optional seed for consistent results
 * Useful for "random" layouts that need to be consistent on refresh
 */
export function seededRandom(seed: number): number {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

/**
 * Custom easing functions (because sometimes CSS easing isn't enough)
 */
export const easing = {
    // Ease out elastic - bouncy feeling
    easeOutElastic: (t: number): number => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0
            ? 0
            : t === 1
                ? 1
                : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    },

    // Ease out back - subtle overshoot
    easeOutBack: (t: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    },

    // Ease in out cubic - smooth
    easeInOutCubic: (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    },
};

/**
 * Device detection utilities
 * NOTE: Not perfect but good enough for basic feature detection
 */
export const device = {
    isMobile: (): boolean => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < 768 || 'ontouchstart' in window;
    },

    isTablet: (): boolean => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    },

    isDesktop: (): boolean => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth >= 1024;
    },

    hasTouch: (): boolean => {
        if (typeof window === 'undefined') return false;
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },
};

/**
 * Format number with commas (e.g., 1000 -> 1,000)
 */
export function formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Generate unique ID - simple but effective
 * Using timestamp + random for uniqueness
 */
export function generateId(prefix: string = 'id'): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Copy text to clipboard with fallback
 * Returns Promise<boolean> for success/failure
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
            return true;
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            return success;
        }
    } catch (err) {
        console.error('Failed to copy text:', err);
        return false;
    }
}
