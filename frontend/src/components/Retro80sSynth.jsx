import React, { useEffect, useState } from 'react';

const Retro80sSynth = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [gridOffset, setGridOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const gridTimer = setInterval(() => {
      setGridOffset(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(gridTimer);
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 50%, #330066 100%)',
      color: '#fff',
      fontFamily: 'Courier New, monospace',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Animated Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: `translateY(${gridOffset}px)`,
        animation: 'pulse 2s ease-in-out infinite alternate'
      }} />

      {/* Scanlines Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
        pointerEvents: 'none'
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}>
        {/* Neon Title */}
        <h1 style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#ff00ff',
          textShadow: `
            0 0 10px #ff00ff,
            0 0 20px #ff00ff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff,
            0 0 70px #ff00ff,
            0 0 80px #ff00ff,
            0 0 100px #ff00ff,
            0 0 150px #ff00ff
          `,
          animation: 'flicker 3s infinite alternate',
          marginBottom: '2rem'
        }}>
          SYNTHWAVE
        </h1>

        {/* Subtitle */}
        <h2 style={{
          fontSize: '2rem',
          color: '#00ffff',
          textShadow: `
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 15px #00ffff,
            0 0 20px #00ffff
          `,
          marginBottom: '3rem',
          animation: 'glow 2s ease-in-out infinite alternate'
        }}>
          RETRO FUTURE
        </h2>

        {/* Geometric Shapes Container */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginBottom: '3rem',
          alignItems: 'center'
        }}>
          {/* Pulsing Circle */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ff1493 0%, #8b008b 100%)',
            boxShadow: '0 0 30px #ff1493, inset 0 0 20px rgba(255, 255, 255, 0.2)',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />

          {/* Rotating Square */}
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #00ffff, #0080ff)',
            boxShadow: '0 0 25px #00ffff',
            animation: 'rotate 3s linear infinite'
          }} />

          {/* Glowing Triangle */}
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: '86px solid #ff00ff',
            filter: 'drop-shadow(0 0 20px #ff00ff)',
            animation: 'bounce 2s ease-in-out infinite'
          }} />
        </div>

        {/* Retro Stats Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid #00ffff',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)'
          }}>
            <div style={{
              color: '#00ffff',
              fontSize: '1.2rem',
              marginBottom: '0.5rem'
            }}>SYSTEM</div>
            <div style={{
              color: '#ff00ff',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>ONLINE</div>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid #ff00ff',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.1)'
          }}>
            <div style={{
              color: '#ff00ff',
              fontSize: '1.2rem',
              marginBottom: '0.5rem'
            }}>POWER</div>
            <div style={{
              color: '#00ffff',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>100%</div>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid #ffff00',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.5), inset 0 0 20px rgba(255, 255, 0, 0.1)'
          }}>
            <div style={{
              color: '#ffff00',
              fontSize: '1.2rem',
              marginBottom: '0.5rem'
            }}>TIME</div>
            <div style={{
              color: '#ffffff',
              fontSize: '1.5rem',
              fontFamily: 'monospace'
            }}>{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>

        {/* Retro Navigation */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {['HOME', 'GALLERY', 'CONTACT', 'ABOUT'].map((item, index) => (
            <button
              key={item}
              style={{
                background: 'transparent',
                border: '2px solid #ff00ff',
                color: '#00ffff',
                padding: '0.8rem 1.5rem',
                fontSize: '1rem',
                fontFamily: 'Courier New, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textShadow: '0 0 10px #00ffff',
                animation: `glitch ${2 + index * 0.5}s infinite`
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ff00ff';
                e.target.style.color = '#000';
                e.target.style.boxShadow = '0 0 30px #ff00ff';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#00ffff';
                e.target.style.boxShadow = 'none';
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Footer Text */}
        <div style={{
          color: '#ff00ff',
          fontSize: '0.9rem',
          textAlign: 'center',
          opacity: 0.8,
          animation: 'flicker 4s infinite alternate'
        }}>
          <p>© 1985 RETRO FUTURE SYSTEMS // POWERED BY NEON DREAMS</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff; }
          to { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
};

export default Retro80sSynth;