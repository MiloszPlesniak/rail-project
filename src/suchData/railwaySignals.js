import { nanoid } from "nanoid";

export const railwaySignals = [
  {
    name: "Sygnał S 1 „Stój”",
    code: [0, 1, 0, 0],
    descryption:
      "Sygnał S 1 nakazuje zatrzymanie pociąguoraz manewrów przed tym semaforem.",
    id: nanoid(),
  },
  {
    name: "Sygnał S 2 „Jazda z największą dozwoloną prędkością”",
    code: [2, 0, 0, 0],
    descryption:
      "Sygnał S 2 zezwala na jazdę z największą dozwoloną prędkością i informuje, że na następnym semaforze,jeżeli semafor nadający sygnał S 2 jest z nim uzależniony, nadawany jest sygnał zezwalający najazdęz największą dozwoloną prędkością;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 3 „Jazda z największą dozwoloną prędkością  wprzodzie są dwa odstępy blokowe wolne  albo przynastępnym semaforze z prędkością nie większą niż 100 km/h”",
    code: [5, 0, 0, 0],
    descryption:
      "Semafor półsamoczynny lub ostatni semafor samoczynny blokady liniowej informuje, że następny semafor może nadawać sygnał zezwalający na jazdę z prędkością niewiększą niż 100 km/h; Semafor samoczynny blokady liniowej lub semafor wyjazdowy na szlak wyposażony w samoczynną blokadę liniową informuje, że dwa kolejne odstępy blokowe zatym semaforem są wolne",
    id: nanoid(),
  },
  {
    name: "Sygnał S 4 „Następny semafor wskazuje sygnał zezwalający na jazdę z prędkością zmniejszoną do 40 lub 60 km/h”",
    code: [6, 0, 0, 0],
    descryption:
      "Sygnał S 4 zezwala na jazdę z największą prędkością dozwoloną dla danego pociągu na danym odcinku linii kolejowej wskazaną w WRJ i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nieprzekraczającą 40 lub 60 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 5 „Następny semafor nadaje sygnał Stój",
    code: [3, 0, 0, 0],
    descryption:
      "Sygnał S 5 informuje, że następny semafor nadaje sygnał „Stój”, maszynista powinien tak regulować prędkość jazdy, aby mógł zatrzymać pociąg przed następnym semaforem wskazującym sygnał „Stój”.",
    id: nanoid(),
  },
  {
    name: "Sygnał S 6 Jazda z prędkością nieprzekraczającą 100 km/h - a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 2],
    descryption:
      "Sygnał S 6 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S 6 jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
  },
  {
    name: "Sygnał S 7 Jazda z prędkością nieprzekraczającą 100 km/h przy tym i następnym semaforze",
    code: [5, 0, 3, 2],
    descryption:
      "Sygnał S 7 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 8 Jazda z prędkością nieprzekraczającą 100 km/h a przy następnym semaforze z prędkością zmniejszoną do 40 lub 60 km/h”",
    code: [6, 0, 3, 2],
    descryption:
      "Sygnał S 8 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 9 Jazda z prędkością nieprzekraczającą 100 km/h,a przy następnym semaforze - Stój",
    code: [3, 0, 3, 2],
    descryption:
      "Sygnał S 9 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 10 Jazda z prędkością nieprzekraczającą 40 km/h a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 0],
    descryption:
      "Sygnał S 10 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S 10 jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
  },
  {
    name: "Sygnał S 10 a Jazda z prędkością nieprzekraczającą 60 km/h a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 3],
    descryption:
      "Sygnał S 10a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S 10a jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
  },
  {
    name: "Sygnał S 11 Jazda z prędkością nieprzekraczająca 40 km/h a przy następnym semaforze z prędkością nieprzekraczającą 100 km/h",
    code: [5, 0, 3, 0],
    descryption:
      "Sygnał S 11 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał s 11a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - z prędkością nieprzekraczającą 100km/h",
    code: [5, 0, 3, 3],
    descryption:
      "Sygnał S 11a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 12 jazda z prędkością nieprzekraczającą 40 km/h, a przy następnym semaforze - z prędkością nieprzekraczającą 40 lub 60 km/h",
    code: [6, 0, 3, 0],
    descryption:
      "Sygnał S 12 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 12a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - z prędkością zmniejszoną do 40 lub 60km/h”",
    code: [6, 0, 3, 3],
    descryption:
      "Sygnał S 12a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 13 Jazda z prędkością nieprzekraczającą 40 km/h, a przy następnym semaforze - Stój”",
    code: [3, 0, 3, 0],
    descryption:
      "Sygnał S 13 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
  },
  {
    name: "Sygnał S 13a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - Stój”:",
    code: [3, 0, 3, 3],
    descryption:
      "Sygnał S 13a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
  },
  {
    name: "Sygnał zastępczy Sz „Można przejechać obok semafora wskazującego sygnał „Stój” albo sygnał wątpliwy, albo też semafora nieoświetlonego lub przejechać obok sygnalizatora sygnału zastępczego, mającego wyłącznie latarnię ze światłem białym - bez rozkazu pisemnego”",
    code: [1, 0, 4, 0],
    descryption:
      "Jazdę, obok semafora z prędkością nie większą niż 40 km/h i nie wymaga zatrzymania się przed nim jazdę do następnego semafora, tarczy zaporowej, miejsca ustawienia tarczy zatrzymania D 1 Sygnał zastępczy Sz zezwala na: przy wyjeździe na szlak z PBL jazda z prędkością do 40 km/h obowiązuje w granicach posterunku ruchu. Przy wyjeździe na szlak z SBL – 20km/h",
    id: nanoid(),
  },
];
