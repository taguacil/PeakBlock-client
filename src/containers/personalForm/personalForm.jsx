import React ,{Component}from 'react'
import { Dropdown , Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { selfFormActions } from "../../actions";

const options = [
  {
      "key": "Aadorf",
      "value": "Aadorf",
      "text": "Aadorf"
  },
  {
      "key": "Aarau",
      "value": "Aarau",
      "text": "Aarau"
  },
  {
      "key": "Aarburg",
      "value": "Aarburg",
      "text": "Aarburg"
  },
  {
      "key": "Adliswil",
      "value": "Adliswil",
      "text": "Adliswil"
  },
  {
      "key": "Aesch",
      "value": "Aesch",
      "text": "Aesch"
  },
  {
      "key": "Affoltern",
      "value": "Affoltern",
      "text": "Affoltern"
  },
  {
      "key": "Aigle",
      "value": "Aigle",
      "text": "Aigle"
  },
  {
      "key": "Allschwil",
      "value": "Allschwil",
      "text": "Allschwil"
  },
  {
      "key": "Alpnach",
      "value": "Alpnach",
      "text": "Alpnach"
  },
  {
      "key": "Altdorf",
      "value": "Altdorf",
      "text": "Altdorf"
  },
  {
      "key": "Altstatten",
      "value": "Altstatten",
      "text": "Altstatten"
  },
  {
      "key": "Amriswil",
      "value": "Amriswil",
      "text": "Amriswil"
  },
  {
      "key": "Appenzell",
      "value": "Appenzell",
      "text": "Appenzell"
  },
  {
      "key": "Arbon",
      "value": "Arbon",
      "text": "Arbon"
  },
  {
      "key": "Arlesheim",
      "value": "Arlesheim",
      "text": "Arlesheim"
  },
  {
      "key": "Arosa",
      "value": "Arosa",
      "text": "Arosa"
  },
  {
      "key": "Arth",
      "value": "Arth",
      "text": "Arth"
  },
  {
      "key": "Ascona",
      "value": "Ascona",
      "text": "Ascona"
  },
  {
      "key": "Au",
      "value": "Au",
      "text": "Au"
  },
  {
      "key": "Baar",
      "value": "Baar",
      "text": "Baar"
  },
  {
      "key": "Baden",
      "value": "Baden",
      "text": "Baden"
  },
  {
      "key": "Bad Ragaz",
      "value": "Bad Ragaz",
      "text": "Bad Ragaz"
  },
  {
      "key": "Bagnes",
      "value": "Bagnes",
      "text": "Bagnes"
  },
  {
      "key": "Balsthal",
      "value": "Balsthal",
      "text": "Balsthal"
  },
  {
      "key": "Basel",
      "value": "Basel",
      "text": "Basel"
  },
  {
      "key": "Bassersdorf",
      "value": "Bassersdorf",
      "text": "Bassersdorf"
  },
  {
      "key": "Bellinzona",
      "value": "Bellinzona",
      "text": "Bellinzona"
  },
  {
      "key": "Belp",
      "value": "Belp",
      "text": "Belp"
  },
  {
      "key": "Bern",
      "value": "Bern",
      "text": "Bern"
  },
  {
      "key": "Bernex",
      "value": "Bernex",
      "text": "Bernex"
  },
  {
      "key": "Bex",
      "value": "Bex",
      "text": "Bex"
  },
  {
      "key": "Biasca",
      "value": "Biasca",
      "text": "Biasca"
  },
  {
      "key": "Biberist",
      "value": "Biberist",
      "text": "Biberist"
  },
  {
      "key": "Biel",
      "value": "Biel",
      "text": "Biel"
  },
  {
      "key": "Binningen",
      "value": "Binningen",
      "text": "Binningen"
  },
  {
      "key": "Birmensdorf",
      "value": "Birmensdorf",
      "text": "Birmensdorf"
  },
  {
      "key": "Birsfelden",
      "value": "Birsfelden",
      "text": "Birsfelden"
  },
  {
      "key": "Blonay",
      "value": "Blonay",
      "text": "Blonay"
  },
  {
      "key": "Bolligen",
      "value": "Bolligen",
      "text": "Bolligen"
  },
  {
      "key": "Bottmingen",
      "value": "Bottmingen",
      "text": "Bottmingen"
  },
  {
      "key": "Boudry",
      "value": "Boudry",
      "text": "Boudry"
  },
  {
      "key": "Bremgarten",
      "value": "Bremgarten",
      "text": "Bremgarten"
  },
  {
      "key": "Brugg",
      "value": "Brugg",
      "text": "Brugg"
  },
  {
      "key": "Bubikon",
      "value": "Bubikon",
      "text": "Bubikon"
  },
  {
      "key": "Buchrain",
      "value": "Buchrain",
      "text": "Buchrain"
  },
  {
      "key": "Buchs",
      "value": "Buchs",
      "text": "Buchs"
  },
  {
      "key": "Buchs",
      "value": "Buchs",
      "text": "Buchs"
  },
  {
      "key": "Bulach",
      "value": "Bulach",
      "text": "Bulach"
  },
  {
      "key": "Bulle",
      "value": "Bulle",
      "text": "Bulle"
  },
  {
      "key": "Buochs",
      "value": "Buochs",
      "text": "Buochs"
  },
  {
      "key": "Burgdorf",
      "value": "Burgdorf",
      "text": "Burgdorf"
  },
  {
      "key": "Bussigny",
      "value": "Bussigny",
      "text": "Bussigny"
  },
  {
      "key": "Carouge",
      "value": "Carouge",
      "text": "Carouge"
  },
  {
      "key": "Cham",
      "value": "Cham",
      "text": "Cham"
  },
  {
      "key": "Chavannes",
      "value": "Chavannes",
      "text": "Chavannes"
  },
  {
      "key": "Chene-Bougeries",
      "value": "Chene-Bougeries",
      "text": "Chene-Bougeries"
  },
  {
      "key": "Chene-Bourg",
      "value": "Chene-Bourg",
      "text": "Chene-Bourg"
  },
  {
      "key": "Chiasso",
      "value": "Chiasso",
      "text": "Chiasso"
  },
  {
      "key": "Chur",
      "value": "Chur",
      "text": "Chur"
  },
  {
      "key": "Colombier",
      "value": "Colombier",
      "text": "Colombier"
  },
  {
      "key": "Conthey",
      "value": "Conthey",
      "text": "Conthey"
  },
  {
      "key": "Crissier",
      "value": "Crissier",
      "text": "Crissier"
  },
  {
      "key": "Delemont",
      "value": "Delemont",
      "text": "Delemont"
  },
  {
      "key": "Derendingen",
      "value": "Derendingen",
      "text": "Derendingen"
  },
  {
      "key": "Diepoldsau",
      "value": "Diepoldsau",
      "text": "Diepoldsau"
  },
  {
      "key": "Dietikon",
      "value": "Dietikon",
      "text": "Dietikon"
  },
  {
      "key": "Dietlikon",
      "value": "Dietlikon",
      "text": "Dietlikon"
  },
  {
      "key": "Domat",
      "value": "Domat",
      "text": "Domat"
  },
  {
      "key": "Dornach",
      "value": "Dornach",
      "text": "Dornach"
  },
  {
      "key": "Dubendorf",
      "value": "Dubendorf",
      "text": "Dubendorf"
  },
  {
      "key": "Dudingen",
      "value": "Dudingen",
      "text": "Dudingen"
  },
  {
      "key": "Durnten",
      "value": "Durnten",
      "text": "Durnten"
  },
  {
      "key": "Ebikon",
      "value": "Ebikon",
      "text": "Ebikon"
  },
  {
      "key": "Ebnat-Kappel",
      "value": "Ebnat-Kappel",
      "text": "Ebnat-Kappel"
  },
  {
      "key": "Ecublens",
      "value": "Ecublens",
      "text": "Ecublens"
  },
  {
      "key": "Egg",
      "value": "Egg",
      "text": "Egg"
  },
  {
      "key": "Einsiedeln",
      "value": "Einsiedeln",
      "text": "Einsiedeln"
  },
  {
      "key": "Embrach",
      "value": "Embrach",
      "text": "Embrach"
  },
  {
      "key": "Emmen",
      "value": "Emmen",
      "text": "Emmen"
  },
  {
      "key": "Epalinges",
      "value": "Epalinges",
      "text": "Epalinges"
  },
  {
      "key": "Eschenbach",
      "value": "Eschenbach",
      "text": "Eschenbach"
  },
  {
      "key": "Ettingen",
      "value": "Ettingen",
      "text": "Ettingen"
  },
  {
      "key": "Fallanden",
      "value": "Fallanden",
      "text": "Fallanden"
  },
  {
      "key": "Flawil",
      "value": "Flawil",
      "text": "Flawil"
  },
  {
      "key": "Flums",
      "value": "Flums",
      "text": "Flums"
  },
  {
      "key": "Frauenfeld",
      "value": "Frauenfeld",
      "text": "Frauenfeld"
  },
  {
      "key": "Freienbach",
      "value": "Freienbach",
      "text": "Freienbach"
  },
  {
      "key": "Frenkendorf",
      "value": "Frenkendorf",
      "text": "Frenkendorf"
  },
  {
      "key": "Fribourg",
      "value": "Fribourg",
      "text": "Fribourg"
  },
  {
      "key": "Frutigen",
      "value": "Frutigen",
      "text": "Frutigen"
  },
  {
      "key": "Fully",
      "value": "Fully",
      "text": "Fully"
  },
  {
      "key": "Gelterkinden",
      "value": "Gelterkinden",
      "text": "Gelterkinden"
  },
  {
      "key": "Geneva",
      "value": "Geneva",
      "text": "Geneva"
  },
  {
      "key": "Gerlafingen",
      "value": "Gerlafingen",
      "text": "Gerlafingen"
  },
  {
      "key": "Giubiasco",
      "value": "Giubiasco",
      "text": "Giubiasco"
  },
  {
      "key": "Gland",
      "value": "Gland",
      "text": "Gland"
  },
  {
      "key": "Glarus",
      "value": "Glarus",
      "text": "Glarus"
  },
  {
      "key": "Gossau",
      "value": "Gossau",
      "text": "Gossau"
  },
  {
      "key": "Gossau",
      "value": "Gossau",
      "text": "Gossau"
  },
  {
      "key": "Grabs",
      "value": "Grabs",
      "text": "Grabs"
  },
  {
      "key": "Granichen",
      "value": "Granichen",
      "text": "Granichen"
  },
  {
      "key": "Greifensee",
      "value": "Greifensee",
      "text": "Greifensee"
  },
  {
      "key": "Grenchen",
      "value": "Grenchen",
      "text": "Grenchen"
  },
  {
      "key": "Heimberg",
      "value": "Heimberg",
      "text": "Heimberg"
  },
  {
      "key": "Hergiswil",
      "value": "Hergiswil",
      "text": "Hergiswil"
  },
  {
      "key": "Herisau",
      "value": "Herisau",
      "text": "Herisau"
  },
  {
      "key": "Herrliberg",
      "value": "Herrliberg",
      "text": "Herrliberg"
  },
  {
      "key": "Herzogenbuchsee",
      "value": "Herzogenbuchsee",
      "text": "Herzogenbuchsee"
  },
  {
      "key": "Hinwil",
      "value": "Hinwil",
      "text": "Hinwil"
  },
  {
      "key": "Hochdorf",
      "value": "Hochdorf",
      "text": "Hochdorf"
  },
  {
      "key": "Hombrechtikon",
      "value": "Hombrechtikon",
      "text": "Hombrechtikon"
  },
  {
      "key": "Horgen",
      "value": "Horgen",
      "text": "Horgen"
  },
  {
      "key": "Horw",
      "value": "Horw",
      "text": "Horw"
  },
  {
      "key": "Hunenberg",
      "value": "Hunenberg",
      "text": "Hunenberg"
  },
  {
      "key": "Huttwil",
      "value": "Huttwil",
      "text": "Huttwil"
  },
  {
      "key": "Igis",
      "value": "Igis",
      "text": "Igis"
  },
  {
      "key": "Ingenbohl",
      "value": "Ingenbohl",
      "text": "Ingenbohl"
  },
  {
      "key": "Interlaken",
      "value": "Interlaken",
      "text": "Interlaken"
  },
  {
      "key": "Jona",
      "value": "Jona",
      "text": "Jona"
  },
  {
      "key": "Kerns",
      "value": "Kerns",
      "text": "Kerns"
  },
  {
      "key": "Kilchberg",
      "value": "Kilchberg",
      "text": "Kilchberg"
  },
  {
      "key": "Kirchberg",
      "value": "Kirchberg",
      "text": "Kirchberg"
  },
  {
      "key": "Kirchberg",
      "value": "Kirchberg",
      "text": "Kirchberg"
  },
  {
      "key": "Kloten",
      "value": "Kloten",
      "text": "Kloten"
  },
  {
      "key": "Koniz",
      "value": "Koniz",
      "text": "Koniz"
  },
  {
      "key": "Konolfingen",
      "value": "Konolfingen",
      "text": "Konolfingen"
  },
  {
      "key": "Kreuzlingen",
      "value": "Kreuzlingen",
      "text": "Kreuzlingen"
  },
  {
      "key": "Kriens",
      "value": "Kriens",
      "text": "Kriens"
  },
  {
      "key": "Kusnacht",
      "value": "Kusnacht",
      "text": "Kusnacht"
  },
  {
      "key": "Kussnacht",
      "value": "Kussnacht",
      "text": "Kussnacht"
  },
  {
      "key": "Kuttigen",
      "value": "Kuttigen",
      "text": "Kuttigen"
  },
  {
      "key": "La Chaux-de-Fonds",
      "value": "La Chaux-de-Fonds",
      "text": "La Chaux-de-Fonds"
  },
  {
      "key": "Lachen",
      "value": "Lachen",
      "text": "Lachen"
  },
  {
      "key": "Langenthal",
      "value": "Langenthal",
      "text": "Langenthal"
  },
  {
      "key": "Langnau",
      "value": "Langnau",
      "text": "Langnau"
  },
  {
      "key": "Langnau",
      "value": "Langnau",
      "text": "Langnau"
  },
  {
      "key": "La Tour-de-Peilz",
      "value": "La Tour-de-Peilz",
      "text": "La Tour-de-Peilz"
  },
  {
      "key": "Laufen",
      "value": "Laufen",
      "text": "Laufen"
  },
  {
      "key": "Lausanne",
      "value": "Lausanne",
      "text": "Lausanne"
  },
  {
      "key": "Lausen",
      "value": "Lausen",
      "text": "Lausen"
  },
  {
      "key": "Le Grand-Saconnex",
      "value": "Le Grand-Saconnex",
      "text": "Le Grand-Saconnex"
  },
  {
      "key": "Le Locle",
      "value": "Le Locle",
      "text": "Le Locle"
  },
  {
      "key": "Le Mont-sur-Lausanne",
      "value": "Le Mont-sur-Lausanne",
      "text": "Le Mont-sur-Lausanne"
  },
  {
      "key": "Lengnau",
      "value": "Lengnau",
      "text": "Lengnau"
  },
  {
      "key": "Lenzburg",
      "value": "Lenzburg",
      "text": "Lenzburg"
  },
  {
      "key": "Liestal",
      "value": "Liestal",
      "text": "Liestal"
  },
  {
      "key": "Littau",
      "value": "Littau",
      "text": "Littau"
  },
  {
      "key": "Locarno",
      "value": "Locarno",
      "text": "Locarno"
  },
  {
      "key": "Losone",
      "value": "Losone",
      "text": "Losone"
  },
  {
      "key": "Lugano",
      "value": "Lugano",
      "text": "Lugano"
  },
  {
      "key": "Lutry",
      "value": "Lutry",
      "text": "Lutry"
  },
  {
      "key": "Luzern",
      "value": "Luzern",
      "text": "Luzern"
  },
  {
      "key": "Lyss",
      "value": "Lyss",
      "text": "Lyss"
  },
  {
      "key": "Malters",
      "value": "Malters",
      "text": "Malters"
  },
  {
      "key": "Mannedorf",
      "value": "Mannedorf",
      "text": "Mannedorf"
  },
  {
      "key": "Martigny",
      "value": "Martigny",
      "text": "Martigny"
  },
  {
      "key": "Massagno",
      "value": "Massagno",
      "text": "Massagno"
  },
  {
      "key": "Maur",
      "value": "Maur",
      "text": "Maur"
  },
  {
      "key": "Meggen",
      "value": "Meggen",
      "text": "Meggen"
  },
  {
      "key": "Meilen",
      "value": "Meilen",
      "text": "Meilen"
  },
  {
      "key": "Meiringen",
      "value": "Meiringen",
      "text": "Meiringen"
  },
  {
      "key": "Mendrisio",
      "value": "Mendrisio",
      "text": "Mendrisio"
  },
  {
      "key": "Menziken",
      "value": "Menziken",
      "text": "Menziken"
  },
  {
      "key": "Meyrin",
      "value": "Meyrin",
      "text": "Meyrin"
  },
  {
      "key": "Minusio",
      "value": "Minusio",
      "text": "Minusio"
  },
  {
      "key": "Mohlin",
      "value": "Mohlin",
      "text": "Mohlin"
  },
  {
      "key": "Monthey",
      "value": "Monthey",
      "text": "Monthey"
  },
  {
      "key": "Montreux",
      "value": "Montreux",
      "text": "Montreux"
  },
  {
      "key": "Morges",
      "value": "Morges",
      "text": "Morges"
  },
  {
      "key": "Moutier",
      "value": "Moutier",
      "text": "Moutier"
  },
  {
      "key": "Munchenbuchsee",
      "value": "Munchenbuchsee",
      "text": "Munchenbuchsee"
  },
  {
      "key": "Munchenstein",
      "value": "Munchenstein",
      "text": "Munchenstein"
  },
  {
      "key": "Munsingen",
      "value": "Munsingen",
      "text": "Munsingen"
  },
  {
      "key": "Muri",
      "value": "Muri",
      "text": "Muri"
  },
  {
      "key": "Muri",
      "value": "Muri",
      "text": "Muri"
  },
  {
      "key": "Murten",
      "value": "Murten",
      "text": "Murten"
  },
  {
      "key": "Muttenz",
      "value": "Muttenz",
      "text": "Muttenz"
  },
  {
      "key": "Naters",
      "value": "Naters",
      "text": "Naters"
  },
  {
      "key": "Nendaz",
      "value": "Nendaz",
      "text": "Nendaz"
  },
  {
      "key": "Neuchatel",
      "value": "Neuchatel",
      "text": "Neuchatel"
  },
  {
      "key": "Neuenhof",
      "value": "Neuenhof",
      "text": "Neuenhof"
  },
  {
      "key": "Neuenkirch",
      "value": "Neuenkirch",
      "text": "Neuenkirch"
  },
  {
      "key": "Nidau",
      "value": "Nidau",
      "text": "Nidau"
  },
  {
      "key": "Nyon",
      "value": "Nyon",
      "text": "Nyon"
  },
  {
      "key": "Oberengstringen",
      "value": "Oberengstringen",
      "text": "Oberengstringen"
  },
  {
      "key": "Oberentfelden",
      "value": "Oberentfelden",
      "text": "Oberentfelden"
  },
  {
      "key": "Oberglatt",
      "value": "Oberglatt",
      "text": "Oberglatt"
  },
  {
      "key": "Oberriet",
      "value": "Oberriet",
      "text": "Oberriet"
  },
  {
      "key": "Obersiggenthal",
      "value": "Obersiggenthal",
      "text": "Obersiggenthal"
  },
  {
      "key": "Oberuzwil",
      "value": "Oberuzwil",
      "text": "Oberuzwil"
  },
  {
      "key": "Oberwil",
      "value": "Oberwil",
      "text": "Oberwil"
  },
  {
      "key": "Oftringen",
      "value": "Oftringen",
      "text": "Oftringen"
  },
  {
      "key": "Ollon",
      "value": "Ollon",
      "text": "Ollon"
  },
  {
      "key": "Olten",
      "value": "Olten",
      "text": "Olten"
  },
  {
      "key": "Onex",
      "value": "Onex",
      "text": "Onex"
  },
  {
      "key": "Opfikon",
      "value": "Opfikon",
      "text": "Opfikon"
  },
  {
      "key": "Orbe",
      "value": "Orbe",
      "text": "Orbe"
  },
  {
      "key": "Payerne",
      "value": "Payerne",
      "text": "Payerne"
  },
  {
      "key": "Peseux",
      "value": "Peseux",
      "text": "Peseux"
  },
  {
      "key": "Pfaffikon",
      "value": "Pfaffikon",
      "text": "Pfaffikon"
  },
  {
      "key": "Plan-les-Ouates",
      "value": "Plan-les-Ouates",
      "text": "Plan-les-Ouates"
  },
  {
      "key": "Porrentruy",
      "value": "Porrentruy",
      "text": "Porrentruy"
  },
  {
      "key": "Pratteln",
      "value": "Pratteln",
      "text": "Pratteln"
  },
  {
      "key": "Pregassona",
      "value": "Pregassona",
      "text": "Pregassona"
  },
  {
      "key": "Prilly",
      "value": "Prilly",
      "text": "Prilly"
  },
  {
      "key": "Pully",
      "value": "Pully",
      "text": "Pully"
  },
  {
      "key": "Rapperswil",
      "value": "Rapperswil",
      "text": "Rapperswil"
  },
  {
      "key": "Regensdorf",
      "value": "Regensdorf",
      "text": "Regensdorf"
  },
  {
      "key": "Reinach",
      "value": "Reinach",
      "text": "Reinach"
  },
  {
      "key": "Renens",
      "value": "Renens",
      "text": "Renens"
  },
  {
      "key": "Rheinfelden",
      "value": "Rheinfelden",
      "text": "Rheinfelden"
  },
  {
      "key": "Richterswil",
      "value": "Richterswil",
      "text": "Richterswil"
  },
  {
      "key": "Risch",
      "value": "Risch",
      "text": "Risch"
  },
  {
      "key": "Romanshorn",
      "value": "Romanshorn",
      "text": "Romanshorn"
  },
  {
      "key": "Rothrist",
      "value": "Rothrist",
      "text": "Rothrist"
  },
  {
      "key": "Rumlang",
      "value": "Rumlang",
      "text": "Rumlang"
  },
  {
      "key": "Ruschlikon",
      "value": "Ruschlikon",
      "text": "Ruschlikon"
  },
  {
      "key": "Ruswil",
      "value": "Ruswil",
      "text": "Ruswil"
  },
  {
      "key": "Ruti",
      "value": "Ruti",
      "text": "Ruti"
  },
  {
      "key": "Saanen",
      "value": "Saanen",
      "text": "Saanen"
  },
  {
      "key": "Saint-Imier",
      "value": "Saint-Imier",
      "text": "Saint-Imier"
  },
  {
      "key": "Sankt Margrethen",
      "value": "Sankt Margrethen",
      "text": "Sankt Margrethen"
  },
  {
      "key": "Sargans",
      "value": "Sargans",
      "text": "Sargans"
  },
  {
      "key": "Sarnen",
      "value": "Sarnen",
      "text": "Sarnen"
  },
  {
      "key": "Saviese",
      "value": "Saviese",
      "text": "Saviese"
  },
  {
      "key": "Schaffhausen",
      "value": "Schaffhausen",
      "text": "Schaffhausen"
  },
  {
      "key": "Schattdorf",
      "value": "Schattdorf",
      "text": "Schattdorf"
  },
  {
      "key": "Schlieren",
      "value": "Schlieren",
      "text": "Schlieren"
  },
  {
      "key": "Schonenwerd",
      "value": "Schonenwerd",
      "text": "Schonenwerd"
  },
  {
      "key": "Schubelbach",
      "value": "Schubelbach",
      "text": "Schubelbach"
  },
  {
      "key": "Schwyz",
      "value": "Schwyz",
      "text": "Schwyz"
  },
  {
      "key": "Seon",
      "value": "Seon",
      "text": "Seon"
  },
  {
      "key": "Seuzach",
      "value": "Seuzach",
      "text": "Seuzach"
  },
  {
      "key": "Sevelen",
      "value": "Sevelen",
      "text": "Sevelen"
  },
  {
      "key": "Sierre",
      "value": "Sierre",
      "text": "Sierre"
  },
  {
      "key": "Sion",
      "value": "Sion",
      "text": "Sion"
  },
  {
      "key": "Sirnach",
      "value": "Sirnach",
      "text": "Sirnach"
  },
  {
      "key": "Sissach",
      "value": "Sissach",
      "text": "Sissach"
  },
  {
      "key": "Solothurn",
      "value": "Solothurn",
      "text": "Solothurn"
  },
  {
      "key": "Spiez",
      "value": "Spiez",
      "text": "Spiez"
  },
  {
      "key": "Spreitenbach",
      "value": "Spreitenbach",
      "text": "Spreitenbach"
  },
  {
      "key": "Stafa",
      "value": "Stafa",
      "text": "Stafa"
  },
  {
      "key": "Stans",
      "value": "Stans",
      "text": "Stans"
  },
  {
      "key": "Steffisburg",
      "value": "Steffisburg",
      "text": "Steffisburg"
  },
  {
      "key": "Steinhausen",
      "value": "Steinhausen",
      "text": "Steinhausen"
  },
  {
      "key": "Suhr",
      "value": "Suhr",
      "text": "Suhr"
  },
  {
      "key": "Sulgen",
      "value": "Sulgen",
      "text": "Sulgen"
  },
  {
      "key": "Sumiswald",
      "value": "Sumiswald",
      "text": "Sumiswald"
  },
  {
      "key": "Sursee",
      "value": "Sursee",
      "text": "Sursee"
  },
  {
      "key": "Teufen",
      "value": "Teufen",
      "text": "Teufen"
  },
  {
      "key": "Thalwil",
      "value": "Thalwil",
      "text": "Thalwil"
  },
  {
      "key": "Therwil",
      "value": "Therwil",
      "text": "Therwil"
  },
  {
      "key": "Thonex",
      "value": "Thonex",
      "text": "Thonex"
  },
  {
      "key": "Thun",
      "value": "Thun",
      "text": "Thun"
  },
  {
      "key": "Trimbach",
      "value": "Trimbach",
      "text": "Trimbach"
  },
  {
      "key": "Uetendorf",
      "value": "Uetendorf",
      "text": "Uetendorf"
  },
  {
      "key": "Unterageri",
      "value": "Unterageri",
      "text": "Unterageri"
  },
  {
      "key": "Unterseen",
      "value": "Unterseen",
      "text": "Unterseen"
  },
  {
      "key": "Untersiggenthal",
      "value": "Untersiggenthal",
      "text": "Untersiggenthal"
  },
  {
      "key": "Urdorf",
      "value": "Urdorf",
      "text": "Urdorf"
  },
  {
      "key": "Urtenen",
      "value": "Urtenen",
      "text": "Urtenen"
  },
  {
      "key": "Uster",
      "value": "Uster",
      "text": "Uster"
  },
  {
      "key": "Uznach",
      "value": "Uznach",
      "text": "Uznach"
  },
  {
      "key": "Uzwil",
      "value": "Uzwil",
      "text": "Uzwil"
  },
  {
      "key": "Vernier",
      "value": "Vernier",
      "text": "Vernier"
  },
  {
      "key": "Versoix",
      "value": "Versoix",
      "text": "Versoix"
  },
  {
      "key": "Vevey",
      "value": "Vevey",
      "text": "Vevey"
  },
  {
      "key": "Veyrier",
      "value": "Veyrier",
      "text": "Veyrier"
  },
  {
      "key": "Viganello",
      "value": "Viganello",
      "text": "Viganello"
  },
  {
      "key": "Villars-sur-Glane",
      "value": "Villars-sur-Glane",
      "text": "Villars-sur-Glane"
  },
  {
      "key": "Villmergen",
      "value": "Villmergen",
      "text": "Villmergen"
  },
  {
      "key": "Visp",
      "value": "Visp",
      "text": "Visp"
  },
  {
      "key": "Volketswil",
      "value": "Volketswil",
      "text": "Volketswil"
  },
  {
      "key": "Wadenswil",
      "value": "Wadenswil",
      "text": "Wadenswil"
  },
  {
      "key": "Wahlern",
      "value": "Wahlern",
      "text": "Wahlern"
  },
  {
      "key": "Wald",
      "value": "Wald",
      "text": "Wald"
  },
  {
      "key": "Wallisellen",
      "value": "Wallisellen",
      "text": "Wallisellen"
  },
  {
      "key": "Wattwil",
      "value": "Wattwil",
      "text": "Wattwil"
  },
  {
      "key": "Weinfelden",
      "value": "Weinfelden",
      "text": "Weinfelden"
  },
  {
      "key": "Wettingen",
      "value": "Wettingen",
      "text": "Wettingen"
  },
  {
      "key": "Wetzikon",
      "value": "Wetzikon",
      "text": "Wetzikon"
  },
  {
      "key": "Wil",
      "value": "Wil",
      "text": "Wil"
  },
  {
      "key": "Windisch",
      "value": "Windisch",
      "text": "Windisch"
  },
  {
      "key": "Winterthur",
      "value": "Winterthur",
      "text": "Winterthur"
  },
  {
      "key": "Wittenbach",
      "value": "Wittenbach",
      "text": "Wittenbach"
  },
  {
      "key": "Wohlen",
      "value": "Wohlen",
      "text": "Wohlen"
  },
  {
      "key": "Wohlen",
      "value": "Wohlen",
      "text": "Wohlen"
  },
  {
      "key": "Wollerau",
      "value": "Wollerau",
      "text": "Wollerau"
  },
  {
      "key": "Worb",
      "value": "Worb",
      "text": "Worb"
  },
  {
      "key": "Yverdon",
      "value": "Yverdon",
      "text": "Yverdon"
  },
  {
      "key": "Zermatt",
      "value": "Zermatt",
      "text": "Zermatt"
  },
  {
      "key": "Zofingen",
      "value": "Zofingen",
      "text": "Zofingen"
  },
  {
      "key": "Zollikofen",
      "value": "Zollikofen",
      "text": "Zollikofen"
  },
  {
      "key": "Zollikon",
      "value": "Zollikon",
      "text": "Zollikon"
  },
  {
      "key": "Zuchwil",
      "value": "Zuchwil",
      "text": "Zuchwil"
  },
  {
      "key": "Zug",
      "value": "Zug",
      "text": "Zug"
  },
  {
      "key": "Zumikon",
      "value": "Zumikon",
      "text": "Zumikon"
  },
  {
      "key": "Zurich",
      "value": "Zurich",
      "text": "Zurich"
  }
]
class PersonalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleNameChange = (e)=>{
        console.log(e.target.value);
        this.props.handleNameChangeinState(e.target.value);
        
    }
    handelEmailChange = (e)=>{
        this.props.handleEmailChangeinState(e.target.value);
        
    }
    
    handleLocationChange = (e)=>{
        this.props.handleLocationChangeinState(e.target.value);
        
    }
    render() { 
        return (
        <Form.Group> 
          <Form.Field inline>
          <label>Name</label>
          <input
            placeholder={'youe name'}
            onChange={e => this.handleNameChange(e)}
          />

        </Form.Field>
        
        <Form.Field inline>
          <label>Email address</label>
          <input
            placeholder={'youe email address'}
            onChange={e => this.handelEmailChange(e)}
          />
        </Form.Field>
        <Dropdown
            deburr
            fluid
            options={options}
            placeholder='Select your City'
            search
            selection
            onChange={e => this.handleLocationChange(e)}

          />
 </Form.Group>
           );
    }
}
function mapState(state, ownProps) {
    const {selfForm}= state
   /* const { user } = state.authentication;
    const { posts } = state.home;*/
    return { selfForm};
}

const actionCreators = {
    handleHeadacheChangeinState:selfFormActions.handleHeadacheChange,
    handleNameChangeinState:selfFormActions.handleNameChange,
    handleEmailChangeinState:selfFormActions.handleEmailChange,
    handleLocationChangeinState:selfFormActions.handleLocationChange,
    

};

const connectedPersonalForm = connect(mapState, actionCreators)(PersonalForm);
export { connectedPersonalForm as Personal };

