import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { staticPages } from '../data/pageTemplates';
import { normalizeLines, fitLine } from '../lib/grid';
import { useTeletextStore } from '../store';
import { useHeadlines, useWeather } from '../hooks/useTeletextData';

export function TeletextScreen() {
  const { page, input, setInput, setPage, crt, toggleCrt } = useTeletextStore();
  const [showOverlay, setShowOverlay] = useState(false);
  const [clock, setClock] = useState(format(new Date(), 'MMM dd HH:mm:ss'));
  const { data: headlines = [] } = useHeadlines();
  const { data: weather = [] } = useWeather();

  useEffect(() => {
    const id = setInterval(() => setClock(format(new Date(), 'MMM dd HH:mm:ss')), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (/^[0-9]$/.test(event.key)) {
        const next = (input + event.key).slice(0, 3);
        setInput(next);
        if (next.length === 3) setPage(Number(next));
      }
      if (event.key === 'Enter' && input.length > 0) setPage(Number(input));
      if (event.key.toLowerCase() === 'c') toggleCrt();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [input, setInput, setPage, toggleCrt]);

  const lines = useMemo(() => {
    const found = staticPages.find((p) => p.id === page) ?? staticPages[1];
    const copy = [...found.lines];
    copy[0] = fitLine(`  Teletext            ${String(page).padStart(3, '0')} ${clock}`);
    if (page === 300 && headlines.length) {
      copy[4] = fitLine(` ${headlines[0]?.toUpperCase() ?? ''}`);
      copy[5] = fitLine(` ${headlines[1]?.toUpperCase() ?? ''}`);
    }
    if (page === 400 && weather.length) {
      weather.slice(0, 3).forEach((w, i) => {
        copy[4 + i] = fitLine(` ${w}`);
      });
    }
    return normalizeLines(copy);
  }, [page, headlines, weather, clock]);

  return (
    <div className={`teletext-shell ${crt ? 'crt' : ''}`} onClick={() => setShowOverlay(true)}>
      {showOverlay && <div className="overlay">Enter page: {input || '___'}</div>}
      <pre className="teletext-grid">{lines.join('\n')}</pre>
    </div>
  );
}
