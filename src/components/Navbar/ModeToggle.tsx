import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';

export default function ModeToggle() {
  const [theme, setThemeState] = React.useState<'light' | 'dark' | 'system'>(
    'system',
  );

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');

    setThemeState(isDarkMode ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'github-dark' : 'github-light',
    );
  }, [theme]);

  const handleTheme = (theme: 'dark' | 'light') => {
    localStorage.setItem('theme', theme);

    setThemeState(theme);
  };

  const handleSystemTheme = () => {
    localStorage.removeItem('theme');

    setThemeState('system');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full [&_svg]:size-5 md:[&_svg]:size-4"
          variant="ghost"
          size="icon"
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystemTheme}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
