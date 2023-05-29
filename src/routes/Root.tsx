import { useTheme } from "../lib/hooks/useTheme";

export default function Root() {
  const { toggleTheme } = useTheme();
  return (
    <div id="root-route-component">
      <h1 className="bg-red dark:bg-blue">Root</h1>
      <button onClick={() => toggleTheme("dark")}>Dark</button>
      <button onClick={() => toggleTheme("light")}>Light</button>
      <button onClick={() => toggleTheme("system")}>System</button>

      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8">
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Mode</p>
      </div>
    </div>
  );
}
