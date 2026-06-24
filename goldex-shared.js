// GoldEx Shared - include in every page
// Theme management
const savedTheme = localStorage.getItem('goldex_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('goldex_theme', next);
  const knob = document.getElementById('themeKnob');
  const label = document.getElementById('themeLabel');
  if (knob) knob.textContent = next === 'dark' ? '🌙' : '☀️';
  if (label) label.textContent = next === 'dark' ? 'Dark' : 'Light';
}

// Set initial theme UI
window.addEventListener('DOMContentLoaded', () => {
  const t = localStorage.getItem('goldex_theme') || 'dark';
  const knob = document.getElementById('themeKnob');
  const label = document.getElementById('themeLabel');
  if (knob) knob.textContent = t === 'dark' ? '🌙' : '☀️';
  if (label) label.textContent = t === 'dark' ? 'Dark' : 'Light';
});
