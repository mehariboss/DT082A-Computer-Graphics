# Lärarens projektidéer – Mini Projects DT082A

Källa: `project-ideas.pdf` (Canvas, "Project topics"). Tre idéer som inspiration. Man får också föreslå ett eget ämne inom datorgrafik.
Gemensamt för alla: välj en idé och diskutera den med lärarna, börja med en *minimum viable product* och bygg sedan ut. Resultaten ska visas på en gemensam webbsida för kursen.

---

## Mini Project #1: Create an exploration game
**Fokus:** interaktion med tangentbordet och rörelse för kamera/användare.

- Lägg en 3D-scen i rymden och gör en webbsida där användaren kan utforska scenen.
- Rörelsen kan vara att sväva, men helst ska den följa fysikens lagar (gå, hoppa).
- Ladda ner färdiga 3D-scener. Börja enkelt, t.ex. med att sväva runt. Mer interaktivitet ger plus.

**Exempel 1 – Utforska en "karta" (t.ex. ett museum):** rörelse med piltangenter/WASD, titta runt med musen eller tangenter. Estetiska detaljer som en skybox ger plus.
**Exempel 2 – Mer än utforskning:** lägg till interaktion ovanpå, t.ex. "skjuta" färg som fastnar på väggarna.

**Länkar:**
- Quake 3 map exploration: https://media.tojicode.com/q3bsp/
- Hintze Hall, Natural History Museum (Sketchfab, CC BY): https://sketchfab.com/3d-models/hintze-hall-45f5e56887f44075bbf283977c99541f
- Postwar City (Sketchfab, CC BY): https://sketchfab.com/3d-models/postwar-city-exterior-scene-30b694d1a4074855a1116a15a0f75731
- Westminster Abbey Cloisters (Sketchfab, CC BY): https://sketchfab.com/3d-models/westminster-abbey-cloisters-8d91448fdaf64e80932e885524f04c2b
- Palazzo Falson Courtyard (Sketchfab, CC BY): https://sketchfab.com/3d-models/palazzo-falson-courtyard-d559ed52ab584b1c87945835e7077575

---

## Mini Project #2: Visualize data on the globe
**Fokus:** glyfer (markörer/symboler) och färger.

- Visualisera ett dataset på en 3D-jordglob i WebGL, med geografiska, tidsmässiga och kategoriska dimensioner.
- Designa en interaktionsmodell: navigera globen, välj attribut och tidsperiod.
- Minsta version: rotera, zooma, byta datalager.

**Exempel 1 – World Happiness Index:** lycka, socialt stöd, BNP och korruption per land med färgkodning eller 3D-markörer. En rullgardinsmeny väljer attribut.
**Exempel 2 – Yttemperatur över tid:** välj år och se temperaturen som färggradient på globen. Läraren skriver att datastrukturen verkar komplicerad.
**Exempel 3 – Flygtrafik:** flygrutter mellan storstäder som 3D-bågar på globen, visar trafiktäthet och knutpunkter.

**Länkar:**
- Globe.gl (verktyg): https://globe.gl/
- The WebGL Globe (GitHub): https://github.com/dataarts/webgl-globe
- World Happiness Report (data): https://worldhappiness.report/ed/2024/#appendices-and-data
- Berkeley Earth temperaturdata (bara som referens, komplicerad): https://berkeleyearth.org/data/
- OpenFlights (flygplatser och rutter): https://openflights.org/data.php

---

## Mini Project #3: Prepare an animated scene
**Fokus:** först animation (translation och rotation, inte riggade/skelettanimerade objekt), sedan interaktivitet.

- Placera 3D-objekt i en scen och gör en webbsida som visar en animerad scen.
- Minst grundläggande interaktivitet krävs, t.ex. att animationen ändras när man trycker på knappar. Fysisk interaktion med objekt ger plus.

**Exempel 1 – Fyrverkerier:** raketer, paket och julgranar i scenen, med partikelfyrverkerier långt bort i bakgrunden. Klickar man på en raket flyger den upp och exploderar i partiklar. Raketerna fylls på efter en stund.
**Exempel 2 – Cloud City:** en stadsmodell med moln som rör sig. Knappar visar flygande fordon som cirklar runt staden, ändrar deras animation och får ett stort rymdskepp att närma sig.

**Länkar:**
- Aquarium-exempel i WebGL (cykliska rörelser): https://webglsamples.org/aquarium/aquarium.html
- Khronos WebGL Particles-exempel: https://registry.khronos.org/webgl/sdk/demos/google/particles/index.html
- Raketmodell (Sketchfab, CC BY): https://sketchfab.com/3d-models/firework-red-rocket-2e38fdb599e64a17bafa9cdbe760fd89
- Alternativa raketer (Sketchfab, CC BY): https://sketchfab.com/3d-models/fancy-rockets-1d0dad033e5e4f06a7f23a42968b6edd
- Cloud City (Sketchfab, CC BY): https://sketchfab.com/3d-models/cloud-city-333f991505e04b51bf77e0caf6a496e5
- Cloud City low poly (Sketchfab, CC BY): https://sketchfab.com/3d-models/cloud-city-bespin-low-poly-8e708a2749484750ae9aeab27f579d37
- Cloud car (Sketchfab, CC BY): https://sketchfab.com/3d-models/star-wars-storm-iv-twin-pod-cloud-car-9bc20239f9c34ed1baacb9a49ba9377d
- Star destroyer (Sketchfab, CC BY): https://sketchfab.com/3d-models/star-destroyer-b5435fed6c3143f99b56f5de862a05bd

---

**Obs:** Modellerna från Sketchfab är CC BY. Ange upphovsperson och licens för varje modell ni använder, i presentationen och i koden/README.
