import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { DEFAULT_THEME } from './theme/mod';
import { applyTheme } from './theme/utils';
import "./i18n/config";

function App() {
  const [theme, setTheme ] = useState(DEFAULT_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
                <RouterProvider router={router} />
    </>
  )
}

export default App
