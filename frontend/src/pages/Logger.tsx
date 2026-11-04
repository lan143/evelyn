import { useEffect, useRef } from 'preact/hooks';

/**
 * Mounts the `edu-log-ui` logger settings page imperatively. The package is
 * imported once in `main.tsx`; this component only owns the element's
 * lifecycle. The element talks to the firmware's `/api/log/settings` handler
 * on the same origin.
 */
export function LoggerSettingsPage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.createElement('edu-log-settings-page');
    element.setAttribute('device-name', 'Evelyn');
    // Same origin by default; only set 'base-url' for a CORS-enabled device.
    host.current?.append(element);
    return () => element.remove();
  }, []);

  return <div ref={host} />;
}
