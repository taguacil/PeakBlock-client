import React, { useState ,PureComponent} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import PolylineOverlay from './ployline'
import { Icon ,Dropdown , Grid} from 'semantic-ui-react';
const data = {
  "confirmedCases": [
      {
          "city": "Schlieren",
          "count": 7,
          "population": 13762,
          "lon": 8.448587,
          "lat": 47.39646
      },
      {
          "city": "Glarus",
          "count": 5,
          "population": 5889,
          "lon": 9.068036,
          "lat": 47.04057
      },
      {
          "city": "Wittenbach",
          "count": 5,
          "population": 8283,
          "lon": 9.37761,
          "lat": 47.463075
      },
      {
          "city": "Muttenz",
          "count": 5,
          "population": 16646,
          "lon": 7.644511,
          "lat": 47.52525900000001
      },
      {
          "city": "Ruschlikon",
          "count": 5,
          "population": 5246,
          "lon": 8.555743,
          "lat": 47.307744
      },
      {
          "city": "Ebnat-Kappel",
          "count": 4,
          "population": 4740,
          "lon": 9.124726,
          "lat": 47.261951
      },
      {
          "city": "Brugg",
          "count": 4,
          "population": 9159,
          "lon": 8.203014,
          "lat": 47.481527
      },
      {
          "city": "Reinach",
          "count": 4,
          "population": 7756,
          "lon": 8.188452999999999,
          "lat": 47.259435
      },
      {
          "city": "Baden",
          "count": 4,
          "population": 16659,
          "lon": 8.302764,
          "lat": 47.478029
      },
      {
          "city": "Wadenswil",
          "count": 4,
          "population": 19473,
          "lon": 8.670585,
          "lat": 47.228726
      },
      {
          "city": "Obersiggenthal",
          "count": 4,
          "population": 7683,
          "lon": 8.290436999999999,
          "lat": 47.489554
      },
      {
          "city": "Rothrist",
          "count": 4,
          "population": 7141,
          "lon": 7.8909449999999985,
          "lat": 47.305162
      },
      {
          "city": "Ecublens",
          "count": 4,
          "population": 10655,
          "lon": 6.808706,
          "lat": 46.60915
      },
      {
          "city": "Nyon",
          "count": 4,
          "population": 17071,
          "lon": 6.239319,
          "lat": 46.388848
      },
      {
          "city": "Saviese",
          "count": 4,
          "population": 5653,
          "lon": 7.345578,
          "lat": 46.251153
      },
      {
          "city": "Delemont",
          "count": 4,
          "population": 11567,
          "lon": 7.329005,
          "lat": 47.366429
      },
      {
          "city": "Orbe",
          "count": 4,
          "population": 5466,
          "lon": 6.530103,
          "lat": 46.724717
      },
      {
          "city": "Chene-Bourg",
          "count": 4,
          "population": 8038,
          "lon": 6.196567,
          "lat": 46.193049
      },
      {
          "city": "Altstatten",
          "count": 4,
          "population": 10585,
          "lon": 9.548989,
          "lat": 47.379433
      },
      {
          "city": "Locarno",
          "count": 3,
          "population": 13998,
          "lon": 8.799253,
          "lat": 46.16497
      },
      {
          "city": "Visp",
          "count": 3,
          "population": 6560,
          "lon": 7.884736,
          "lat": 46.294524
      },
      {
          "city": "Lausanne",
          "count": 3,
          "population": 118015,
          "lon": 6.666667,
          "lat": 46.533333
      },
      {
          "city": "Suhr",
          "count": 3,
          "population": 9522,
          "lon": 8.079669,
          "lat": 47.371725
      },
      {
          "city": "Zug",
          "count": 3,
          "population": 24197,
          "lon": 8.517445,
          "lat": 47.172421
      },
      {
          "city": "Spreitenbach",
          "count": 3,
          "population": 10544,
          "lon": 8.363006,
          "lat": 47.42015900000001
      },
      {
          "city": "Bernex",
          "count": 3,
          "population": 9266,
          "lon": 6.074159,
          "lat": 46.177162
      },
      {
          "city": "Ruti",
          "count": 3,
          "population": 11361,
          "lon": 8.852445,
          "lat": 47.261507
      },
      {
          "city": "Gossau",
          "count": 3,
          "population": 17268,
          "lon": 9.251252,
          "lat": 47.41694
      },
      {
          "city": "Koniz",
          "count": 3,
          "population": 35961,
          "lon": 7.4086880000000015,
          "lat": 46.923391
      },
      {
          "city": "Steinhausen",
          "count": 3,
          "population": 8640,
          "lon": 8.485809,
          "lat": 47.195101
      },
      {
          "city": "Therwil",
          "count": 3,
          "population": 8986,
          "lon": 7.552859,
          "lat": 47.501166
      },
      {
          "city": "Zollikofen",
          "count": 3,
          "population": 9144,
          "lon": 7.4590130000000014,
          "lat": 46.99567800000001
      },
      {
          "city": "Gelterkinden",
          "count": 3,
          "population": 5541,
          "lon": 7.851739999999999,
          "lat": 47.464968
      },
      {
          "city": "Buchs",
          "count": 3,
          "population": 6397,
          "lon": 8.073525,
          "lat": 47.387774
      },
      {
          "city": "Flawil",
          "count": 3,
          "population": 9878,
          "lon": 9.182838,
          "lat": 47.414611
      },
      {
          "city": "Hombrechtikon",
          "count": 3,
          "population": 7795,
          "lon": 8.77437,
          "lat": 47.25208
      },
      {
          "city": "Unterseen",
          "count": 3,
          "population": 5283,
          "lon": 7.847225,
          "lat": 46.6853
      },
      {
          "city": "Laufen",
          "count": 3,
          "population": 5223,
          "lon": 7.507521,
          "lat": 47.420878
      },
      {
          "city": "Herzogenbuchsee",
          "count": 3,
          "population": 5734,
          "lon": 7.707457000000002,
          "lat": 47.187406
      },
      {
          "city": "Basel",
          "count": 3,
          "population": 164474,
          "lon": 7.573271000000001,
          "lat": 47.558395
      },
      {
          "city": "Urdorf",
          "count": 3,
          "population": 9247,
          "lon": 8.428597,
          "lat": 47.382958
      },
      {
          "city": "Wil",
          "count": 3,
          "population": 17234,
          "lon": 9.04289,
          "lat": 47.462147
      },
      {
          "city": "Wohlen",
          "count": 3,
          "population": 14163,
          "lon": 8.278768,
          "lat": 47.352359
      },
      {
          "city": "Wattwil",
          "count": 3,
          "population": 8129,
          "lon": 9.08757,
          "lat": 47.302253
      },
      {
          "city": "Binningen",
          "count": 3,
          "population": 15046,
          "lon": 7.568511999999999,
          "lat": 47.533588
      },
      {
          "city": "Boudry",
          "count": 3,
          "population": 5038,
          "lon": 6.83897,
          "lat": 46.953019
      },
      {
          "city": "Bulle",
          "count": 3,
          "population": 12460,
          "lon": 7.056742999999999,
          "lat": 46.619499
      },
      {
          "city": "Massagno",
          "count": 3,
          "population": 5918,
          "lon": 8.945343,
          "lat": 46.015621
      },
      {
          "city": "Grenchen",
          "count": 2,
          "population": 16135,
          "lon": 7.3965770000000015,
          "lat": 47.19354000000001
      },
      {
          "city": "Onex",
          "count": 2,
          "population": 16796,
          "lon": 6.1018089999999985,
          "lat": 46.183909
      },
      {
          "city": "Appenzell",
          "count": 2,
          "population": 5541,
          "lon": 9.410547,
          "lat": 47.32891400000001
      },
      {
          "city": "Versoix",
          "count": 2,
          "population": 11660,
          "lon": 6.161658999999998,
          "lat": 46.284017
      },
      {
          "city": "Diepoldsau",
          "count": 2,
          "population": 5351,
          "lon": 9.655969,
          "lat": 47.384835
      },
      {
          "city": "Frenkendorf",
          "count": 2,
          "population": 5984,
          "lon": 7.716483,
          "lat": 47.506858
      },
      {
          "city": "Le Mont-sur-Lausanne",
          "count": 2,
          "population": 5139,
          "lon": 6.634562,
          "lat": 46.557743
      },
      {
          "city": "Lausen",
          "count": 2,
          "population": 5043,
          "lon": 7.765687,
          "lat": 47.475823
      },
      {
          "city": "Crissier",
          "count": 2,
          "population": 6915,
          "lon": 6.571253,
          "lat": 46.55165
      },
      {
          "city": "Yverdon",
          "count": 2,
          "population": 23756,
          "lon": 6.635502000000002,
          "lat": 46.777908
      },
      {
          "city": "Vevey",
          "count": 2,
          "population": 16014,
          "lon": 6.841168,
          "lat": 46.46526400000001
      },
      {
          "city": "Bad Ragaz",
          "count": 2,
          "population": 4786,
          "lon": 9.501217,
          "lat": 47.005367
      },
      {
          "city": "Horgen",
          "count": 2,
          "population": 18055,
          "lon": 8.598672,
          "lat": 47.255924
      },
      {
          "city": "Thun",
          "count": 2,
          "population": 41539,
          "lon": 7.621663000000002,
          "lat": 46.751176
      },
      {
          "city": "Minusio",
          "count": 2,
          "population": 6772,
          "lon": 8.820102,
          "lat": 46.175242
      },
      {
          "city": "Chiasso",
          "count": 2,
          "population": 8232,
          "lon": 9.02054,
          "lat": 45.83491
      },
      {
          "city": "Neuchatel",
          "count": 2,
          "population": 31216,
          "lon": 6.93005,
          "lat": 46.99308900000001
      },
      {
          "city": "Arlesheim",
          "count": 2,
          "population": 9737,
          "lon": 7.619839,
          "lat": 47.495875
      },
      {
          "city": "Derendingen",
          "count": 2,
          "population": 5916,
          "lon": 7.588438000000001,
          "lat": 47.198505
      },
      {
          "city": "Schattdorf",
          "count": 2,
          "population": 4779,
          "lon": 8.654655,
          "lat": 46.865501
      },
      {
          "city": "Affoltern",
          "count": 2,
          "population": 10415,
          "lon": 8.45346,
          "lat": 47.281224
      },
      {
          "city": "Horw",
          "count": 2,
          "population": 12110,
          "lon": 8.309556,
          "lat": 47.016917
      },
      {
          "city": "Hergiswil",
          "count": 2,
          "population": 5477,
          "lon": 8.310356,
          "lat": 46.984209
      },
      {
          "city": "Schaffhausen",
          "count": 2,
          "population": 34445,
          "lon": 8.634929,
          "lat": 47.697316
      },
      {
          "city": "Aigle",
          "count": 2,
          "population": 7897,
          "lon": 6.964567,
          "lat": 46.318103
      },
      {
          "city": "Bremgarten",
          "count": 2,
          "population": 6702,
          "lon": 8.329955,
          "lat": 47.352604
      },
      {
          "city": "Zumikon",
          "count": 2,
          "population": 5082,
          "lon": 8.620752,
          "lat": 47.327409
      },
      {
          "city": "Giubiasco",
          "count": 2,
          "population": 7926,
          "lon": 9.008847,
          "lat": 46.176481
      },
      {
          "city": "Winterthur",
          "count": 2,
          "population": 91368,
          "lon": 8.7251,
          "lat": 47.500035
      },
      {
          "city": "Zollikon",
          "count": 2,
          "population": 12534,
          "lon": 8.577801,
          "lat": 47.338967
      },
      {
          "city": "Langenthal",
          "count": 2,
          "population": 14533,
          "lon": 7.7960720000000014,
          "lat": 47.21526
      },
      {
          "city": "Buchrain",
          "count": 2,
          "population": 5802,
          "lon": 8.346213,
          "lat": 47.086016
      },
      {
          "city": "Uster",
          "count": 2,
          "population": 29583,
          "lon": 8.713687,
          "lat": 47.351997
      },
      {
          "city": "Allschwil",
          "count": 2,
          "population": 18745,
          "lon": 7.535994,
          "lat": 47.550744
      },
      {
          "city": "Chavannes",
          "count": 2,
          "population": 5740,
          "lon": 6.592058,
          "lat": 46.528825
      },
      {
          "city": "Aadorf",
          "count": 2,
          "population": 7100,
          "lon": 8.898325999999997,
          "lat": 47.492721
      },
      {
          "city": "Morges",
          "count": 2,
          "population": 13759,
          "lon": 6.495693,
          "lat": 46.511255
      },
      {
          "city": "Fully",
          "count": 2,
          "population": 5965,
          "lon": 7.114872,
          "lat": 46.138485
      },
      {
          "city": "Losone",
          "count": 2,
          "population": 6060,
          "lon": 8.75,
          "lat": 46.133333
      },
      {
          "city": "Mannedorf",
          "count": 2,
          "population": 10164,
          "lon": 8.690581,
          "lat": 47.252851
      },
      {
          "city": "Sarnen",
          "count": 2,
          "population": 9405,
          "lon": 8.250681,
          "lat": 46.898509
      },
      {
          "city": "Oberglatt",
          "count": 2,
          "population": 5346,
          "lon": 8.520368,
          "lat": 47.475281
      },
      {
          "city": "Maur",
          "count": 2,
          "population": 9577,
          "lon": 8.671352,
          "lat": 47.339262
      },
      {
          "city": "Kuttigen",
          "count": 2,
          "population": 5092,
          "lon": 8.047673,
          "lat": 47.415658
      },
      {
          "city": "Buochs",
          "count": 2,
          "population": 5272,
          "lon": 8.422788,
          "lat": 46.973976
      },
      {
          "city": "Igis",
          "count": 2,
          "population": 7078,
          "lon": 9.57218,
          "lat": 46.945308
      },
      {
          "city": "Moutier",
          "count": 2,
          "population": 7476,
          "lon": 7.369712,
          "lat": 47.27773300000001
      },
      {
          "city": "Zuchwil",
          "count": 2,
          "population": 8815,
          "lon": 7.561126,
          "lat": 47.20777800000001
      },
      {
          "city": "Birsfelden",
          "count": 2,
          "population": 10627,
          "lon": 7.645867999999999,
          "lat": 47.55495300000001
      },
      {
          "city": "Oberriet",
          "count": 2,
          "population": 7717,
          "lon": 9.566079,
          "lat": 47.319883
      },
      {
          "city": "Hinwil",
          "count": 2,
          "population": 10533,
          "lon": 8.842075999999997,
          "lat": 47.300822
      },
      {
          "city": "Pregassona",
          "count": 2,
          "population": 7491,
          "lon": 8.969476,
          "lat": 46.02142
      },
      {
          "city": "Ruswil",
          "count": 2,
          "population": 6441,
          "lon": 8.126446000000001,
          "lat": 47.084253
      },
      {
          "city": "Weinfelden",
          "count": 2,
          "population": 9529,
          "lon": 9.107546,
          "lat": 47.566194
      },
      {
          "city": "Sankt Margrethen",
          "count": 2,
          "population": 4995,
          "lon": 9.629598,
          "lat": 47.442304
      },
      {
          "city": "Neuenhof",
          "count": 2,
          "population": 7358,
          "lon": 8.325772,
          "lat": 47.452596
      },
      {
          "city": "Hunenberg",
          "count": 2,
          "population": 8060,
          "lon": 8.423515,
          "lat": 47.178931
      },
      {
          "city": "La Tour-de-Peilz",
          "count": 2,
          "population": 10835,
          "lon": 6.858596,
          "lat": 46.453552
      },
      {
          "city": "Egg",
          "count": 2,
          "population": 8585,
          "lon": 8.687429,
          "lat": 47.300555
      },
      {
          "city": "Porrentruy",
          "count": 2,
          "population": 6453,
          "lon": 7.075221000000001,
          "lat": 47.41532700000001
      },
      {
          "city": "Embrach",
          "count": 2,
          "population": 8517,
          "lon": 8.595680999999999,
          "lat": 47.507063
      },
      {
          "city": "Amriswil",
          "count": 2,
          "population": 11543,
          "lon": 9.298365,
          "lat": 47.546992
      },
      {
          "city": "Aarburg",
          "count": 2,
          "population": 6484,
          "lon": 7.901413000000002,
          "lat": 47.319634
      },
      {
          "city": "Saint-Imier",
          "count": 2,
          "population": 4701,
          "lon": 6.9951240000000015,
          "lat": 47.152195
      },
      {
          "city": "Stafa",
          "count": 2,
          "population": 13040,
          "lon": 8.725646000000001,
          "lat": 47.23905900000001
      },
      {
          "city": "Bagnes",
          "count": 2,
          "population": 7114,
          "lon": 7.216667,
          "lat": 46.083333
      },
      {
          "city": "Meilen",
          "count": 2,
          "population": 11723,
          "lon": 8.643675,
          "lat": 47.270429
      },
      {
          "city": "Arosa",
          "count": 2,
          "population": 2162,
          "lon": 9.676206,
          "lat": 46.777926
      },
      {
          "city": "Meggen",
          "count": 2,
          "population": 6593,
          "lon": 8.369489,
          "lat": 47.04722
      },
      {
          "city": "Heimberg",
          "count": 2,
          "population": 5586,
          "lon": 7.604332,
          "lat": 46.794824
      },
      {
          "city": "Belp",
          "count": 2,
          "population": 9594,
          "lon": 7.499042,
          "lat": 46.890805
      },
      {
          "city": "Kloten",
          "count": 2,
          "population": 18141,
          "lon": 8.594777,
          "lat": 47.449817
      },
      {
          "city": "Biasca",
          "count": 2,
          "population": 5937,
          "lon": 8.969103,
          "lat": 46.360581
      },
      {
          "city": "Lenzburg",
          "count": 2,
          "population": 7616,
          "lon": 8.181797999999999,
          "lat": 47.384048
      },
      {
          "city": "Oberengstringen",
          "count": 2,
          "population": 6106,
          "lon": 8.460977999999999,
          "lat": 47.410151
      },
      {
          "city": "Thonex",
          "count": 2,
          "population": 13018,
          "lon": 6.196893,
          "lat": 46.188186
      },
      {
          "city": "Solothurn",
          "count": 2,
          "population": 15292,
          "lon": 7.516605,
          "lat": 47.206649
      },
      {
          "city": "Munsingen",
          "count": 2,
          "population": 11326,
          "lon": 7.568647,
          "lat": 46.87309000000001
      },
      {
          "city": "Biberist",
          "count": 2,
          "population": 7463,
          "lon": 7.56005,
          "lat": 47.185591
      },
      {
          "city": "Grabs",
          "count": 2,
          "population": 6244,
          "lon": 9.443083,
          "lat": 47.182061
      },
      {
          "city": "Martigny",
          "count": 1,
          "population": 14413,
          "lon": 7.076771000000001,
          "lat": 46.104593
      },
      {
          "city": "Bulach",
          "count": 1,
          "population": 14776,
          "lon": 8.536967,
          "lat": 47.518898
      },
      {
          "city": "Kerns",
          "count": 1,
          "population": 5375,
          "lon": 8.276516,
          "lat": 46.900882
      },
      {
          "city": "Stans",
          "count": 1,
          "population": 7620,
          "lon": 8.365995,
          "lat": 46.958449
      },
      {
          "city": "Bubikon",
          "count": 1,
          "population": 6160,
          "lon": 8.818391,
          "lat": 47.267748
      },
      {
          "city": "Neuenkirch",
          "count": 1,
          "population": 5683,
          "lon": 8.204161000000001,
          "lat": 47.099891
      },
      {
          "city": "Sevelen",
          "count": 1,
          "population": 4450,
          "lon": 9.489926,
          "lat": 47.122292
      },
      {
          "city": "Rheinfelden",
          "count": 1,
          "population": 10657,
          "lon": 7.780108,
          "lat": 47.562979
      },
      {
          "city": "Montreux",
          "count": 1,
          "population": 23703,
          "lon": 6.913179,
          "lat": 46.433715
      },
      {
          "city": "Naters",
          "count": 1,
          "population": 7472,
          "lon": 7.99137,
          "lat": 46.32448
      },
      {
          "city": "Nidau",
          "count": 1,
          "population": 6932,
          "lon": 7.238464,
          "lat": 47.129167
      },
      {
          "city": "Kilchberg",
          "count": 1,
          "population": 6918,
          "lon": 8.551172,
          "lat": 47.318309
      },
      {
          "city": "Steffisburg",
          "count": 1,
          "population": 15396,
          "lon": 7.63249,
          "lat": 46.778074
      },
      {
          "city": "Aesch",
          "count": 1,
          "population": 10396,
          "lon": 7.595763000000002,
          "lat": 47.469456
      },
      {
          "city": "Au",
          "count": 1,
          "population": 6864,
          "lon": 9.633869,
          "lat": 47.432211
      },
      {
          "city": "Langnau",
          "count": 1,
          "population": 8731,
          "lon": 7.7873800000000015,
          "lat": 46.93936
      },
      {
          "city": "Fribourg",
          "count": 1,
          "population": 33806,
          "lon": 7.154748,
          "lat": 46.79572
      },
      {
          "city": "Wald",
          "count": 1,
          "population": 9016,
          "lon": 8.914128,
          "lat": 47.276331
      },
      {
          "city": "Rapperswil",
          "count": 1,
          "population": 7959,
          "lon": 8.825954,
          "lat": 47.227986
      },
      {
          "city": "Kussnacht",
          "count": 1,
          "population": 11771,
          "lon": 8.442057,
          "lat": 47.085571
      },
      {
          "city": "Veyrier",
          "count": 1,
          "population": 9375,
          "lon": 6.185442,
          "lat": 46.166485
      },
      {
          "city": "Schubelbach",
          "count": 1,
          "population": 8292,
          "lon": 8.927866999999997,
          "lat": 47.173785
      },
      {
          "city": "Seon",
          "count": 1,
          "population": 4556,
          "lon": 8.156071,
          "lat": 47.3449
      },
      {
          "city": "Zurich",
          "count": 1,
          "population": 346185,
          "lon": 8.55,
          "lat": 47.366667
      },
      {
          "city": "Gerlafingen",
          "count": 1,
          "population": 5032,
          "lon": 7.575050999999998,
          "lat": 47.169782
      },
      {
          "city": "Emmen",
          "count": 1,
          "population": 27290,
          "lon": 8.30477,
          "lat": 47.081101
      },
      {
          "city": "Dietikon",
          "count": 1,
          "population": 22443,
          "lon": 8.394984,
          "lat": 47.404446
      },
      {
          "city": "Mohlin",
          "count": 1,
          "population": 8353,
          "lon": 7.846872999999999,
          "lat": 47.556412
      },
      {
          "city": "Oberwil",
          "count": 1,
          "population": 9957,
          "lon": 7.555238,
          "lat": 47.508519
      },
      {
          "city": "Untersiggenthal",
          "count": 1,
          "population": 6551,
          "lon": 8.254838000000001,
          "lat": 47.503174
      },
      {
          "city": "Windisch",
          "count": 1,
          "population": 6815,
          "lon": 8.220846,
          "lat": 47.476756
      },
      {
          "city": "Sirnach",
          "count": 1,
          "population": 6658,
          "lon": 8.990668,
          "lat": 47.463275
      },
      {
          "city": "Dudingen",
          "count": 1,
          "population": 7088,
          "lon": 7.188475,
          "lat": 46.849152
      },
      {
          "city": "La Chaux-de-Fonds",
          "count": 1,
          "population": 36971,
          "lon": 6.828892,
          "lat": 47.104417
      },
      {
          "city": "Balsthal",
          "count": 1,
          "population": 5576,
          "lon": 7.693047,
          "lat": 47.31591
      },
      {
          "city": "Freienbach",
          "count": 1,
          "population": 14900,
          "lon": 8.756933,
          "lat": 47.20407700000001
      },
      {
          "city": "Wetzikon",
          "count": 1,
          "population": 19377,
          "lon": 8.795716,
          "lat": 47.325771
      },
      {
          "city": "Le Grand-Saconnex",
          "count": 1,
          "population": 8457,
          "lon": 6.123303,
          "lat": 46.226419
      },
      {
          "city": "Wollerau",
          "count": 1,
          "population": 6891,
          "lon": 8.719028999999999,
          "lat": 47.19478
      },
      {
          "city": "Seuzach",
          "count": 1,
          "population": 7061,
          "lon": 8.731667999999999,
          "lat": 47.536974
      },
      {
          "city": "Dietlikon",
          "count": 1,
          "population": 7121,
          "lon": 8.618775,
          "lat": 47.42508400000001
      },
      {
          "city": "Pully",
          "count": 1,
          "population": 16640,
          "lon": 6.656071000000002,
          "lat": 46.510544
      },
      {
          "city": "Richterswil",
          "count": 1,
          "population": 11398,
          "lon": 8.705841,
          "lat": 47.207416
      },
      {
          "city": "Lugano",
          "count": 1,
          "population": 26327,
          "lon": 8.951141999999997,
          "lat": 46.006182
      },
      {
          "city": "Greifensee",
          "count": 1,
          "population": 5080,
          "lon": 8.680017,
          "lat": 47.367869
      },
      {
          "city": "Meyrin",
          "count": 1,
          "population": 19691,
          "lon": 6.064189,
          "lat": 46.228245
      },
      {
          "city": "Huttwil",
          "count": 1,
          "population": 4480,
          "lon": 7.862087,
          "lat": 47.11502
      },
      {
          "city": "Bellinzona",
          "count": 1,
          "population": 17006,
          "lon": 9.02283,
          "lat": 46.195201
      },
      {
          "city": "Cham",
          "count": 1,
          "population": 13431,
          "lon": 8.463576,
          "lat": 47.182126
      },
      {
          "city": "Bussigny",
          "count": 1,
          "population": 7317,
          "lon": 6.555973,
          "lat": 46.551102
      },
      {
          "city": "Bern",
          "count": 1,
          "population": 123018,
          "lon": 7.466667,
          "lat": 46.916667
      },
      {
          "city": "Frauenfeld",
          "count": 1,
          "population": 22639,
          "lon": 8.898544000000003,
          "lat": 47.558159
      },
      {
          "city": "Payerne",
          "count": 1,
          "population": 7758,
          "lon": 6.9360800000000005,
          "lat": 46.82201
      },
      {
          "city": "Opfikon",
          "count": 1,
          "population": 13395,
          "lon": 8.580231,
          "lat": 47.43255300000001
      },
      {
          "city": "Ollon",
          "count": 1,
          "population": 6494,
          "lon": 6.99499,
          "lat": 46.297564
      },
      {
          "city": "Altdorf",
          "count": 1,
          "population": 8833,
          "lon": 8.644409,
          "lat": 46.880422
      },
      {
          "city": "Ettingen",
          "count": 1,
          "population": 4917,
          "lon": 7.5498210000000014,
          "lat": 47.482675
      },
      {
          "city": "Kreuzlingen",
          "count": 1,
          "population": 17233,
          "lon": 9.180338,
          "lat": 47.648212
      },
      {
          "city": "Kriens",
          "count": 1,
          "population": 26117,
          "lon": 8.276307000000001,
          "lat": 47.035366
      },
      {
          "city": "Interlaken",
          "count": 1,
          "population": 5057,
          "lon": 7.866376,
          "lat": 46.683872
      },
      {
          "city": "Jona",
          "count": 1,
          "population": 17806,
          "lon": 8.841838000000003,
          "lat": 47.230265
      },
      {
          "city": "Mendrisio",
          "count": 1,
          "population": 6192,
          "lon": 8.982097,
          "lat": 45.86741
      },
      {
          "city": "Renens",
          "count": 1,
          "population": 17530,
          "lon": 6.588096000000001,
          "lat": 46.539894
      },
      {
          "city": "Durnten",
          "count": 1,
          "population": 6225,
          "lon": 8.842176,
          "lat": 47.277691
      },
      {
          "city": "Bassersdorf",
          "count": 1,
          "population": 9860,
          "lon": 8.625859,
          "lat": 47.443184
      },
      {
          "city": "Sulgen",
          "count": 1,
          "population": 3081,
          "lon": 9.18497,
          "lat": 47.5377
      },
      {
          "city": "Oberuzwil",
          "count": 1,
          "population": 5600,
          "lon": 9.124194,
          "lat": 47.430722
      },
      {
          "city": "Luzern",
          "count": 1,
          "population": 57269,
          "lon": 8.266667,
          "lat": 47.083333
      },
      {
          "city": "Lengnau",
          "count": 1,
          "population": 4302,
          "lon": 7.373714,
          "lat": 47.183824
      },
      {
          "city": "Munchenstein",
          "count": 1,
          "population": 12059,
          "lon": 7.617667999999999,
          "lat": 47.510513
      },
      {
          "city": "Regensdorf",
          "count": 1,
          "population": 15756,
          "lon": 8.465128,
          "lat": 47.429855
      },
      {
          "city": "Oftringen",
          "count": 1,
          "population": 10062,
          "lon": 7.925327,
          "lat": 47.31382
      },
      {
          "city": "Unterageri",
          "count": 1,
          "population": 7248,
          "lon": 8.585305,
          "lat": 47.136445
      },
      {
          "city": "Teufen",
          "count": 1,
          "population": 5621,
          "lon": 9.389564,
          "lat": 47.390723
      },
      {
          "city": "Baar",
          "count": 1,
          "population": 20752,
          "lon": 8.529544,
          "lat": 47.196254
      },
      {
          "city": "Dornach",
          "count": 1,
          "population": 5940,
          "lon": 7.616417,
          "lat": 47.478042
      },
      {
          "city": "Sargans",
          "count": 1,
          "population": 4991,
          "lon": 9.444797,
          "lat": 47.04842100000001
      },
      {
          "city": "Saanen",
          "count": 1,
          "population": 6644,
          "lon": 7.259608999999998,
          "lat": 46.489557
      },
      {
          "city": "Malters",
          "count": 1,
          "population": 6303,
          "lon": 8.181928,
          "lat": 47.03628
      },
      
  ],
  "highProbableCases": [
    {
      "city": "Dubendorf",
      "count": 1,
      "population": 23051,
      "lon": 8.618366,
      "lat": 47.395395
  },
  {
      "city": "Murten",
      "count": 1,
      "population": 5377,
      "lon": 7.1103429999999985,
      "lat": 46.92684000000001
  },
  {
      "city": "Einsiedeln",
      "count": 1,
      "population": 13188,
      "lon": 8.745244999999999,
      "lat": 47.126727
  },
  {
      "city": "Romanshorn",
      "count": 1,
      "population": 9060,
      "lon": 9.378694,
      "lat": 47.565858
  },
  {
      "city": "Geneva",
      "count": 1,
      "population": 181492,
      "lon": 6.148113,
      "lat": 46.195602
  },
  {
      "city": "Kusnacht",
      "count": 1,
      "population": 13000,
      "lon": 8.581942999999999,
      "lat": 47.31776
  }
  ],
  "recoveredCases": [{
    "city": "Munchenbuchsee",
    "count": 1,
    "population": 10774,
    "lon": 7.448956,
    "lat": 47.020946
},
{
    "city": "Sierre",
    "count": 1,
    "population": 14648,
    "lon": 7.536934,
    "lat": 46.293235
},
{
    "city": "Granichen",
    "count": 1,
    "population": 6444,
    "lon": 8.10243,
    "lat": 47.359297
},
{
    "city": "Sissach",
    "count": 1,
    "population": 5680,
    "lon": 7.799596000000001,
    "lat": 47.467368
},
{
    "city": "Bottmingen",
    "count": 1,
    "population": 5956,
    "lon": 7.569016,
    "lat": 47.522735
},
{
    "city": "Gland",
    "count": 1,
    "population": 11194,
    "lon": 6.266986,
    "lat": 46.421233
},
{
    "city": "Domat",
    "count": 1,
    "population": 6818,
    "lon": 9.450752,
    "lat": 46.834827
},
{
    "city": "Wahlern",
    "count": 1,
    "population": 6292,
    "lon": 7.353178,
    "lat": 46.828062
},
{
    "city": "Le Locle",
    "count": 1,
    "population": 9933,
    "lon": 6.752278,
    "lat": 47.059533
}],
  "deceasedCases": [
      {
          "city": "Buchs",
          "count": 10,
          "population": 6397,
          "lon": 8.073525,
          "lat": 47.387774
      },
      {
          "city": "Schlieren",
          "count": 10,
          "population": 13762,
          "lon": 8.448587,
          "lat": 47.39646
      },
      {
          "city": "Ebnat-Kappel",
          "count": 9,
          "population": 4740,
          "lon": 9.124726,
          "lat": 47.261951
      },
      {
          "city": "Gelterkinden",
          "count": 9,
          "population": 5541,
          "lon": 7.851739999999999,
          "lat": 47.464968
      },
      {
          "city": "Wittenbach",
          "count": 9,
          "population": 8283,
          "lon": 9.37761,
          "lat": 47.463075
      },
      {
          "city": "Saviese",
          "count": 9,
          "population": 5653,
          "lon": 7.345578,
          "lat": 46.251153
      },
      {
          "city": "Brugg",
          "count": 8,
          "population": 9159,
          "lon": 8.203014,
          "lat": 47.481527
      },
      {
          "city": "Baden",
          "count": 8,
          "population": 16659,
          "lon": 8.302764,
          "lat": 47.478029
      },
      {
          "city": "Zollikofen",
          "count": 8,
          "population": 9144,
          "lon": 7.4590130000000014,
          "lat": 46.99567800000001
      },
      {
          "city": "Zuchwil",
          "count": 8,
          "population": 8815,
          "lon": 7.561126,
          "lat": 47.20777800000001
      },
      {
          "city": "Obersiggenthal",
          "count": 8,
          "population": 7683,
          "lon": 8.290436999999999,
          "lat": 47.489554
      },
      {
          "city": "Aarau",
          "count": 7,
          "population": 15007,
          "lon": 8.052354,
          "lat": 47.389616
      },
      {
          "city": "Montreux",
          "count": 7,
          "population": 23703,
          "lon": 6.913179,
          "lat": 46.433715
      },
      {
          "city": "Suhr",
          "count": 7,
          "population": 9522,
          "lon": 8.079669,
          "lat": 47.371725
      },
      {
          "city": "Giubiasco",
          "count": 7,
          "population": 7926,
          "lon": 9.008847,
          "lat": 46.176481
      },
      {
          "city": "Mannedorf",
          "count": 7,
          "population": 10164,
          "lon": 8.690581,
          "lat": 47.252851
      },
      {
          "city": "Muttenz",
          "count": 7,
          "population": 16646,
          "lon": 7.644511,
          "lat": 47.52525900000001
      },
      {
          "city": "Delemont",
          "count": 7,
          "population": 11567,
          "lon": 7.329005,
          "lat": 47.366429
      },
      {
          "city": "Orbe",
          "count": 7,
          "population": 5466,
          "lon": 6.530103,
          "lat": 46.724717
      },
      {
          "city": "Geneva",
          "count": 7,
          "population": 181492,
          "lon": 6.148113,
          "lat": 46.195602
      },
      {
          "city": "Biasca",
          "count": 7,
          "population": 5937,
          "lon": 8.969103,
          "lat": 46.360581
      },
      {
          "city": "Muri",
          "count": 6,
          "population": 6307,
          "lon": 8.3382,
          "lat": 47.270428
      },
      {
          "city": "Crissier",
          "count": 6,
          "population": 6915,
          "lon": 6.571253,
          "lat": 46.55165
      },
      {
          "city": "Lausanne",
          "count": 6,
          "population": 118015,
          "lon": 6.666667,
          "lat": 46.533333
      },
      {
          "city": "Minusio",
          "count": 6,
          "population": 6772,
          "lon": 8.820102,
          "lat": 46.175242
      },
      {
          "city": "Derendingen",
          "count": 6,
          "population": 5916,
          "lon": 7.588438000000001,
          "lat": 47.198505
      },
      {
          "city": "Bernex",
          "count": 6,
          "population": 9266,
          "lon": 6.074159,
          "lat": 46.177162
      },
      {
          "city": "Glarus",
          "count": 6,
          "population": 5889,
          "lon": 9.068036,
          "lat": 47.04057
      },
      {
          "city": "Therwil",
          "count": 6,
          "population": 8986,
          "lon": 7.552859,
          "lat": 47.501166
      },
      {
          "city": "Losone",
          "count": 6,
          "population": 6060,
          "lon": 8.75,
          "lat": 46.133333
      },
      {
          "city": "Wadenswil",
          "count": 6,
          "population": 19473,
          "lon": 8.670585,
          "lat": 47.228726
      },
      {
          "city": "Unterseen",
          "count": 6,
          "population": 5283,
          "lon": 7.847225,
          "lat": 46.6853
      },
      {
          "city": "Moutier",
          "count": 6,
          "population": 7476,
          "lon": 7.369712,
          "lat": 47.27773300000001
      },
      {
          "city": "Ecublens",
          "count": 6,
          "population": 10655,
          "lon": 6.808706,
          "lat": 46.60915
      },
      {
          "city": "Lengnau",
          "count": 6,
          "population": 4302,
          "lon": 7.373714,
          "lat": 47.183824
      },
      {
          "city": "Wohlen",
          "count": 6,
          "population": 14163,
          "lon": 8.278768,
          "lat": 47.352359
      },
      {
          "city": "Nyon",
          "count": 6,
          "population": 17071,
          "lon": 6.239319,
          "lat": 46.388848
      },
      {
          "city": "Murten",
          "count": 6,
          "population": 5377,
          "lon": 7.1103429999999985,
          "lat": 46.92684000000001
      },
      {
          "city": "Ruschlikon",
          "count": 6,
          "population": 5246,
          "lon": 8.555743,
          "lat": 47.307744
      },
      {
          "city": "Villars-sur-Glane",
          "count": 6,
          "population": 9379,
          "lon": 7.117215,
          "lat": 46.791892
      },
      {
          "city": "Altstatten",
          "count": 6,
          "population": 10585,
          "lon": 9.548989,
          "lat": 47.379433
      },
      {
          "city": "Grabs",
          "count": 6,
          "population": 6244,
          "lon": 9.443083,
          "lat": 47.182061
      },
      {
          "city": "Flums",
          "count": 5,
          "population": 4936,
          "lon": 9.342604,
          "lat": 47.092512
      },
      {
          "city": "Martigny",
          "count": 5,
          "population": 14413,
          "lon": 7.076771000000001,
          "lat": 46.104593
      },
      {
          "city": "Neuenkirch",
          "count": 5,
          "population": 5683,
          "lon": 8.204161000000001,
          "lat": 47.099891
      },
      {
          "city": "Grenchen",
          "count": 5,
          "population": 16135,
          "lon": 7.3965770000000015,
          "lat": 47.19354000000001
      },
      {
          "city": "Appenzell",
          "count": 5,
          "population": 5541,
          "lon": 9.410547,
          "lat": 47.32891400000001
      },
      {
          "city": "Diepoldsau",
          "count": 5,
          "population": 5351,
          "lon": 9.655969,
          "lat": 47.384835
      },
      {
          "city": "Vevey",
          "count": 5,
          "population": 16014,
          "lon": 6.841168,
          "lat": 46.46526400000001
      },
      {
          "city": "Sumiswald",
          "count": 5,
          "population": 5072,
          "lon": 7.745257,
          "lat": 47.027467
      },
      {
          "city": "Affoltern",
          "count": 5,
          "population": 10415,
          "lon": 8.45346,
          "lat": 47.281224
      },
      {
          "city": "Hergiswil",
          "count": 5,
          "population": 5477,
          "lon": 8.310356,
          "lat": 46.984209
      },
      {
          "city": "Bremgarten",
          "count": 5,
          "population": 6702,
          "lon": 8.329955,
          "lat": 47.352604
      },
      {
          "city": "Seuzach",
          "count": 5,
          "population": 7061,
          "lon": 8.731667999999999,
          "lat": 47.536974
      },
      {
          "city": "Gossau",
          "count": 5,
          "population": 17268,
          "lon": 9.251252,
          "lat": 47.41694
      },
      {
          "city": "Bellinzona",
          "count": 5,
          "population": 17006,
          "lon": 9.02283,
          "lat": 46.195201
      },
      {
          "city": "Reinach",
          "count": 5,
          "population": 7756,
          "lon": 8.188452999999999,
          "lat": 47.259435
      },
      {
          "city": "Ollon",
          "count": 5,
          "population": 6494,
          "lon": 6.99499,
          "lat": 46.297564
      },
      {
          "city": "Maur",
          "count": 5,
          "population": 9577,
          "lon": 8.671352,
          "lat": 47.339262
      },
      {
          "city": "Flawil",
          "count": 5,
          "population": 9878,
          "lon": 9.182838,
          "lat": 47.414611
      },
      {
          "city": "Mendrisio",
          "count": 5,
          "population": 6192,
          "lon": 8.982097,
          "lat": 45.86741
      },
      {
          "city": "Igis",
          "count": 5,
          "population": 7078,
          "lon": 9.57218,
          "lat": 46.945308
      },
      {
          "city": "Herzogenbuchsee",
          "count": 5,
          "population": 5734,
          "lon": 7.707457000000002,
          "lat": 47.187406
      },
      {
          "city": "Oberriet",
          "count": 5,
          "population": 7717,
          "lon": 9.566079,
          "lat": 47.319883
      },
      {
          "city": "Birsfelden",
          "count": 5,
          "population": 10627,
          "lon": 7.645867999999999,
          "lat": 47.55495300000001
      },
      {
          "city": "Basel",
          "count": 5,
          "population": 164474,
          "lon": 7.573271000000001,
          "lat": 47.558395
      },
      {
          "city": "Urdorf",
          "count": 5,
          "population": 9247,
          "lon": 8.428597,
          "lat": 47.382958
      },
      {
          "city": "Pregassona",
          "count": 5,
          "population": 7491,
          "lon": 8.969476,
          "lat": 46.02142
      },
      {
          "city": "Sankt Margrethen",
          "count": 5,
          "population": 4995,
          "lon": 9.629598,
          "lat": 47.442304
      },
      {
          "city": "Wattwil",
          "count": 5,
          "population": 8129,
          "lon": 9.08757,
          "lat": 47.302253
      },
      {
          "city": "Boudry",
          "count": 5,
          "population": 5038,
          "lon": 6.83897,
          "lat": 46.953019
      },
      {
          "city": "La Tour-de-Peilz",
          "count": 5,
          "population": 10835,
          "lon": 6.858596,
          "lat": 46.453552
      },
      {
          "city": "Saanen",
          "count": 5,
          "population": 6644,
          "lon": 7.259608999999998,
          "lat": 46.489557
      },
      {
          "city": "Bagnes",
          "count": 5,
          "population": 7114,
          "lon": 7.216667,
          "lat": 46.083333
      },
      {
          "city": "Heimberg",
          "count": 5,
          "population": 5586,
          "lon": 7.604332,
          "lat": 46.794824
      },
      {
          "city": "Chene-Bourg",
          "count": 5,
          "population": 8038,
          "lon": 6.196567,
          "lat": 46.193049
      },
      {
          "city": "Sissach",
          "count": 5,
          "population": 5680,
          "lon": 7.799596000000001,
          "lat": 47.467368
      },
      {
          "city": "Domat",
          "count": 5,
          "population": 6818,
          "lon": 9.450752,
          "lat": 46.834827
      },
      {
          "city": "Schwyz",
          "count": 4,
          "population": 14425,
          "lon": 8.656112,
          "lat": 47.027858
      },
      {
          "city": "Biel",
          "count": 4,
          "population": 49675,
          "lon": 7.257589,
          "lat": 47.141666
      },
      {
          "city": "Hochdorf",
          "count": 4,
          "population": 7793,
          "lon": 8.291788,
          "lat": 47.168408
      },
      {
          "city": "Oberentfelden",
          "count": 4,
          "population": 6981,
          "lon": 8.039193,
          "lat": 47.360291
      },
      {
          "city": "Bulach",
          "count": 4,
          "population": 14776,
          "lon": 8.536967,
          "lat": 47.518898
      },
      {
          "city": "Rheinfelden",
          "count": 4,
          "population": 10657,
          "lon": 7.780108,
          "lat": 47.562979
      },
      {
          "city": "Monthey",
          "count": 4,
          "population": 16002,
          "lon": 6.960665,
          "lat": 46.255457
      },
      {
          "city": "Versoix",
          "count": 4,
          "population": 11660,
          "lon": 6.161658999999998,
          "lat": 46.284017
      },
      {
          "city": "Langnau",
          "count": 4,
          "population": 8731,
          "lon": 7.7873800000000015,
          "lat": 46.93936
      },
      {
          "city": "Frenkendorf",
          "count": 4,
          "population": 5984,
          "lon": 7.716483,
          "lat": 47.506858
      },
      {
          "city": "Locarno",
          "count": 4,
          "population": 13998,
          "lon": 8.799253,
          "lat": 46.16497
      },
      {
          "city": "Lausen",
          "count": 4,
          "population": 5043,
          "lon": 7.765687,
          "lat": 47.475823
      },
      {
          "city": "Arlesheim",
          "count": 4,
          "population": 9737,
          "lon": 7.619839,
          "lat": 47.495875
      },
      {
          "city": "Spreitenbach",
          "count": 4,
          "population": 10544,
          "lon": 8.363006,
          "lat": 47.42015900000001
      },
      {
          "city": "Horw",
          "count": 4,
          "population": 12110,
          "lon": 8.309556,
          "lat": 47.016917
      },
      {
          "city": "Zumikon",
          "count": 4,
          "population": 5082,
          "lon": 8.620752,
          "lat": 47.327409
      },
      {
          "city": "Wetzikon",
          "count": 4,
          "population": 19377,
          "lon": 8.795716,
          "lat": 47.325771
      },
      {
          "city": "Ruti",
          "count": 4,
          "population": 11361,
          "lon": 8.852445,
          "lat": 47.261507
      },
      {
          "city": "Uznach",
          "count": 4,
          "population": 5648,
          "lon": 8.982634,
          "lat": 47.224209
      },
      {
          "city": "Zollikon",
          "count": 4,
          "population": 12534,
          "lon": 8.577801,
          "lat": 47.338967
      },
      {
          "city": "Uster",
          "count": 4,
          "population": 29583,
          "lon": 8.713687,
          "lat": 47.351997
      },
      {
          "city": "Huttwil",
          "count": 4,
          "population": 4480,
          "lon": 7.862087,
          "lat": 47.11502
      },
      {
          "city": "Cham",
          "count": 4,
          "population": 13431,
          "lon": 8.463576,
          "lat": 47.182126
      },
      {
          "city": "Bussigny",
          "count": 4,
          "population": 7317,
          "lon": 6.555973,
          "lat": 46.551102
      },
      {
          "city": "Steinhausen",
          "count": 4,
          "population": 8640,
          "lon": 8.485809,
          "lat": 47.195101
      },
      {
          "city": "Trimbach",
          "count": 4,
          "population": 6127,
          "lon": 7.886797,
          "lat": 47.365605
      },
      {
          "city": "Bern",
          "count": 4,
          "population": 123018,
          "lon": 7.466667,
          "lat": 46.916667
      },
      {
          "city": "Chavannes",
          "count": 4,
          "population": 5740,
          "lon": 6.592058,
          "lat": 46.528825
      },
      {
          "city": "Payerne",
          "count": 4,
          "population": 7758,
          "lon": 6.9360800000000005,
          "lat": 46.82201
      },
      {
          "city": "Opfikon",
          "count": 4,
          "population": 13395,
          "lon": 8.580231,
          "lat": 47.43255300000001
      },
      {
          "city": "Fully",
          "count": 4,
          "population": 5965,
          "lon": 7.114872,
          "lat": 46.138485
      },
      {
          "city": "Sarnen",
          "count": 4,
          "population": 9405,
          "lon": 8.250681,
          "lat": 46.898509
      },
      {
          "city": "Oberglatt",
          "count": 4,
          "population": 5346,
          "lon": 8.520368,
          "lat": 47.475281
      },
      {
          "city": "Kuttigen",
          "count": 4,
          "population": 5092,
          "lon": 8.047673,
          "lat": 47.415658
      },
      {
          "city": "Laufen",
          "count": 4,
          "population": 5223,
          "lon": 7.507521,
          "lat": 47.420878
      },
      {
          "city": "Rothrist",
          "count": 4,
          "population": 7141,
          "lon": 7.8909449999999985,
          "lat": 47.305162
      },
      {
          "city": "Wil",
          "count": 4,
          "population": 17234,
          "lon": 9.04289,
          "lat": 47.462147
      },
      {
          "city": "Neuenhof",
          "count": 4,
          "population": 7358,
          "lon": 8.325772,
          "lat": 47.452596
      },
      {
          "city": "Hunenberg",
          "count": 4,
          "population": 8060,
          "lon": 8.423515,
          "lat": 47.178931
      },
      {
          "city": "Binningen",
          "count": 4,
          "population": 15046,
          "lon": 7.568511999999999,
          "lat": 47.533588
      },
      {
          "city": "Oftringen",
          "count": 4,
          "population": 10062,
          "lon": 7.925327,
          "lat": 47.31382
      },
      {
          "city": "Bulle",
          "count": 4,
          "population": 12460,
          "lon": 7.056742999999999,
          "lat": 46.619499
      },
      {
          "city": "Egg",
          "count": 4,
          "population": 8585,
          "lon": 8.687429,
          "lat": 47.300555
      },
      {
          "city": "Embrach",
          "count": 4,
          "population": 8517,
          "lon": 8.595680999999999,
          "lat": 47.507063
      },
      {
          "city": "Aarburg",
          "count": 4,
          "population": 6484,
          "lon": 7.901413000000002,
          "lat": 47.319634
      },
      {
          "city": "Dubendorf",
          "count": 4,
          "population": 23051,
          "lon": 8.618366,
          "lat": 47.395395
      },
      {
          "city": "Belp",
          "count": 4,
          "population": 9594,
          "lon": 7.499042,
          "lat": 46.890805
      },
      {
          "city": "Kloten",
          "count": 4,
          "population": 18141,
          "lon": 8.594777,
          "lat": 47.449817
      },
      {
          "city": "Sierre",
          "count": 4,
          "population": 14648,
          "lon": 7.536934,
          "lat": 46.293235
      },
      {
          "city": "Granichen",
          "count": 4,
          "population": 6444,
          "lon": 8.10243,
          "lat": 47.359297
      },
      {
          "city": "Biberist",
          "count": 4,
          "population": 7463,
          "lon": 7.56005,
          "lat": 47.185591
      },
      {
          "city": "Massagno",
          "count": 4,
          "population": 5918,
          "lon": 8.945343,
          "lat": 46.015621
      },
      {
          "city": "Le Locle",
          "count": 4,
          "population": 9933,
          "lon": 6.752278,
          "lat": 47.059533
      },
      {
          "city": "Bolligen",
          "count": 3,
          "population": 6291,
          "lon": 7.495697,
          "lat": 46.974194
      },
      {
          "city": "Liestal",
          "count": 3,
          "population": 12491,
          "lon": 7.742975,
          "lat": 47.482779
      },
      {
          "city": "Zermatt",
          "count": 3,
          "population": 5607,
          "lon": 7.74912,
          "lat": 46.021256
      },
      {
          "city": "Kirchberg",
          "count": 3,
          "population": 8073,
          "lon": 9.039848,
          "lat": 47.411412
      },
      {
          "city": "Kerns",
          "count": 3,
          "population": 5375,
          "lon": 8.276516,
          "lat": 46.900882
      },
      {
          "city": "Bubikon",
          "count": 3,
          "population": 6160,
          "lon": 8.818391,
          "lat": 47.267748
      },
      {
          "city": "Sevelen",
          "count": 3,
          "population": 4450,
          "lon": 9.489926,
          "lat": 47.122292
      },
      {
          "city": "Onex",
          "count": 3,
          "population": 16796,
          "lon": 6.1018089999999985,
          "lat": 46.183909
      },
      {
          "city": "Fribourg",
          "count": 3,
          "population": 33806,
          "lon": 7.154748,
          "lat": 46.79572
      },
      {
          "city": "Wald",
          "count": 3,
          "population": 9016,
          "lon": 8.914128,
          "lat": 47.276331
      },
      {
          "city": "Kussnacht",
          "count": 3,
          "population": 11771,
          "lon": 8.442057,
          "lat": 47.085571
      },
      {
          "city": "Le Mont-sur-Lausanne",
          "count": 3,
          "population": 5139,
          "lon": 6.634562,
          "lat": 46.557743
      },
      {
          "city": "Visp",
          "count": 3,
          "population": 6560,
          "lon": 7.884736,
          "lat": 46.294524
      },
      {
          "city": "Ingenbohl",
          "count": 3,
          "population": 7964,
          "lon": 8.614768,
          "lat": 47.004642
      },
      {
          "city": "Seon",
          "count": 3,
          "population": 4556,
          "lon": 8.156071,
          "lat": 47.3449
      },
      {
          "city": "Bad Ragaz",
          "count": 3,
          "population": 4786,
          "lon": 9.501217,
          "lat": 47.005367
      },
      {
          "city": "Horgen",
          "count": 3,
          "population": 18055,
          "lon": 8.598672,
          "lat": 47.255924
      },
      {
          "city": "Dietikon",
          "count": 3,
          "population": 22443,
          "lon": 8.394984,
          "lat": 47.404446
      },
      {
          "city": "Emmen",
          "count": 3,
          "population": 27290,
          "lon": 8.30477,
          "lat": 47.081101
      },
      {
          "city": "Oberwil",
          "count": 3,
          "population": 9957,
          "lon": 7.555238,
          "lat": 47.508519
      },
      {
          "city": "Thun",
          "count": 3,
          "population": 41539,
          "lon": 7.621663000000002,
          "lat": 46.751176
      },
      {
          "city": "Epalinges",
          "count": 3,
          "population": 7521,
          "lon": 6.668288,
          "lat": 46.551775
      },
      {
          "city": "Windisch",
          "count": 3,
          "population": 6815,
          "lon": 8.220846,
          "lat": 47.476756
      },
      {
          "city": "Zug",
          "count": 3,
          "population": 24197,
          "lon": 8.517445,
          "lat": 47.172421
      },
      {
          "city": "Zofingen",
          "count": 3,
          "population": 12327,
          "lon": 7.947274,
          "lat": 47.289945
      },
      {
          "city": "Schattdorf",
          "count": 3,
          "population": 4779,
          "lon": 8.654655,
          "lat": 46.865501
      },
      {
          "city": "Schaffhausen",
          "count": 3,
          "population": 34445,
          "lon": 8.634929,
          "lat": 47.697316
      },
      {
          "city": "La Chaux-de-Fonds",
          "count": 3,
          "population": 36971,
          "lon": 6.828892,
          "lat": 47.104417
      },
      {
          "city": "Balsthal",
          "count": 3,
          "population": 5576,
          "lon": 7.693047,
          "lat": 47.31591
      },
      {
          "city": "Herrliberg",
          "count": 3,
          "population": 5922,
          "lon": 8.612224000000001,
          "lat": 47.288144
      },
      {
          "city": "Aigle",
          "count": 3,
          "population": 7897,
          "lon": 6.964567,
          "lat": 46.318103
      },
      {
          "city": "Wollerau",
          "count": 3,
          "population": 6891,
          "lon": 8.719028999999999,
          "lat": 47.19478
      },
      {
          "city": "Le Grand-Saconnex",
          "count": 3,
          "population": 8457,
          "lon": 6.123303,
          "lat": 46.226419
      },
      {
          "city": "Winterthur",
          "count": 3,
          "population": 91368,
          "lon": 8.7251,
          "lat": 47.500035
      },
      {
          "city": "Richterswil",
          "count": 3,
          "population": 11398,
          "lon": 8.705841,
          "lat": 47.207416
      },
      {
          "city": "Buchrain",
          "count": 3,
          "population": 5802,
          "lon": 8.346213,
          "lat": 47.086016
      },
      {
          "city": "Koniz",
          "count": 3,
          "population": 35961,
          "lon": 7.4086880000000015,
          "lat": 46.923391
      },
      {
          "city": "Allschwil",
          "count": 3,
          "population": 18745,
          "lon": 7.535994,
          "lat": 47.550744
      },
      {
          "city": "Aadorf",
          "count": 3,
          "population": 7100,
          "lon": 8.898325999999997,
          "lat": 47.492721
      },
      {
          "city": "Kriens",
          "count": 3,
          "population": 26117,
          "lon": 8.276307000000001,
          "lat": 47.035366
      },
      {
          "city": "Interlaken",
          "count": 3,
          "population": 5057,
          "lon": 7.866376,
          "lat": 46.683872
      },
      {
          "city": "Hombrechtikon",
          "count": 3,
          "population": 7795,
          "lon": 8.77437,
          "lat": 47.25208
      },
      {
          "city": "Buochs",
          "count": 3,
          "population": 5272,
          "lon": 8.422788,
          "lat": 46.973976
      },
      {
          "city": "Hinwil",
          "count": 3,
          "population": 10533,
          "lon": 8.842075999999997,
          "lat": 47.300822
      },
      {
          "city": "Luzern",
          "count": 3,
          "population": 57269,
          "lon": 8.266667,
          "lat": 47.083333
      },
      {
          "city": "Ruswil",
          "count": 3,
          "population": 6441,
          "lon": 8.126446000000001,
          "lat": 47.084253
      },
      {
          "city": "Weinfelden",
          "count": 3,
          "population": 9529,
          "lon": 9.107546,
          "lat": 47.566194
      },
      {
          "city": "Munchenstein",
          "count": 3,
          "population": 12059,
          "lon": 7.617667999999999,
          "lat": 47.510513
      },
      {
          "city": "Saint-Imier",
          "count": 3,
          "population": 4701,
          "lon": 6.9951240000000015,
          "lat": 47.152195
      },
      {
          "city": "Amriswil",
          "count": 3,
          "population": 11543,
          "lon": 9.298365,
          "lat": 47.546992
      },
      {
          "city": "Meilen",
          "count": 3,
          "population": 11723,
          "lon": 8.643675,
          "lat": 47.270429
      },
      {
          "city": "Stafa",
          "count": 3,
          "population": 13040,
          "lon": 8.725646000000001,
          "lat": 47.23905900000001
      },
      {
          "city": "Arosa",
          "count": 3,
          "population": 2162,
          "lon": 9.676206,
          "lat": 46.777926
      },
      {
          "city": "Kusnacht",
          "count": 3,
          "population": 13000,
          "lon": 8.581942999999999,
          "lat": 47.31776
      },
      {
          "city": "Vernier",
          "count": 3,
          "population": 29767,
          "lon": 6.08511,
          "lat": 46.217693
      },
      {
          "city": "Gland",
          "count": 3,
          "population": 11194,
          "lon": 6.266986,
          "lat": 46.421233
      },
      {
          "city": "Thonex",
          "count": 3,
          "population": 13018,
          "lon": 6.196893,
          "lat": 46.188186
      },
      {
          "city": "Solothurn",
          "count": 3,
          "population": 15292,
          "lon": 7.516605,
          "lat": 47.206649
      },
      {
          "city": "Wahlern",
          "count": 3,
          "population": 6292,
          "lon": 7.353178,
          "lat": 46.828062
      },
      {
          "city": "Conthey",
          "count": 3,
          "population": 6747,
          "lon": 7.303714999999999,
          "lat": 46.22528300000001
      },
      {
          "city": "Worb",
          "count": 2,
          "population": 11586,
          "lon": 7.562099000000001,
          "lat": 46.930286
      },
      {
          "city": "Uetendorf",
          "count": 2,
          "population": 5538,
          "lon": 7.572506,
          "lat": 46.773917
      },
      {
          "city": "Risch",
          "count": 2,
          "population": 8645,
          "lon": 7.338869,
          "lat": 46.409984
      },
      {
          "city": "Pratteln",
          "count": 2,
          "population": 14861,
          "lon": 7.688414999999999,
          "lat": 47.52118
      },
      {
          "city": "Nidau",
          "count": 2,
          "population": 6932,
          "lon": 7.238464,
          "lat": 47.129167
      },
      {
          "city": "Wettingen",
          "count": 2,
          "population": 18509,
          "lon": 8.316360000000001,
          "lat": 47.470495
      },
      {
          "city": "Steffisburg",
          "count": 2,
          "population": 15396,
          "lon": 7.63249,
          "lat": 46.778074
      },
      {
          "city": "Aesch",
          "count": 2,
          "population": 10396,
          "lon": 7.595763000000002,
          "lat": 47.469456
      },
      {
          "city": "Rapperswil",
          "count": 2,
          "population": 7959,
          "lon": 8.825954,
          "lat": 47.227986
      },
      {
          "city": "Yverdon",
          "count": 2,
          "population": 23756,
          "lon": 6.635502000000002,
          "lat": 46.777908
      },
      {
          "city": "Schubelbach",
          "count": 2,
          "population": 8292,
          "lon": 8.927866999999997,
          "lat": 47.173785
      },
      {
          "city": "Zurich",
          "count": 2,
          "population": 346185,
          "lon": 8.55,
          "lat": 47.366667
      },
      {
          "city": "Mohlin",
          "count": 2,
          "population": 8353,
          "lon": 7.846872999999999,
          "lat": 47.556412
      },
      {
          "city": "Chiasso",
          "count": 2,
          "population": 8232,
          "lon": 9.02054,
          "lat": 45.83491
      },
      {
          "city": "Neuchatel",
          "count": 2,
          "population": 31216,
          "lon": 6.93005,
          "lat": 46.99308900000001
      },
      {
          "city": "Volketswil",
          "count": 2,
          "population": 14592,
          "lon": 8.691548,
          "lat": 47.389983
      },
      {
          "city": "Sirnach",
          "count": 2,
          "population": 6658,
          "lon": 8.990668,
          "lat": 47.463275
      },
      {
          "city": "Adliswil",
          "count": 2,
          "population": 16144,
          "lon": 8.528684,
          "lat": 47.311896
      },
      {
          "city": "Freienbach",
          "count": 2,
          "population": 14900,
          "lon": 8.756933,
          "lat": 47.20407700000001
      },
      {
          "city": "Dietlikon",
          "count": 2,
          "population": 7121,
          "lon": 8.618775,
          "lat": 47.42508400000001
      },
      {
          "city": "Pully",
          "count": 2,
          "population": 16640,
          "lon": 6.656071000000002,
          "lat": 46.510544
      },
      {
          "city": "Lugano",
          "count": 2,
          "population": 26327,
          "lon": 8.951141999999997,
          "lat": 46.006182
      },
      {
          "city": "Greifensee",
          "count": 2,
          "population": 5080,
          "lon": 8.680017,
          "lat": 47.367869
      },
      {
          "city": "Langenthal",
          "count": 2,
          "population": 14533,
          "lon": 7.7960720000000014,
          "lat": 47.21526
      },
      {
          "city": "Meyrin",
          "count": 2,
          "population": 19691,
          "lon": 6.064189,
          "lat": 46.228245
      },
      {
          "city": "Thalwil",
          "count": 2,
          "population": 16389,
          "lon": 8.567546,
          "lat": 47.289515
      },
      {
          "city": "Frauenfeld",
          "count": 2,
          "population": 22639,
          "lon": 8.898544000000003,
          "lat": 47.558159
      },
      {
          "city": "Morges",
          "count": 2,
          "population": 13759,
          "lon": 6.495693,
          "lat": 46.511255
      },
      {
          "city": "Altdorf",
          "count": 2,
          "population": 8833,
          "lon": 8.644409,
          "lat": 46.880422
      },
      {
          "city": "Ettingen",
          "count": 2,
          "population": 4917,
          "lon": 7.5498210000000014,
          "lat": 47.482675
      },
      {
          "city": "Kreuzlingen",
          "count": 2,
          "population": 17233,
          "lon": 9.180338,
          "lat": 47.648212
      },
      {
          "city": "Jona",
          "count": 2,
          "population": 17806,
          "lon": 8.841838000000003,
          "lat": 47.230265
      },
      {
          "city": "Renens",
          "count": 2,
          "population": 17530,
          "lon": 6.588096000000001,
          "lat": 46.539894
      },
      {
          "city": "Uzwil",
          "count": 2,
          "population": 12185,
          "lon": 9.139218,
          "lat": 47.43813400000001
      },
      {
          "city": "Sulgen",
          "count": 2,
          "population": 3081,
          "lon": 9.18497,
          "lat": 47.5377
      },
      {
          "city": "Oberuzwil",
          "count": 2,
          "population": 5600,
          "lon": 9.124194,
          "lat": 47.430722
      },
      {
          "city": "Teufen",
          "count": 2,
          "population": 5621,
          "lon": 9.389564,
          "lat": 47.390723
      },
      {
          "city": "Sargans",
          "count": 2,
          "population": 4991,
          "lon": 9.444797,
          "lat": 47.04842100000001
      },
      {
          "city": "Porrentruy",
          "count": 2,
          "population": 6453,
          "lon": 7.075221000000001,
          "lat": 47.41532700000001
      },
      {
          "city": "Lutry",
          "count": 2,
          "population": 8625,
          "lon": 6.685161,
          "lat": 46.504873
      },
      {
          "city": "Romanshorn",
          "count": 2,
          "population": 9060,
          "lon": 9.378694,
          "lat": 47.565858
      },
      {
          "city": "Meggen",
          "count": 2,
          "population": 6593,
          "lon": 8.369489,
          "lat": 47.04722
      },
      {
          "city": "Malters",
          "count": 2,
          "population": 6303,
          "lon": 8.181928,
          "lat": 47.03628
      },
      {
          "city": "Viganello",
          "count": 2,
          "population": 6330,
          "lon": 8.967779,
          "lat": 46.015037
      },
      {
          "city": "Blonay",
          "count": 2,
          "population": 5294,
          "lon": 6.895053,
          "lat": 46.465737
      },
      {
          "city": "Fallanden",
          "count": 2,
          "population": 6987,
          "lon": 8.639834,
          "lat": 47.370719
      },
      {
          "city": "Munchenbuchsee",
          "count": 2,
          "population": 10774,
          "lon": 7.448956,
          "lat": 47.020946
      },
      {
          "city": "Lenzburg",
          "count": 2,
          "population": 7616,
          "lon": 8.181797999999999,
          "lat": 47.384048
      },
      {
          "city": "Oberengstringen",
          "count": 2,
          "population": 6106,
          "lon": 8.460977999999999,
          "lat": 47.410151
      },
      {
          "city": "Bottmingen",
          "count": 2,
          "population": 5956,
          "lon": 7.569016,
          "lat": 47.522735
      },
      {
          "city": "Burgdorf",
          "count": 2,
          "population": 14943,
          "lon": 7.622139,
          "lat": 47.058495
      },
      {
          "city": "Urtenen",
          "count": 2,
          "population": 5255,
          "lon": 7.500814,
          "lat": 47.026668
      },
      {
          "city": "Munsingen",
          "count": 2,
          "population": 11326,
          "lon": 7.568647,
          "lat": 46.87309000000001
      },
      {
          "city": "Lyss",
          "count": 1,
          "population": 10892,
          "lon": 7.31162,
          "lat": 47.077573
      },
      {
          "city": "Frutigen",
          "count": 1,
          "population": 6668,
          "lon": 7.64751,
          "lat": 46.58782
      },
      {
          "city": "Chur",
          "count": 1,
          "population": 32874,
          "lon": 9.526917999999998,
          "lat": 46.85675300000001
      },
      {
          "city": "Rumlang",
          "count": 1,
          "population": 6304,
          "lon": 8.526777000000001,
          "lat": 47.451787
      },
      {
          "city": "Spiez",
          "count": 1,
          "population": 12310,
          "lon": 7.691108,
          "lat": 46.684733
      },
      {
          "city": "Bex",
          "count": 1,
          "population": 5995,
          "lon": 7.011408,
          "lat": 46.252137
      },
      {
          "city": "Ebikon",
          "count": 1,
          "population": 11473,
          "lon": 8.340411,
          "lat": 47.079366
      },
      {
          "city": "Stans",
          "count": 1,
          "population": 7620,
          "lon": 8.365995,
          "lat": 46.958449
      },
      {
          "city": "Villmergen",
          "count": 1,
          "population": 5244,
          "lon": 8.245828,
          "lat": 47.349173
      },
      {
          "city": "Naters",
          "count": 1,
          "population": 7472,
          "lon": 7.99137,
          "lat": 46.32448
      },
      {
          "city": "Meiringen",
          "count": 1,
          "population": 4708,
          "lon": 8.183961,
          "lat": 46.726776
      },
      {
          "city": "Kilchberg",
          "count": 1,
          "population": 6918,
          "lon": 8.551172,
          "lat": 47.318309
      },
      {
          "city": "Au",
          "count": 1,
          "population": 6864,
          "lon": 9.633869,
          "lat": 47.432211
      },
      {
          "city": "Veyrier",
          "count": 1,
          "population": 9375,
          "lon": 6.185442,
          "lat": 46.166485
      }
      
  ]
}
export class Map extends React.Component {

  state = {
    viewport: {
      width: 500,
      height: 500,
      latitude: 46.8181877,
      longitude: 8.2275124,
      zoom: 8
    },
    selected:["confirmedCases","highProbableCases","deceasedCases","recoveredCases"]
  };
  handleSelected= (e,{value})=>{
    this.setState({...this.state,selected:value})
    console.log(this.state,value);
    
  }


  render() {
    const {selected} = this.state;
    const {confirmedCases,highProbableCases,deceasedCases,recoveredCases} = data
        const confirmedMarker = confirmedCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'red'}}/> 
            </Marker>)
        });
        const highProbableMarker = highProbableCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'orange'}}/> 
            </Marker>)
        });
        
        const deceasedMarker = deceasedCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'grey'}}/> 
            </Marker>)
        });
        
        const recoveredMarker = recoveredCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'green'}}/> 
            </Marker>)
        });
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
          <h5><Icon name='circle' style={{color:'green'}}/> Recovered Cases</h5>
          <h5><Icon name='circle' style={{color:'red'}}/> Deceased Cases</h5>
          <h5><Icon name='circle' style={{color:'grey'}}/> Recovered Cases</h5>
          <h5><Icon name='circle' style={{color:'orange'}}/> High Probable Cases</h5>

          </Grid.Column>
          <Grid.Column width={6}>
          <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibW9oYW1lZGl4IiwiYSI6ImNrOGFxeXcyYTA1MWgzbW11YjRkZGo3NG4ifQ.tOEwHyE2XAibeYsI2kBFNQ'}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {selected.includes('confirmedCases')?confirmedMarker:''}
        {selected.includes('deceasedCases')?deceasedMarker:''}
        {selected.includes('highProbableCases')?highProbableMarker:''}
        {selected.includes('recoveredCases')?recoveredMarker:''}
      </ReactMapGL>
     
          </Grid.Column>
          <Grid.Column width={4}>
          <Dropdown
      fluid
      options={[{key:'deceasedCases',value:'deceasedCases',text:'deceasedCases'},
      {key:'highProbableCases',value:'highProbableCases',text:'highProbableCases'},
      {key:'recoveredCases',value:'recoveredCases',text:'recoveredCases'},
       {key:'confirmedCases',value:'confirmedCases',text:'confirmedCases'}]}
      placeholder='Select Case Type'
      search
      selection
      multiple
      onChange={this.handleSelected}

    />
    </Grid.Column>
      
        </Grid.Row>
        </Grid>
      

    );
  }
}
/*
export function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const data =[
    {name:'America',longitude:'12.5',latitude:'-69.96666666'},
    {name:'Kabul',longitude:'33',latitude:'65'},
    {name:'America',longitude:'12.5',latitude:'-69.96666666'}
  ] 
  
  return (
     <ReactMapGL {...viewport}    
     mapboxApiAccessToken={'pk.eyJ1IjoibW9oYW1lZGl4IiwiYSI6ImNrOGFxeXcyYTA1MWgzbW11YjRkZGo3NG4ifQ.tOEwHyE2XAibeYsI2kBFNQ'}
     onViewportChange={setViewport}>
     <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
     <Icon name='circle' style={{color:'red'}}/>
     </Marker>
     <Marker latitude={37.32} longitude={-123.69} offsetLeft={-20} offsetTop={-10}>
     hey<Icon name='circle'/>
     </Marker>
    />
    <PolylineOverlay  points={[
    [-21.81884765625, 64.1297836764257],
    [-19.79736328125, 64.1585310519412]]}/>

   </ReactMapGL>
  );
}*/