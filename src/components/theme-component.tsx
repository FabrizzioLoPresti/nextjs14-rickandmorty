'use client';

import { useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';
import { useTheme } from 'next-themes';

type Props = {};

const ThemeComponent = (props: Props) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={
        theme === 'dark' ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )
      }
      onChange={toggleTheme}
    />
  );
};

export default ThemeComponent;
