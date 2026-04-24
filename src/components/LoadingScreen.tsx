import React, { useState, useEffect } from 'react';

interface Heart {
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
}

const LoadingScreen: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const [hearts] = useState<Heart[]>(() => 
        Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            size: Math.random() * 20 + 10, // 10px - 30px
            left: Math.random() * 100, // 0 - 100%
            delay: Math.random() * 2, // 0 - 2s
            duration: Math.random() * 2 + 1, // 1s - 3s
        }))
    );

    useEffect(() => {
        // Thời gian loading (100ms như yêu cầu)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 100);

        // Sau khi hiệu ứng mờ dần (fade out) kết thúc (khoảng 1000ms sau đó) thì gỡ khỏi DOM
        const cleanupTimer = setTimeout(() => {
            setShouldRender(false);
        }, 1100);

        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div className={`loading-overlay ${!isVisible ? 'fade-out' : ''}`}>
            <div className="falling-hearts-container">
                {hearts.map(heart => (
                    <div 
                        key={heart.id} 
                        className="falling-heart"
                        style={{
                            left: `${heart.left}%`,
                            width: `${heart.size}px`,
                            height: `${heart.size}px`,
                            animationDelay: `${heart.delay}s`,
                            animationDuration: `${heart.duration}s`
                        }}
                    >
                        <svg viewBox="0 0 32 32" fill="#ff4d4d">
                            <path d="M16 28.5L13.6 26.2C5.4 18.8 0 13.9 0 7.9C0 3.5 3.5 0 7.9 0C10.4 0 12.8 1.2 14.3 3.1L16 5.1L17.7 3.1C19.2 1.2 21.6 0 24.1 0C28.5 0 32 3.5 32 7.9C32 13.9 26.6 18.8 18.4 26.3L16 28.5Z" />
                        </svg>
                    </div>
                ))}
            </div>
            <div className="loading-content">
                <div className="intertwined-hearts">
                    <div className="heart-main">
                        <svg viewBox="0 0 32 32" fill="#ff4d4d">
                            <path d="M16 28.5L13.6 26.2C5.4 18.8 0 13.9 0 7.9C0 3.5 3.5 0 7.9 0C10.4 0 12.8 1.2 14.3 3.1L16 5.1L17.7 3.1C19.2 1.2 21.6 0 24.1 0C28.5 0 32 3.5 32 7.9C32 13.9 26.6 18.8 18.4 26.3L16 28.5Z" />
                        </svg>
                    </div>
                    <div className="heart-sub">
                        <svg viewBox="0 0 32 32" fill="#ff8080">
                            <path d="M16 28.5L13.6 26.2C5.4 18.8 0 13.9 0 7.9C0 3.5 3.5 0 7.9 0C10.4 0 12.8 1.2 14.3 3.1L16 5.1L17.7 3.1C19.2 1.2 21.6 0 24.1 0C28.5 0 32 3.5 32 7.9C32 13.9 26.6 18.8 18.4 26.3L16 28.5Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
