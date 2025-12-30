"use client";

import { useEffect, useState } from "react";

export default function EasterEggs() {
    const [konamiProgress, setKonamiProgress] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [showSecret, setShowSecret] = useState(false);

    // Konami code sequence
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    useEffect(() => {
        // Console message for developers
        const style = 'color: #2B4593; font-size: 14px; font-weight: bold; font-family: monospace;';
        const style2 = 'color: #6172f3; font-size: 12px; font-family: monospace;';

        console.log('%c╔══════════════════════════════════════════════════╗', style);
        console.log('%c║                                                  ║', style);
        console.log('%c║   🚀 Built with ❤️  by Qubeso Tech             ║', style);
        console.log('%c║                                                  ║', style);
        console.log('%c║   Hey there,  curious developer! 👋             ║', style);
        console.log('%c║                                                  ║', style);
        console.log('%c║   Try the Konami Code for a surprise...         ║', style2);
        console.log('%c║   ↑ ↑ ↓ ↓ ← → ← → B A                          ║', style2);
        console.log('%c║                                                  ║', style);
        console.log('%c║   Looking to hire? Let\'s talk!                  ║', style);
        console.log('%c║   kagatharashubham9@gmail.com                    ║', style2);
        console.log('%c║                                                  ║', style);
        console.log('%c╚══════════════════════════════════════════════════╝', style);

        // Fun console functions
        (window as any).qubesoEasterEgg = () => {
            console.log('%c🎉 You found the secret command!', 'font-size: 20px; color: #2B4593;');
            console.log('%c' + `
        ⠀⠀⠀⠀⠀⣀⣤⣴⣶⣶⣶⣶⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀
        ⠀⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
        ⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀
        ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
        ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
        ⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀
        ⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀
        ⠀⠀⠀ ⠀⠉⠛⠿⠿⣿⣿⣿⣿⠿⠿⠛⠉⠀⠀⠀⠀⠀
      `, 'color: #6172f3;');
        };

        console.log('%cTry typing: qubesoEasterEgg()', 'color: #888; font-style: italic;');
    }, []);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.code === konamiCode[konamiProgress]) {
                setKonamiProgress(prev => prev + 1);

                if (konamiProgress === konamiCode.length - 1) {
                    // Konami code completed!
                    setShowSecret(true);
                    setKonamiProgress(0);

                    // Create confetti effect
                    createConfetti();

                    setTimeout(() => setShowSecret(false), 5000);
                }
            } else if (konamiCode.includes(e.code)) {
                // Reset if wrong key in sequence
                setKonamiProgress(0);
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [konamiProgress]);

    const createConfetti = () => {
        const confettiCount = 50;
        const colors = ['#2B4593', '#6172f3', '#E6E2C5', '#3D5AB8'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '10000';
            confetti.style.opacity = '0.8';

            document.body.appendChild(confetti);

            const duration = 2000 + Math.random() * 1000;
            const fallDistance = window.innerHeight + 20;
            const spin = Math.random() * 360;
            const drift = (Math.random() - 0.5) * 200;

            confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                { transform: `translateY(${fallDistance}px) translateX(${drift}px) rotate(${spin}deg)`, opacity: 0 }
            ], {
                duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => confetti.remove(), duration);
        }
    };

    return (
        <>
            {showSecret && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none"
                    style={{
                        animation: 'fadeInOut 5s ease-in-out'
                    }}
                >
                    <div className="bg-brand-primary/95 backdrop-blur-lg rounded-3xl px-12 py-8 shadow-2xl border-4 border-white">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎮</div>
                            <h2 className="text-3xl font-bold text-white mb-2">Konami Code Activated!</h2>
                            <p className="text-white/90 text-lg">You're a legend! 🎉</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          10%, 90% { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </>
    );
}
