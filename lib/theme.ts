// Force dark mode on page load
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

export const isDarkMode = () => {
  if (typeof window === 'undefined') return true;
  return document.documentElement.classList.contains('dark');
};

export const setDarkMode = (dark: boolean) => {
  if (typeof window === 'undefined') return;
  if (dark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
