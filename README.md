# Angular Order Confirm Animation

Deze repository bevat een voorbeeld van een geanimeerde bestelknop, gebaseerd
op een voorbeeld van Coding Stella. De animatie toont een vrachtwagen en een
doos die over een knop rijden wanneer de gebruiker op "Complete Order" klikt.
Het project is herschreven voor een moderne Angular 19‑omgeving zonder
jQuery.

## Structuur

```text
order-confirm-animation/
├─ order-confirm.component.ts    # Angular component met click‑logica
├─ order-confirm.component.html  # Mark‑up van de bestelknop
├─ order-confirm.component.css   # CSS met alle keyframes en styling
├─ preview.html                  # Zelfstandig voorbeeld om de animatie te bekijken
└─ README.md                     # Dit bestand
```

### Component bestanden

- **`order-confirm.component.ts`**: definieert het Angular component en bevat een
  boolean `isAnimating` waarmee de CSS‑klasse `animate` gedurende tien
  seconden wordt toegevoegd na een klik.
- **`order-confirm.component.html`**: bevat de structuur van de knop met de
  vrachtwagen, de doos en de lampjes.
- **`order-confirm.component.css`**: definieert variabelen, basisstijlen
  en alle CSS‑keyframes voor de animatie.

### `preview.html`

Het bestand `preview.html` bevat dezelfde HTML en CSS als het component,
met een klein stukje JavaScript om de `animate`‑klasse toe te voegen en na
10 seconden weer te verwijderen. Zo kun je de animatie bekijken zonder
Angular te installeren. Open dit bestand in een moderne browser en klik op
"Complete Order" om de animatie te zien.

## Gebruiken in Angular

1. Voeg de bestanden `order-confirm.component.html`, `order-confirm.component.ts`
   en `order-confirm.component.css` toe aan je Angular‑project (bijvoorbeeld in
   een map `order-confirm`).
2. Declareer het component in de bijbehorende module en gebruik vervolgens
   `<app-order-confirm></app-order-confirm>` in je templates.
3. De animatie werkt zonder extra dependencies. Na tien seconden keert de knop
   terug naar de oorspronkelijke staat.

## Licentie

Dit voorbeeld is alleen bedoeld voor educatieve doeleinden en is gebaseerd
op open content van Coding Stella. Gebruik het vrij in je eigen projecten.