import React from 'react';

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
};

export function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <label className="toggle-switch" aria-label={label ?? 'Toggle'}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider" />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}