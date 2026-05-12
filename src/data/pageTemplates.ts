import type { TeletextPage } from './types';

const makeList = (base: number, title: string): TeletextPage => ({
  id: base,
  title,
  lines: [
    ` ${title.toUpperCase()} INDEX                    ${base}`,
    '----------------------------------------',
    ' Use number keys to navigate pages.      ',
    '                                        ',
    ' Headlines ....................... 300   ',
    ' Sport ........................... 200   ',
    ' Weather ......................... 400   ',
    ' TV / Entertainment .............. 500   ',
    ' Business ........................ 600   ',
    ' Flights ......................... 700   ',
    '                                        ',
    ' FastText: Red Green Yellow Cyan         ',
    '                                        ',
    ...Array.from({ length: 12 }, () => '                                        '),
    ' TELETEXT NATIONAL NEWS teletext.co.uk   '
  ]
});

export const staticPages: TeletextPage[] = [
  {
    id: 300,
    title: 'Headlines',
    lines: [
      '  Teletext            300 Sep11 21:57:32',
      ' Newstext                                ',
      ' - HEADLINES ------------------------    ',
      '                                        ',
      ' TERROR JET BLITZ DEVASTATES AMERICA 303',
      ' THOUSANDS MAY HAVE DIED IN OUTRAGES   ',
      '                                        ',
      ' WORLD TRADE CENTRE TOWERS DESTROYED 304',
      ' PENTAGON HIT 305 THIRD TARGET NAMED 306',
      '                                        ',
      ' AIRLINER PILOTS "PROBABLY MURDERED" 307',
      ' PM BACKS US IN SEARCH FOR ATTACKERS 309',
      '                                        ',
      ' BIN LADEN LINK 311 IN FOCUS SPECIAL 320',
      '                                        ',
      ' Index    301 News poll  142 Q4 Hours 140',
      ' Latest   302 In Focus   320 Crime on 137',
      ' Start    407 Regional   330 Papers  326',
      ' TELETEXT NATIONAL AND REGIONAL NEWS     ',
      ' ON OUR WEBSITE www.teletext.co.uk       ',
      '                                        ',
      ' Red:Main  Green:World  Yellow:UK  Cyan: ',
      '                                        ',
      ' Enter page number then press return     ',
      '                                        '
    ]
  },
  makeList(100, 'Main Menu'),
  makeList(200, 'Sport'),
  makeList(400, 'Weather'),
  makeList(500, 'TV/Entertainment')
];

for (let i = 101; i <= 130; i++) staticPages.push(makeList(i, `Page ${i}`));
