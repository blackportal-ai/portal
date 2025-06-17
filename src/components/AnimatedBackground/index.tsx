'use client';

import * as React from 'react';

import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function AnimatedBackground() {
  const [init, setInit] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  React.useEffect(() => {
    handleTheme();

    const observer = new MutationObserver(handleTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  function handleTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark');

    setTheme(isDarkMode ? 'dark' : 'light');
  }

  async function particlesLoaded(container?: Container) {
    if (!!container) {
      container.loadTheme(theme);
    }
  }

  const options: ISourceOptions = React.useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      particles: {
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.3,
          straight: false,
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 0.2,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0, max: 2 },
          animation: {
            enabled: true,
            speed: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
      smooth: true,
      themes: [
        {
          default: {
            value: true,
            mode: 'dark',
          },
          name: 'dark',
          options: {
            particles: {
              color: {
                value: '#ffffff',
              },
            },
          },
        },
        {
          default: {
            value: true,
            mode: 'light',
          },
          name: 'light',
          options: {
            particles: {
              color: {
                value: '#000000',
              },
            },
          },
        },
      ],
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="stars"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    );
  }

  return <></>;
}
