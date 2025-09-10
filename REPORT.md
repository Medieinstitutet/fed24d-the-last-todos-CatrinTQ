# 📌 Rättningsrapport – fed24d-the-last-todos-CatrinTQ

## 🎯 Uppgiftens Krav:
# 📝 The Last Todos

Ett React-projekt byggt med Vite, publicerat via GitHub Pages.

## 🚀 Demo

👉 [Live-sidan här](https://medieinstitutet.github.io/fed24d-the-last-todos-CatrinTQ/)

---

## 📦 Tech stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- GitHub Pages

---

## 📋 Uppgiftskrav

### Betyg G
- [x] Hårdkodad lista med todos (ej bara text)
- [x] Lista renderas på skärmen i HTML-struktur (t.ex. `ul/li`)
- [x] Klickhändelse för att ta bort todo
- [x] Todo markeras som klar både visuellt och i JS-listan
- [x] Använder `localStorage` för att spara todos
- [x] Minst en React-komponent används
- [x] State används med lista av objekt

### Betyg VG
- [x] Visar även klara todos och kan markera dem som oklara igen
- [x] Formulär för att lägga till nya todos
- [x] Funktion för att sortera todos
- [x] Grafiskt ramverk implementerat (t.ex. Tailwind CSS)
- [x] Minst tre komponenter
- [x] "Lifting State Up" används

---


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G och VG. Projektet hanterar todos med funktioner för att lägga till, ta bort, markera som klara, samt spara dessa i localStorage. Användare kan även ändra mellan klar och oklart status, sortera todos och växla mellan ljus och mörkt tema. Tailwind CSS används effektivt för styling och komponentstrukturen är god med well defined props och state management.

💡 **Förbättringsförslag:**  
Koden är välstrukturerad och uppfyller samtliga krav men kan förbättras genom att: 
1. Optimera `localStorage` hanteringen - Flytta all `localStorage` uppdatering till en `useEffect` beroende på `todos`. Nuvarande implementation skriver till `localStorage` efter varje enskild funktion och kan leda till onödiga operationer. 
2. Separera CSS-klasser genom att hålla dem mer DRY genom att extrahera återanvända klasser till filen App.css.
3. Överväg att använda en state management lösning som Redux eller Context API för skalbarhet, om detta är framtida prioritet.