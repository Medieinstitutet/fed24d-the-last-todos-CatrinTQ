# 📌 Rättningsrapport – fed24d-the-last-todos-CatrinTQ

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller samtliga krav för både G och VG. Den presenterar en lista med todo-punkter, tillåter användaren att markera dem som klara, och dessa kan även markeras som oklara igen. Användaren kan skapa nya todos via ett formulär. Komponenterna är väl separerade med lyftat tillstånd för delning. Projektet använder TailwindCSS för design och lägger till Dark Mode-funktionalitet. Det finns även funktioner för att sortera todos baserat på datum eller prioritet, vilket uppfyller extra kraven för VG. Koden är generellt välstrukturerad och ger en robust användarupplevelse.

💡 **Förbättringsförslag:**  
Koden är överlag välskriven och strukturerad, men det finns ett par mindre förbättringar som kan övervägas för framtida projekt: 

1. **Typdefinitioner i TypeScript**: Du kan förbättra typ säkerheten i viss mån genom att använda TypeScript's inbyggda enum för prioritet för att undvika eventuella stavfel eller inkonsekvenser. 

2. **Lokal lagring**: Just nu sparas todos i localStorage varje gång komponenten renderas om. Du kan optimera detta genom att bara uppdatera localStorage när 'todos' ändras, t.ex., genom en useEffect-hook. 

3. **Öka Återanvändbarheten**: För DarkModeToggle-komponenten, överväg att bryta ut den i en egen modul med temahantering så att den enkelt kan återanvändas i andra projekt/delar av applikationen.

Med dessa förbättringar skulle projektet bli ännu mer effektivt och återanvändbart.