
## todo

- [ ] fetching, context og dynamiske routes :

    - [ ] Lav et loop som indsætter billeder (3?) med paths i stedet for at indsætte en hardcoded path til et eksisterende Image component

    - [ ] Før dynamisk data (img url) videre fra forsiden til en underside ("dynamictest" route't?)

    - [ ] En knap der ændre billedernes sti med context

- [ ] [søgefunktion](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

- [ ] Vercel giver "ReferenceError: localStorage is not defined" og vil ikke hoste commits med local storage - fix det på en bedre måde end sidste forsøg..

    - [ ] && virkede heller ikke copilot foreslog en try-catch block, hvor error's 'fanges', hvilket kunne hostes, men nu er states helt broken igen (prøv selv), så måske hør copilot, om der kunne være en anden metode, måske det kunne gemmes på en 'server-venlig' måde? Kig i copilot historik efter "Hi. Is this valid code that does the following (...)"

    ---

    - [x] Troels tror (i en anden sammenhæng): `?` (ternary operator(?)) kræver at target eksisterer, mens `&&` (logical AND) ikke gør -- VIL DET FIXE DET AT BRUGE `&&` ???

- [ ] og det ville være smart at flytte context states ind i context.js i stedet for der hvor de kaldes (ind til videre kun Body.js), så der kun er en fil der skal redigeres.

    - [ ] hvis du når helt her ned vil det være smart at kigge netninjas tut færdig, måske han gør noget med hvordan objekter kan skrives og sendes, så dette kan opnås osv.

---

- [x] gem context i local storage

~~- [x] få delvis class ændring til at virke (gpt allerede prompted)~~

- [x] det virkede ikke, så lav i stedet hele dynamiske classes til border osv.

    [x] Hvis useEffect ikke har noget effekt (pun), så slet den — eller lad den stå og skriv en kommentar om at den ikke gør andet end at logge i konsollen

    [x] og afinstaller [classNames](https://www.npmjs.com/package/classnames) biblioteket
