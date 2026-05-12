const BBC_FEED = 'https://feeds.bbci.co.uk/news/rss.xml';

export async function fetchHeadlines(): Promise<string[]> {
  try {
    const xml = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(BBC_FEED)}`).then((r) => r.text());
    const matches = [...xml.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/g)]
      .map((m) => m[1] || m[2])
      .filter(Boolean)
      .slice(1, 6);
    return matches;
  } catch {
    return ['BBC feed unavailable', 'Using cached headlines'];
  }
}

export async function fetchLondonWeather(): Promise<string[]> {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon';
  try {
    const data = await fetch(url).then((r) => r.json());
    return data.daily.time.slice(0, 3).map((d: string, i: number) => `${d.slice(5)} MAX ${Math.round(data.daily.temperature_2m_max[i])}C MIN ${Math.round(data.daily.temperature_2m_min[i])}C`);
  } catch {
    return ['Weather API unavailable'];
  }
}
