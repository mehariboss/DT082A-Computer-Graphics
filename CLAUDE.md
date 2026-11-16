# CLAUDE.md – DT082A Computer Graphics (Miun, HT2026)

Den här filen läses automatiskt av Claude i VS Code. Den beskriver kursen, repot och hur du (Claude) ska hjälpa mig.

## Vem jag är
- Masterstudent i Computer Engineering (Visual AI) på Mittuniversitetet, Sundsvall.
- Svara på **svenska** om jag skriver på svenska. Tekniska termer (vertex shader, buffer, uniform osv.) får vara på engelska.
- Jag lär mig bäst med **korta, enkla förklaringar** och ett konkret vardagsexempel först, sedan koden/formeln.
- Skriv inte långa formler på en rad. Dela upp matematik steg för steg på flera korta rader.

## Kursen
- **DT082A Computer Graphics**, WebGL, bygger på boken *Interactive Computer Graphics with WebGL* (Angel & Shreiner, 7e).
- Upplägg: 6 föreläsningar, 3 seminarier, 2 labbar, ett projekt i par, tenta.

### Deadlines
| Vad | Datum |
|---|---|
| Gruppbildning i Canvas (annars tilldelas grupp) | slutet av v48 |
| Lab 1 (kod som .zip + PM 1–2 sidor) | 2026-11-25 23:59 |
| Project topic proposal | 2026-11-27 |
| Lab 2 (kod som .zip + PM 1–2 sidor) | 2026-12-03 23:59 |
| Projektet startar officiellt | v49 |
| Mentorsmöten (L401) | v51 |
| Must-have-slides upp i diskussionsforumet | 2027-01-05 23:59 |
| Projektpresentation (M103, hela dagen, närvaro krävs) | 2027-01-08 |
| Slutinlämning: slides (.pptx/.pdf) + kod (.zip) | 2027-01-08 19:00 |
| Tenta | 2027-01-16 |

## Mappstruktur
```
lectures/slides/     Föreläsningsbilderna som PDF (L1–L6)
lectures/text/       Samma bilder som ren text – LÄS DESSA FÖRST (snabbare än PDF)
lectures/INDEX.md    Vilken föreläsning tar upp vad
labs/lab1/, lab2/    instructions.md/.pdf (lärarens uppgift), code/, report/ (PM)
project/project-instructions.md/.pdf   Lärarens krav för projektet (förslag, bedömning)
project/PROJECT.md   ALLT om vårt projekt: idé, partner, status, beslut, att-göra
project/1-topic-proposal/   Ämnesförslaget + project-ideas.md/.pdf (lärarens 3 projektidéer med länkar)
project/2-code/      Projektkoden (WebGL: index.html, src/, shaders/, libs/)
project/3-presentation/     Presentationen + presentation-instructions.md/.pdf (upplägg, opponering, inlämning)
notes/               Mina egna anteckningar och tentaplugg
textbook/            Kursboken (ligger lokalt, pushas INTE till GitHub)
```

## Regler för dig (Claude)

### 1. Använd kursmaterialet som källa
- När du förklarar något: utgå från föreläsningarna i `lectures/text/` och hänvisa, t.ex. *"(Lecture 5, Viewing – Projection types)"*.
- Använd `lectures/INDEX.md` för att hitta rätt föreläsning snabbt.
- Om bilderna inte räcker: nämn kapitlet i Angel & Shreiner.
- Hitta inte på saker som "läraren sa". Står det inte i materialet, säg det.

### 2. Projektet
- Läs **alltid** `project/PROJECT.md` och `project/project-instructions.md` innan du hjälper till med projektet.
- När vi väljer eller formulerar ämne: läs `project/1-topic-proposal/project-ideas.md`.
- Inför presentationen eller opponeringen: läs `project/3-presentation/presentation-instructions.md`.
- Läs alltid **.md-versionen** av instruktionerna. PDF:erna har samma innehåll och är till för mig.
- När vi tar ett beslut eller blir klara med något: **uppdatera `project/PROJECT.md`** (status, beslut, att-göra-listan). Så vet nästa chatt vad som hänt.

### 3. Labbar och rapporter
- Läs `labs/<lab>/instructions.md` innan du hjälper till med en labb.
- Lab 2 bygger vidare på koden från Lab 1.
- Labbrapporter är mina egna och betygsätts. **Guida mig, skriv inte rapporten åt mig.**
  - Förklara vad frågan egentligen frågar efter.
  - Förbättra mina egna meningar men behåll mina ord.
  - Undvik AI-låtande formuleringar och listor med tankstreck.
- Kod i labbarna: förklara och hjälp mig felsöka steg för steg hellre än att skriva hela lösningen direkt, om jag inte uttryckligen ber om det.

### 4. WebGL-kod
- Följ kursens stil (samma som boken): `initShaders`, `MV.js` (`vec3`, `mat4`, `flatten`, `perspective`, `lookAt`, `rotate`…), `requestAnimationFrame` för animation.
- Hjälpbiblioteken ligger i `project/2-code/libs/` (och i varje labb om de behövs).
- Shaders i GLSL ES (WebGL 1 som i boken om inget annat sägs).
- Koden körs i webbläsaren via en lokal server (VS Code-tillägget *Live Server*), inte genom att dubbelklicka på HTML-filen.
- Kommentera koden kort så jag kan förklara den vid presentationen.

### 5. Git
- Föreslå commit-meddelanden på engelska, korta (`Add Phong lighting to scene`).
- Pusha aldrig `textbook/` (står redan i `.gitignore`).
