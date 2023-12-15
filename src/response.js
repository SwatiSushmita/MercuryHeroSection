export const response = {
    "status": "OK",
    "summary": {
        "route": [
            {
                "location": {
                    "lat": 39.95209,
                    "lng": -75.16219
                },
                "address": "Curious Designs, Market St, Philadelphia, PA 19107, United States"
            },
            {
                "location": {
                    "lat": 40.18109,
                    "lng": -74.16873
                },
                "address": "5 Bridgewater Way, Farmingdale, NJ 07727-3768, United States"
            },
            {
                "location": {
                    "lat": 40.71455,
                    "lng": -74.00715
                },
                "address": "Guardian van Lines, Chambers St, New York, NY 10007, United States"
            }
        ],
        "countries": [
            "USA"
        ],
        "currency": "USD",
        "vehicleType": "2AxlesTaxi",
        "vehicleDescription": "Taxi - Car, SUV or Pickup truck",
        "fuelPrice": {
            "value": 1.31,
            "currency": "USD",
            "units": "USD/gallon",
            "fuelUnit": "gallon"
        },
        "fuelEfficiency": {
            "city": 28.57,
            "hwy": 22.4,
            "units": "mpg",
            "fuelUnit": "gallon"
        },
        "units": {
            "currencyUnit": "USD",
            "fuelEfficiencyUnit": "mpg",
            "fuelUnit": "gallon"
        },
        "departure_time": "2021-01-01T13:22:27Z",
        "departureTime": "2021-01-01T13:22:27Z",
        "share": {
            "name": "5 bridgewater way, farmingdale, nj 07727-3768, united states-guardian van lines, chambers st, new york, ny 10007, united states",
            "prefix": "5+bridgewater+way%2C+farmingdale%2C+nj+07727-3768%2C+united+states-guardian+van+lines%2C+chambers+st%2C+new+york%2C+ny+10007%2C+united+states",
            "uuid": "3a4dc38a-0dd7-4c2a-9e29-b6b3df6026e4",
            "timestamp": "2023-12-10T09:55:09.534937478Z",
            "client": "api"
        },
        "source": "HERE"
    },
    "routes": [
        {
            "summary": {
                "hasTolls": true,
                "hasExpressTolls": false,
                "diffs": {
                    "cheapest": 0.56,
                    "fastest": 0
                },
                "url": "https://www.google.com/maps/?saddr=39.952090,-75.162190&daddr=39.957710,-75.162450+to:39.956890,-75.152910+to:40.096670,-74.737420+to:40.187670,-74.610180+to:40.181020,-74.168250+to:40.181020,-74.168250+to:40.170190,-74.098730+to:40.253550,-74.080750+to:40.699020,-74.155900+to:40.714547,-74.007152+to:40.714550,-74.007150&via=1,2,3,4,5,7,8,9,10",
                "distance": {
                    "text": "128 mi",
                    "metric": "207 km",
                    "value": 207330
                },
                "duration": {
                    "text": "2 h 16 min",
                    "value": 8209
                },
                "name": "I-195"
            },
            "costs": {
                "tagAndCash": 24.45,
                "minimumTollCost": 24.45,
                "fuel": 7.47,
                "tag": 24.45,
                "cash": null,
                "licensePlate": null,
                "prepaidCard": 24.45
            },
            "tolls": [
                {
                    "type": "ticketSystem1",
                    "tagCost": 3.08,
                    "tagPriCost": 3.08,
                    "tagSecCost": 3.08,
                    "cashCost": 3.1,
                    "licensePlateCost": null,
                    "prepaidCardCost": 3.08,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126001000,
                        "lat": 40.097127,
                        "lng": -74.777325,
                        "name": "6 - PA Turnpike/Florence",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 42641.52,
                            "time": "2021-01-01T13:54:04Z"
                        },
                        "timestamp_formatted": "2021-01-01T14:06:43Z",
                        "timestamp_localized": "2021-01-01T09:06:43-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.777325,
                                    40.097127
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126001600,
                        "lat": 40.194481,
                        "lng": -74.607178,
                        "name": "7A - I-195/Trenton/Shore Points",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 63012.4,
                            "time": "2021-01-01T14:06:43Z"
                        },
                        "timestamp_formatted": "2021-01-01T14:06:43Z",
                        "timestamp_localized": "2021-01-01T09:06:43-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.607178,
                                    40.194481
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 112104000,
                    "lat": 40.174879,
                    "lng": -74.099008,
                    "name": "Belmar North",
                    "road": "Garden State Parkway",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 0.7,
                    "tagPriCost": 0.7,
                    "tagSecCost": 0.7,
                    "cashCost": 0.75,
                    "licensePlateCost": null,
                    "prepaidCardCost": 0.7,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "arrival": {
                        "distance": 116470.63,
                        "time": "2021-01-01T14:39:36Z"
                    },
                    "timestamp_formatted": "2021-01-01T14:39:36Z",
                    "timestamp_localized": "2021-01-01T09:39:36-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.099008,
                                40.174879
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 112103800,
                    "lat": 40.250418,
                    "lng": -74.082125,
                    "name": "Asbury Park",
                    "road": "Garden State Parkway",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 2.02,
                    "tagPriCost": 2.02,
                    "tagSecCost": 2.02,
                    "cashCost": 2.1,
                    "licensePlateCost": null,
                    "prepaidCardCost": 2.02,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "arrival": {
                        "distance": 125176.34,
                        "time": "2021-01-01T14:44:36Z"
                    },
                    "timestamp_formatted": "2021-01-01T14:44:36Z",
                    "timestamp_localized": "2021-01-01T09:44:36-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.082125,
                                40.250418
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "type": "ticketSystem1",
                    "tagCost": 5.9,
                    "tagPriCost": 5.9,
                    "tagSecCost": 7.86,
                    "cashCost": 7.9,
                    "licensePlateCost": null,
                    "prepaidCardCost": 5.9,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126002600,
                        "lat": 40.539245,
                        "lng": -74.299723,
                        "name": "11 - GSP/Woodbridge/The Amboys",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 166622.63,
                            "time": "2021-01-01T15:12:50Z"
                        },
                        "timestamp_formatted": "2021-01-01T15:29:32Z",
                        "timestamp_localized": "2021-01-01T10:29:32-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.299723,
                                    40.539245
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126004000,
                        "lat": 40.706563,
                        "lng": -74.06214,
                        "name": "14C - Holland Tunnel",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 198475.9,
                            "time": "2021-01-01T15:29:32Z"
                        },
                        "timestamp_formatted": "2021-01-01T15:29:32Z",
                        "timestamp_localized": "2021-01-01T10:29:32-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.06214,
                                    40.706563
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 111900000,
                    "lat": 40.730217,
                    "lng": -74.038654,
                    "name": "HT : Holland Tunnel",
                    "road": "Holland Tunnel",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 12.75,
                    "tagPriCost": 12.75,
                    "tagSecCost": 17,
                    "cashCost": null,
                    "licensePlateCost": 17,
                    "prepaidCardCost": 12.75,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Discounts: Carpool plan and Green Pass discounts available. Contact Port Authority for details.",
                    "discountCarType": "Class 1, Class 11",
                    "arrival": {
                        "distance": 202635.04,
                        "time": "2021-01-01T15:32:08Z"
                    },
                    "timestamp_formatted": "2021-01-01T15:32:08Z",
                    "timestamp_localized": "2021-01-01T10:32:08-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.038654,
                                40.730217
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                }
            ],
            "polyline": "kdzrFnbwiMAb@GJELKHMHk@Gq@KOAK?I@GBGDGHGJENCRCZKhAUAi@?YEQCaBS{ASyASICwAQqAQoAQYCeBWwAQBc@FcBL{BB]LiBDc@Bk@F}@@{AE}@Fq@@KRgCTmDZqELkBPeCHkB@aAAw@EmAAYGy@M_AO{@Ki@Ki@Ia@Oy@Y_BOy@OaAKaBEgAA_A?u@D_APyBRsBBQBOVcCZ{Cd@wDToBPyADe@BSBUBUDm@@S@Y@c@?k@Ac@C]Im@Kk@Ok@Qa@OWQW[g@MOWUQMSMQI[K]Ge@E{AEmAEu@CiAE]A}B@QEWGgAW_AYk@SoAk@u@]_Ag@wAy@eBkAy@m@s@m@aAw@q@o@q@q@c@c@Y[s@y@q@_Aa@o@g@}@c@aAc@iA]gAYiA[{AY}A_@mBQ{@_AyEo@eDq@eD]eB]aBWiA[qAa@uAY}@]_Am@wA[o@[k@Ue@kBsDq@kAg@{@aAcB{@{Ae@w@g@aAWc@[k@aAqBq@_B_AyBkAkC}BwFaA}BYq@iAmCs@mBm@{A_AqB_BqDaD}H{AmDmAuC_@}@o@{Aq@aBWq@]cAYaAUy@Om@c@oBQ}@UwA]gBWsA]eBc@kB_@wAa@sAi@aBs@sB_@eAcAsCcBkEs@gB_@_A_@aAkAaDoBsF{BqG_@eAi@yAa@gAUk@Sg@Ys@cAcCi@oAm@wAO]s@{AwBqFaA{BsA_Dq@wAaAmBQY]i@]g@]e@iAyAMQs@u@kAeAg@_@m@c@cAo@sBiA[Sy@c@qAs@wAu@aCwAg@[e@Yk@_@{CqB}B}AmCiB}@q@g@_@k@a@g@[KI]SOKSOUO_@WiAu@q@c@]SsBoAiBmAsDeC_EmCaK}GwAaA}@o@i@a@u@m@{@u@y@w@eAgAeAiAs@y@[_@[a@_@e@i@u@[e@[g@g@y@Ye@KQoAaC]s@IQQc@w@kBWs@EKGQg@wAWy@c@yAe@wBYsAO}@GYEYMcAKaA]aD_@cD[gCSsA]iBYqAEO]wAc@yAm@iBm@}AwCwGeG{MuA_D}@yBoB_FsJoVwGmPiBuEmDyIqAkDqAgDkDuJmAqDc@_B[qAm@kCs@}CcBiHw@aDeA_Fk@aDk@kDQgAa@iC_@}Bc@mC_@sBe@uBSq@Oe@U}@[eAGQg@qAs@gB{@kBsAsCWk@MYIQEKqAsCw@gB_AkBGMqBoEw@_B]q@c@u@a@g@y@aAy@w@u@m@q@c@_@Si@Wg@Se@QWKoA]wC_A{Bq@cAa@o@]o@_@a@Ya@[m@g@YYg@i@i@i@[_@UYc@o@c@q@_@q@c@}@o@yAq@_Bi@wAg@_BaAaD_AeDg@kBuAoFiAiEq@cCyCiL_@wAc@}Ai@eBa@gAe@kAm@sAq@qAm@eAs@gA{@kA_@g@c@i@{@}@iAgAu@o@k@c@m@a@k@_@m@]a@Sc@Sg@Sm@UsAk@iBu@wAo@uAs@YOiAs@GEi@c@o@i@y@w@o@s@q@{@i@q@e@w@_@m@a@{@g@eAi@uA_@kA_@_BWaAUgAScAKs@SsAc@mDWyBK{@_@wC]uBYeB[wAQs@Sw@_@sA[aAYy@Yu@Yw@Um@m@sAw@{AkAuBa@m@_@i@aAsAc@i@gAoAcAeAqAoAu@q@_@]kCaC}AyAoDeDWUy@{@qAuAuAyA_AeAg@q@]e@{@qAg@y@s@oAk@gAy@gB_A}Bi@uAiEiLgFeNiDeJqAoDe@kAYw@s@mBQg@kBwEMYc@}@g@eA{@aBoBgDw@uAaDgEgC_D{AeBiAyAeA_Ba@s@}@gBw@iBc@iAGO_@kAUw@YiAOm@S{@Q}@Kk@a@oCGk@UcBGa@AKKq@w@kFs@_EmAuFMi@WcASu@U{@[kAK]IWMa@o@oBUq@Yw@m@cBu@mBi@qA]y@a@_Ae@cAa@y@g@cAa@u@y@{AaAgBgAqBgE_I_CiE}CwF}CsFm@eAg@{@q@iAm@aAcAaB}AgC}BqDeGwJWc@_@q@We@Wg@[o@Ym@Ug@q@}AqBsEuB_FMYO]aBoD{BuE}A}CuE_JoIyOoEcIiAoBsBwCo@{@i@q@]a@OOgAkA}A_BqAoA{BoBoAgAyCmCcA}@w@u@aAaA_AcAu@aAeAuA{A{B_A}AqBsDeDgGuCoFIOiAuB_@q@oBsDyAmCcAkBa@w@aAmB_@{@w@wBY_AW_Ae@aCk@eDYeB]oBYiBKu@Mu@a@eCy@aFYiBg@eCk@aCq@{Bs@yBq@eByAgDiCgEiA_BoA{A}@cA}@{@sAmAkBuA_@Yi@_@m@]w@]}As@iBw@uAe@w@U_AYgBi@iBk@eCy@_Cu@eDaAa@MeCk@_B[oCe@i@Io@I{AQWC[CcBMy@Ek@Ck@Cg@M[GUCMAs@Eq@Eg@CeAEa@Au@?y@B{ADaGHm@@y@Ac@Cg@Gc@Ge@K]Ka@O_@OWMYO[SWSUQ[YYYQQUWSYU]Q[Q]Q]Qa@KWM_@Ma@Me@Mg@GYG_@Ga@E[E_@CUCWC[AWA_@Ao@?e@@s@@m@@[Be@B]BWFe@Fa@Jk@Ji@P{@VkAR}@TeARaAHc@Hg@Fa@Fe@D]Da@Fo@Fs@Fs@JoAh@yGb@wFf@kGPsBZqDRyBJgADe@Dc@D_@D[DYDWPcAJiAb@sFp@gIXiDLyBBi@VmDjA_OPaCFu@T}CF_AJ}AJ{Aj@aHd@oGVuCHu@LcAFc@BKBONeAb@mCt@_Ep@oDh@sC^kBHc@Ny@z@yEp@sDN}@Nu@b@wBRcARgATgAv@mE\\iBVwAHa@Ny@rCkOf@qCF[BQX{AnBoKhAkGl@aDj@wCj@_DnBiKvBkLbAuFxAaIbAoFbAsFvBgLP}@p@qDNu@fBkJr@sDp@oDr@qDVuAlAqGx@iEXyAfAoFd@wBf@wBf@uBl@_C~@iDp@aClAwDjAiDt@qBv@qBpAaDv@mB`@_ATe@t@cBjG_ObB}Df@mAXo@pAyCn@}ATg@|FcN`A}B^{@N[p@_BxEeLzAsDfAmC`@eAjAaDzAmEd@wAj@gBf@_B\\iAbAmDV}@hAwDHWn@eCNk@b@yAPo@Ni@n@eCd@qBZyAP{@Ls@V}AN_Aj@kEHw@`@uDFo@LsAp@aHZ}CN{Aj@_Hl@uJR}C\\kINyEJ{EF}EB{E?cHCyEG{EIkDQ}GKgCUyEs@uLIuAcAaPo@gKg@yHe@yHk@cJG{@[_Fa@qGAQQoCIsAaAgOAQw@kLG{@SaDMgCWsDIw@Ge@Km@Kk@Ia@WcAW{@]}@Yk@S_@S_@a@o@q@{@u@w@oBkBgCwBkBcBwAoAiJgImAgAWUMKOKQIg@SmBgBuAqAqBkBsAoAi@i@gEaEw@u@qCoCoEoEoBsBgCkCQS{BcCgBmBaCkCmBwB_DoDqGsHaFeGqF{GuEcG_@g@uEiGu@cAgAyAu@eAoBqCuEwGcAwAm@w@a@k@OQo@u@a@o@a@q@_@i@aAkAc@o@k@s@aAqA_B{BwAmBgA_Bm@w@W]W_@GIU]a@k@g@w@q@{@mBeCwBgCi@o@w@_Ag@o@]g@U_@W[q@{@cAsAkA{AaEoFkE_Gy@gAqVq\\_EsFwG}IeFaH{@iA_JwLq@}@kVk\\sq@o~@kE_GuBsCuBsCuHgKcHkJ[a@W]_F{G{B}C}DkFcEuFwBwCoBqCmAgBeBmCuA{BeCiEYe@wDoGmCqEUa@s@iAgB{CiB{CqCuEqAyBoA{BaB{CoAaCcBgD_AmB{CwG_D{GyDkIyCsGuBoEmC{F_CkF{BiFoByE[q@]y@wAeDqCiGuBsEqCaGg@gAYm@Wk@wBwEmG}MeIcQIQcE{I]w@_@sA]iAc@kAe@{@e@cAq@qA{@oB]{@[cA_@sASs@[_ASi@Ue@a@{@a@s@cA_BiAiBk@}@_AqAgAmBKQs@uAWc@o@eAUc@Qc@Oa@I[Ia@E]C_@@c@Dc@L]PWRQVKRCT?RDRJPNNPHRHXDX?ZA`@EZGXWfAs@rCQn@Ol@Qp@WfAaBbHg@pB]lAw@xCI\\GVYrA_@fBWtAKl@Kp@Mz@ObAQhAQz@M`@Mb@GTKXOZOVQRSPSJUDY?WEWKQOOSKUGSCQCYA_@@c@De@Da@Hm@j@qDFa@\\_BZuAj@mCPw@~BqKj@oCl@iC\\}Ap@wCJc@R}@Lk@Ns@bBkIj@eDLu@PcAHi@N_ARuAd@qD\\yCn@eGLiARaBFg@Da@BUTcCFe@JeAz@qHPaBvAaNt@}Gd@{DNoAXoBPoAZkBb@{Bd@cC\\_Bj@cCbBgHlDyNv@eD^{Af@oBNo@zAmG~A_HZ{Av@eDf@oBH]XkArBoIRw@hDwNf@uB~BwJJa@jMgi@|Hg\\FU~@wDfA{El@}Cl@qDd@gDb@aE\\iEVcFJsCDeBByAVmNPaKDcBBoA?WTwKRuJBmD?uDCiCEsBMgCQyCg@eHs@_Ks@iJ[{EQgDSeFI{DC_DB}E@y@@i@@Y@c@JqDVgEJaB@WFs@Fw@NsCPeBLkAl@yFReBTkBv@sGD_@j@wEd@sDb@oDxCqV^uCxDo[h@qEN}ATkCX}ENiEF}BBwC?{BC_EM}EWcFQ_EWmFq@qOoA_Y[iHWuFUyEGkBEaBCgAAeAAmC@_CBcBDeCHcCLcCN{BP}Bd@yFV{CTuCx@yJXgDRcCReCVaD@MbAaMr@kITeCR}BNsAXuBVyAr@wDl@aCp@cChAmDfAmCx@iBh@gAd@}@hAwBlCeFt@uAxBgE|@aBpAeC~BmEbFsJ~A{Cv@{Ar@_Bj@yAn@gBf@}A^oATu@ZgAl@kC~@_Er@yC\\yAxAsGZsAp@uCLi@H[TcAPs@x@iDJc@p@uCjAcFDS`@eBFYz@sEd@uCfBcKBMj@iDJo@PcAL{@b@sC`@gCv@{Et@oFZaDX}EN{DB}CEiGG{BMaCQmCKqAOyA_@oCQkAu@mEaDsPuDaSiBmJoA}Gi@uCg@gDMiAM{ASeDE{ACsB@}CBuADqAR}C\\_D`@oC\\gBTaAVcAlA_EzAkEtDqK`GwPL_@b@qAl@gBj@iB^qAdAaE~@sDh@eCx@oEb@gCRyAX}Bj@}Eh@qFLaBNgCV}EBo@Bw@D{ADoBB{B@mB?aFA}CC_FCwEGqNIeUCeGC_GAgEAoB?cA?w@AcACyG?w@CmF?eB?a@?sACoA?oAAuDA{DCyAAaECyE?mACqBCwFAoEC{DCeBGsCGgCEwAGwAI_BEw@KeBo@mJe@gFcAiKoEkb@i@qFO{BMuCI}EAeDB}BBqBDeAF{ADkAJ_B^cEPqBLiAr@aHJ{@Hu@DYLyAB]X_DHw@@EPwARiB`@eEVgDJcBFk@FeCBmABiADgC?gEG_FOmH_@cOi@qRWqJSqIi@{Sk@cVIaDYmKYwKIyDE{D?eD@gED{ELsGj@aQhAeYTgG\\_JLoDHsCFeEDgE@sD?aECaDEqEIoDK}DOqEWwG[sGQuBUqBQoAWyAg@_Ck@{Bk@eBeAmCg@iAs@sAo@gAq@_Ai@s@k@u@_BgBiCwC}DkEaCiCuAyA]a@g@m@eBuB{@gAcA{A_@k@]k@yAwCQa@KUUk@q@aBg@yAi@cBWcAi@wBu@uDUsAIu@S_BUoBCc@O}BIgBGgBEoEC{F?kEEyGGcL?iDK{UEeSKoWCkM?KEaKGqNE_NCsGE_GCqJC_J?Q?ICgJCqF@cHHwGLoF^mJ^eHx@mMv@sNj@mKl@gLz@eOnAaT~@yO~@cPb@{HHuAHyAPyCFiAJ_BDiBHmD@]NsGNeH@g@@e@HwDFyBDo@XmAVoAPe@JOLMZSPGd@Ad@J\\XHLPb@Jt@Cx@I^O^WXMHYJ[@qBEw@Ce@Bc@BwAb@mBn@aA\\]JYH[FWDa@D[@M?UAQAQ?W?YASA[C[CWCAp@DvCBr@DpCBfB@l@BrAFbE?l@@zCCb@Q\\KLIF_OdKoAz@eAr@WPmAx@oVtPi@\\yAbAmAx@UPa@\\aA`AgRhTo@}AWmA?sADa@g@Ke@Qi@Kg@Gg@A[DMD??LEZEf@@f@Fh@Jd@Pf@JE`@?rAVlAn@|AfRiT`AaA^]TQnAy@xAcAh@]nVuPlAy@VQdAs@nA{@~NeKHGJMP]Bc@A{C?m@GcECsAAm@CgBEqCCs@EwC@q@VBZBZBR@X@VDNBv@NzCr@v@Nh@J`@Ff@FbAHr@Dh@Dt@D~@`@ZV\\j@Ll@Bv@C\\GVGLSVWLM@Y?YKSUIKK_@Eg@GiBC[E]@e@HwDFyBDo@Bc@DwBHkEFkCDyADeADgC?OBkBAgA?_AAiAAeAE}AKeCOeCUsCW{BUgBM{@_@{BWwAYqAIY_AsDaAsCg@yAu@uBo@_BWi@oBsEo@wAa@_Ai@mAq@yAuCoG{AwDgA}CaAoDw@mDs@wDi@oDYiCUuCSqCKkCE{BE}B@}B@sBF_DLcEPqE^sK^gKFmDD}CA_CCmCAc@KkJAsACcBCsCAy@AmAGkDKiGA{A?e@CcBAsAA{BGmFAq@Aa@C}@Ay@EiEAo@Am@I}GA}@Aq@AaABa@B[B[BSBSFWDOFOFKFMHKHGHGJCHENEJAJ?L@LDHBJDHDHFJHFFHHFHFJFJDJFNDNBLBN@P@T?PCb@AJCPGVELKRILKJMHIDGBKBI@M@W?e@AqB[sAS_@GeAOaAO{C_@s@Ik@Gm@Gg@Cc@A_@?o@?iBAe@D_AHk@BuANqAPiEf@[DYDOBqB`@W@gBHiBJmBL_@B]B[Ba@Bm@B{@BoIPiCFwA@q@@w@@eBFcB@oJCgEEqFKcBEiEOiCM_BM{BSaDYkAIYCeAIq@Gi@EaCUyAMeCWoBQuAQ[EUCs@KwAQqDa@aBSwDe@eDa@oCYaCSuDWOAiCKsCKeCE}ECwB?sB?K?sDAO?eE@mDDeFJwABuABcBBkEL{ADM?gC@{FDwA@gBCcBAq@CaDImDMgDU{BSKAoD_@sBYuB[QEaAUoBc@o@O{A]qBi@cBe@eEwA_A]}CkAeD_BwCwAyBeA}CmBiBiAwEuCiC_BuEiD_FqDaHeFeDaC{EmDGEwEaD_BiAyCeBs@a@qDqB]QsDiBiCmAmB{@cAc@iAc@qAc@k@QWIs@K_@Ec@Ca@AmEYkCS{@Iw@I_@Ey@KeAM[Ei@Ii@My@Sm@Q_@Mm@Si@SWKQIu@]_CcAoAe@g@Q_@MYI[IQE_@Ig@Ki@Im@Iq@IcBOcBKoF]aDSo@E}AMkBSgC[aBU{Ce@uCe@iCa@aFu@mBWsAOoBO]AgAE_DGcC@mCFmCNaDXmC^{E`AYF[Jq@P}Ab@wBr@wBv@{Bz@qBx@gBv@qAn@yAv@mAp@cAj@}@f@qAx@_CxAgAz@qCvBkB|AoAfAwClC}BnBs@l@{@t@_BtASNyAlAuAfAcAr@aBfAwBrA_Bx@{@`@gBv@wBx@sCbAc@NSF[Js@RuDx@wEx@sEl@sLtAqCZ}ARkFl@iEf@a@DeJfAuLtAqFn@cFl@mDb@{Cf@_Ep@gI`BeNpD}NdE{GlB}D|@gCh@aC`@wB\\qC\\wEd@yCRqCR_CF_CH{ADo@@yB@wD?kA?kA?gB?yCAaF?wA@aBAoA?w@?}A@gB@iAFgADe@B[@wALkBNwARaBVo@LwB`@{@PcAT}@TsA^qA`@_AZk@T[Lm@Tk@V[Lm@Vs@\\sCvAw@b@}@h@{AbAo@f@}@t@WRYXq@r@m@p@q@x@u@bAm@~@m@`Ao@hAc@|@g@jAWp@Sf@g@|Ai@dBoAzE_B|Go@jC_AfD[hAQn@IRY|@c@dAu@|Aq@tAs@fAy@jAu@dAs@x@cAhA_A|@eAz@y@n@{@j@{A~@gAp@gAn@i@\\oBlAkAr@eAp@u@f@qAbAy@p@oAlA{@~@s@x@iAxAm@|@gAdBk@`AMVmB|Dq@dBg@pA_AbDyAhFkA`EaDzKm@vBe@~AM\\qBdGg@zAgArCgAfCaAvBg@dAq@tAk@dAm@fA]l@q@lAc@r@c@t@o@`Au@fAu@dA_BtBu@~@s@z@eAlAqArAc@b@UT]ZUTKHc@b@i@b@c@`@mAbAaAr@u@j@yA`A_BbAyAx@aEzBs@^}DxBcNzHeCtAmBdAiAx@}@n@uAfAqA`Au@l@}@bAyA`BaAnAy@lAu@hAa@l@aA~Au@tAe@`AYj@c@pAo@lBoAxDeB|FqC~I_AvCcBnFeBtFsAlE{AzEcClIyA`GuBbK{BzLMt@]nBa@xBa@zBk@xCc@`Co@rC]|Ay@|Ck@hBeAzCu@`Bu@bBo@fAs@nA{@pA}@rAuAfBe@l@oBpBOPMLMLeAhAy@t@gA~@aBpAqA`AsAz@sAx@iCtA}DrBsDlBqEzBmAr@gAp@kAx@iAz@qAfAcA`AmAnAqAzA{@dAuAhBeBlCqChF_AfB}E`KsBdE}CpG{@bB_@r@}ApC{A|B}@jAm@p@o@p@qBjBoBzAsBnAiAj@ULaA`@gCdAWJqBj@kBf@wCt@iCn@aBb@mA^gA^eAb@_Ab@qBhAkAp@_Ap@s@h@aB~A]\\gAhAyAzAsAtB}@rAa@v@mAtBi@nAmAxCm@fBe@zAeAhDkAvDi@~As@tBuAhEkAzD[fA_@bAWp@c@jA{AhEyAnDcA`CoC~F}A~CQ\\o@zAwAhDkB~Dy@fBCF]t@[l@cElIkA`Cw@jBiAbDs@dCs@lDg@nDS~BWrEAXG~D?LEbBOjFEnAIlDMjEY|HMjCYjFSvCa@bFYbDU|Ba@nDSvAQbAg@|B_@|AQn@i@bBKXeA~C{@xBu@~Aq@pA{@xAeErG_@j@kDnFeCzD}AfCkCvEsAhCqAlC_@t@Yj@{@hBmBhEmCnGeDfI_ExJ_ChFeArBcClEkAnBs@jA{@jAu@`A_BbBgAfAwBdBiBlA}@f@cAh@iBx@{Ar@eEjBiCjAaCjA}At@}A~@eBdA_BhAc@X_@V_CbBeAv@eBnAyC~B}@p@yBhBy@r@GDwBhBmB~AaDvCsDpD}B`CwBbCqDpE_AdAmBrCu@hAy@jB{@`BwCtFkBjDkAnBgA|Ak@v@oA`BuCzDcCrDuBpDgBfDYh@Yp@_BbDMTsAbCsBvDkCjEiBbCoB|B_@`@_A|@a@`@e@f@a@`@URSPe@b@yChCcClB{AlA[V]V_C~Aq@b@iAr@gAn@eBbAiCtAGBq@^oB~@wAn@gBr@oC~@_Cn@]Jw@Ts@LcBXOBm@JwAXmB\\}BZSBoALqCP_E\\qBF}A?{@?]Cy@GWAq@Eq@MgAQy@QaB_@aBg@kBu@[I}Ac@eAY_AW{Aa@kBc@eCa@wAQsAK{@EkAE{A?g@Cw@?a@@sBHi@Do@F_@Dk@F}@Ls@Jm@J[D]D{Et@qBZm@HyA^g@Jq@F]B{@D{@DgABo@@q@?aBCi@Ac@AaDImJU_Qe@iPa@eDGiA?S?aB@a@@}CH]BmDRc@BwCJqC@qB@iBGcCYi@CWCaAG_AG}@Ia@EoBYmB_@oA[KCsBo@[K_F}AwAe@iBm@uEwAk@QkBo@_AUgAS_BS}@KmAGqBAsAD}APo@HqATs@Ty@V{@^yAn@aAf@e@\\g@^sArAu@t@gApAq@z@kBfCgD`F]b@g@`@URgAdAmAnAeAjAWTQNQLQJMFSJUHQDOBM@S@O?QAKAOCOEQGMGKGMIMKGGKMMQMSMWKWKYEMI[GWESCOCQGi@Ec@C[Em@IoAGgAGmACw@EuBIcBGoAOoCYqDUiC]oCKq@Ic@GYI[Qo@Ws@q@}A[u@M[GQIWK_@GWESEUCOEYCWAMAQAYAyA@g@FwA@a@@e@?cAAe@AWAOCYCWE]EYG_@Ia@I]K_@M_@Oa@MYMWMUOWOUQU[a@u@}@q@YQIOIe@[kAw@e@[OKOKYUQOMMKKMOIKIKIMMSIOMWIQISKYK[Ma@Qo@aAeDaA_D[_AK[GQGOIQMWYc@}C{Ic@kAsAiDy@gBk@qAOYEGSe@Wi@g@gAaAoB[m@oAcC{AuCYg@a@y@_ByCcCuEs@uAe@{@aBcDc@y@i@cA[m@i@eAkDoGcCcEw@oAe@u@OUUa@g@s@wAsBkBiCk@u@e@k@uBiCoB}B_CiCkAmAwFmFmCeCmG{FqEqEu@s@[Ye@c@sCiCuH{GSQoEgEgDuCyAsAIIoAkA_A{@eHsGuFiFmDcDcDwCsDiDuG_GkEqD}BgBiDgCgCkBy@k@{AcAgCaBiCaB{BsA_E}BqBiAoHeEkDoB{GyDiEcCiAm@uBkAuBeAmEyBmCsA}@c@qHeEsCcB_CwAIGoCeBoCcBcDgBs@_@sBgAu@a@_@ScAg@kAm@_@SoAo@aFiCyMyGaAg@}BkAeAi@kGaDqCuAs@[yBoAECm@[{MaHmIgEkKqFgEwB]Qc@UkAq@iB}@UKQKGCaCgAkDeBoG_DgIcEiK{FkG}C}GgDqCwAsC{AkFsCOIcAk@eAk@sC}AaCqA}BoAmAo@e@WqFqCaDcBuGiDeFiCaB{@]Q{BiAQIuBiAwBgAuFuC_@SoBaAaAe@s@_@g@WyCyA}EaCuCqA_E_Ba@Q{@a@aAe@o@[}A{@m@a@}@o@iA_AuBgB{@_Ai@m@}AmBs@cAu@kAe@w@e@y@Uc@o@wAcAyBo@uAg@iAc@_Am@sAs@aBc@aAq@yAk@qAc@}@a@cAs@}Ac@aAm@qAqAyCaBmD{@iBu@qA_A}Ai@u@o@y@mAyAoAsAmAgA_Aw@aAq@y@k@oCaBgCyAMIm@_@mBkAa@YQKs@c@g@[_@Ua@UgAq@yBsAiAq@_BaA_BeAgCiBqDoCwBkBmCaCOO_CqBgCaCaB}AWUuCkCiBeBWUq@m@wAqAoBiBwEkE_GoFkJuIo@e@i@c@aAs@}@o@yDiCuAy@w@g@cC{AcP{JcHiEmCaBqJ}FoG_EkDwBsBoAmDwBg@]a@Ye@UYOgAs@}ByAiCaBo@a@uDaC{ByAYSmD_CgHyEoD_CeEgCUM{@g@qDqBi@Yq@k@]We@Yi@[yAy@_Ag@}As@eBw@iAg@eAk@eAo@i@g@q@o@g@o@w@{@gAgAoAcAwAcAs@g@UOs@e@MMKMIOQ]K[G_@@oA?IJe@BOf@gCJg@Ns@F]BW@_@XcAZgA^kA~@cCN_@Pg@p@eB|@{BJWNa@v@yBVy@j@eBNk@ZiAPo@lAaFr@wCrAsF|AoHTeArEuTvH__@pAkGjCiMl@wCj@mCnDyPxBmK\\eB|AyHpAmG|DkRpBsJReAJe@f@aCxAeHNu@tAyGViA^gB\\qAT_AFQJY^cAp@eBn@sA^o@HOp@gAT[fA{AfA{AvAiBz@gA^i@\\c@X]TWTWTWTYPSNSNUNWP]P_@N[LYLYLYJYHWLa@HYFUDQF[DSDUDUBQBQBQBSDc@Da@B]B]B_@@S@]@cA?e@?e@Aw@Cq@Ce@Ce@ASEg@CWE]Ge@Ga@Gc@EYG_@Ic@Ki@Kg@I]Kc@I]Ka@YgAk@eBg@yAUm@Qc@q@{AWk@qAgCi@}@u@kAa@o@k@u@_AmA_AcAaAeAk@k@kEmEsBsB{B}BuAwAgAkAaBaBsDwDuByBUWu@}@q@}@o@_Am@aAcAcBc@{@Ym@w@eBy@qBq@oBe@{A[iAKa@[wAqAqGMo@k@wCiA{EU{@g@_Be@mAg@oAk@mAm@mA_@q@e@y@{@mAoAeBuA}AwAwA_A}@MMq@q@gDeDOOWWu@{@a@g@_AwAi@cAUi@Wk@}AkDe@cAa@}@]y@e@cA_AaB[u@Yk@k@sAc@eAe@iAc@iAYs@w@mB{@yB}@yBc@eAQ_@Q_@MWMUMUKQKOOSQUOQSSSSSQUQQMMIQKQKMGWMSIOGQGWIYIWGSESEMCWEQCUC]Cc@CYAiAAaAJy@NaAZ{An@_Ah@KFKFIDMFoB|@IDUJ}An@e@N_@Jo@J_@Di@FqADsAAcAEkBSkAQ}@QyA_@yA_@kCo@yDaAkCq@i@MUGc@Ka@KICYGoA[{Cw@uG_BcCm@o@QmEeAa@KyBk@m@Qc@MQGUIOGOGQIQIOIQKMIOKQMKIOMQQOQIKIMGKGMEKEMIWGWGYEUCQCSCWC[AOAWAa@?c@?c@@q@@o@@m@DqB^iIBo@DaAPcD@_@@g@Fy@HaB@YF}A@S@[FmABk@Bi@JwBBk@Di@Dm@Fq@B[BUFu@FuAJgC@]FuA@e@@aA@eC?SByAL{ALaAD_@F[PqANkALs@VkBL_APqAn@qELkAHaB@c@PkE`A}UJiBTeCdAcLNsAR{BTiCDg@JaAFo@VkCb@mEj@iGRoBNaBVqFf@eLRoDNoARaAXcALYTm@j@cAVc@bA{AzA_ChAgBj@}@|@gAX_@NSb@k@f@u@`@m@Xc@T_@LSNQJGLGNEJAP?L@H@PFHDNJLNFJFLDT@P?X?X@b@@P@JBLDLFJHJHFHDHBH@H?JAJCHEHGLMFKDMDQBU@K?KAMAICMCKEMKSGIGIIKCGCIAGA[|@Jl@F^D`CX|@HdAHJ@pAPf@FP@RAd@Zn@b@`@`@jBtAhBrArBxAbBjAzB{FfAaD"
        },
        {
            "summary": {
                "hasTolls": true,
                "hasExpressTolls": false,
                "diffs": {
                    "cheapest": 0,
                    "fastest": 5.15
                },
                "url": "https://www.google.com/maps/?saddr=39.952090,-75.162190&daddr=39.930680,-74.959780+to:40.104130,-74.722600+to:40.187780,-74.610680+to:40.181020,-74.168250+to:40.181020,-74.168250+to:40.170190,-74.098730+to:40.253550,-74.080750+to:40.699020,-74.155900+to:40.714547,-74.007152+to:40.714550,-74.007150&via=1,2,3,4,6,7,8,9",
                "distance": {
                    "text": "131 mi",
                    "metric": "211 km",
                    "value": 211519
                },
                "duration": {
                    "text": "2 h 21 min",
                    "value": 8518
                },
                "name": "Garden State Pkwy Express Lane"
            },
            "costs": {
                "tagAndCash": 23.76,
                "minimumTollCost": 23.76,
                "fuel": 7.6,
                "tag": 23.76,
                "cash": null,
                "licensePlate": null,
                "prepaidCard": 23.76
            },
            "tolls": [
                {
                    "type": "ticketSystem1",
                    "tagCost": 2.39,
                    "tagPriCost": 2.39,
                    "tagSecCost": 2.39,
                    "cashCost": 2.45,
                    "licensePlateCost": null,
                    "prepaidCardCost": 2.39,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126000600,
                        "lat": 39.931256,
                        "lng": -74.955854,
                        "name": "4 - Camden/Philadelphia/NJ Aquarium",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 23852.02,
                            "time": "2021-01-01T13:44:37Z"
                        },
                        "timestamp_formatted": "2021-01-01T14:12:00Z",
                        "timestamp_localized": "2021-01-01T09:12:00-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.955854,
                                    39.931256
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126001600,
                        "lat": 40.194481,
                        "lng": -74.607178,
                        "name": "7A - I-195/Trenton/Shore Points",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 67180.16,
                            "time": "2021-01-01T14:12:00Z"
                        },
                        "timestamp_formatted": "2021-01-01T14:12:00Z",
                        "timestamp_localized": "2021-01-01T09:12:00-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.607178,
                                    40.194481
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 112104000,
                    "lat": 40.174879,
                    "lng": -74.099008,
                    "name": "Belmar North",
                    "road": "Garden State Parkway",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 0.7,
                    "tagPriCost": 0.7,
                    "tagSecCost": 0.7,
                    "cashCost": 0.75,
                    "licensePlateCost": null,
                    "prepaidCardCost": 0.7,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "arrival": {
                        "distance": 120640.08,
                        "time": "2021-01-01T14:45:32Z"
                    },
                    "timestamp_formatted": "2021-01-01T14:45:32Z",
                    "timestamp_localized": "2021-01-01T09:45:32-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.099008,
                                40.174879
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 112103800,
                    "lat": 40.250418,
                    "lng": -74.082125,
                    "name": "Asbury Park",
                    "road": "Garden State Parkway",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 2.02,
                    "tagPriCost": 2.02,
                    "tagSecCost": 2.02,
                    "cashCost": 2.1,
                    "licensePlateCost": null,
                    "prepaidCardCost": 2.02,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "arrival": {
                        "distance": 129345.79,
                        "time": "2021-01-01T14:54:15Z"
                    },
                    "timestamp_formatted": "2021-01-01T14:54:15Z",
                    "timestamp_localized": "2021-01-01T09:54:15-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.082125,
                                40.250418
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "type": "ticketSystem1",
                    "tagCost": 5.9,
                    "tagPriCost": 5.9,
                    "tagSecCost": 7.86,
                    "cashCost": 7.9,
                    "licensePlateCost": null,
                    "prepaidCardCost": 5.9,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NY",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Other discounts: 65+ Senior citizens receive a 10% discount on the off-peak rate as Senior Citizen Discount. Vehicles with fuel efficiency 45 MPG and meeting California Super Ultra Low Emission Vehicle (SULEV) standard receive a 10% discount on the off-peak rate as Green Pass Discount. Must have NJ E-ZPass.",
                    "discountCarType": "Cars",
                    "start": {
                        "id": 126002600,
                        "lat": 40.539245,
                        "lng": -74.299723,
                        "name": "11 - GSP/Woodbridge/The Amboys",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 170792.08,
                            "time": "2021-01-01T15:16:24Z"
                        },
                        "timestamp_formatted": "2021-01-01T15:33:53Z",
                        "timestamp_localized": "2021-01-01T10:33:53-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.299723,
                                    40.539245
                                ]
                            }
                        }
                    },
                    "end": {
                        "id": 126004000,
                        "lat": 40.706563,
                        "lng": -74.06214,
                        "name": "14C - Holland Tunnel",
                        "road": "New Jersey Tpke",
                        "state": "NJ",
                        "country": "USA",
                        "arrival": {
                            "distance": 202645.36,
                            "time": "2021-01-01T15:33:53Z"
                        },
                        "timestamp_formatted": "2021-01-01T15:33:53Z",
                        "timestamp_localized": "2021-01-01T10:33:53-05:00",
                        "point": {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.06214,
                                    40.706563
                                ]
                            }
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                },
                {
                    "id": 111900000,
                    "lat": 40.730217,
                    "lng": -74.038654,
                    "name": "HT : Holland Tunnel",
                    "road": "Holland Tunnel",
                    "state": "NJ",
                    "country": "USA",
                    "type": "barrier",
                    "tagCost": 12.75,
                    "tagPriCost": 12.75,
                    "tagSecCost": 17,
                    "cashCost": null,
                    "licensePlateCost": 17,
                    "prepaidCardCost": 12.75,
                    "currency": "USD",
                    "tagPrimaryNames": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "prepaidCardNames": [],
                    "tagPrimary": [
                        "E-ZPass NY",
                        "E-ZPass NJ"
                    ],
                    "tagSecondary": [
                        "E-ZPass",
                        "E-ZPass DE",
                        "Uni",
                        "I-Pass",
                        "E-ZPass Skyway",
                        "E-ZPass IN",
                        "RiverLink",
                        "E-ZPass ME",
                        "E-ZPass MD",
                        "E-ZPass MA",
                        "MnPass",
                        "E-ZPass NH",
                        "E-ZPass NC",
                        "E-ZPass OH",
                        "E-ZPass PA",
                        "E-ZPass RI",
                        "E-ZPass VA",
                        "E-ZPass WV",
                        "E-Zpass Flex"
                    ],
                    "licensePlateNames": [
                        "Tolls by Mail"
                    ],
                    "discountCarDetails": "Discounts: Carpool plan and Green Pass discounts available. Contact Port Authority for details.",
                    "discountCarType": "Class 1, Class 11",
                    "arrival": {
                        "distance": 206804.49,
                        "time": "2021-01-01T15:36:05Z"
                    },
                    "timestamp_formatted": "2021-01-01T15:36:05Z",
                    "timestamp_localized": "2021-01-01T10:36:05-05:00",
                    "point": {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -74.038654,
                                40.730217
                            ]
                        }
                    },
                    "height": null,
                    "tagRequested": "tagPriCost"
                }
            ],
            "polyline": "kdzrFnbwiMAb@GJELKHMHk@Gq@KOAK?I@GBGDGHGJENCRCZKhAUAi@?YEQCaBS{ASyASICwAQqAQoAQYCeBWwAQBc@FcBL{BB]LiBDc@Bk@F}@@{AE}@Fq@@KRgCTmDZqELkBPeCHkB@aAAw@EmAAYGy@M_AO{@Ki@Ki@Ia@Oy@Y_BOy@OaAKaBEgAA_A?u@D_APyBRsBBQBOVcCZ{Cd@wDToBPyADe@BSBUBUDm@@S@Y@c@?k@Ac@C]Im@Kk@Ok@Qa@OWQW[g@MOWUQMSMQI[K]Ge@E{AEmAEu@CiAE]A}B@QEWGgAW_AYk@SoAk@u@]_Ag@wAy@eBkAy@m@s@m@aAw@q@o@q@q@c@c@Y[s@y@q@_Aa@o@g@}@c@aAc@iA]gAYiA[{AY}A_@mBQ{@_AyEo@eDq@eD]eB]aBWiA[qAa@uAY}@]_Am@wA[o@[k@Ue@kBsDq@kAg@{@aAcB{@{Ae@w@g@aAWc@[k@aAqBq@_B_AyBkAkC}BwFaA}BYq@iAmCs@mBm@{A_AqB_BqDaD}H{AmDmAuC_@}@o@{Aq@aBWq@]cAYaAUy@Om@c@oBQ}@UwA]gBWsA]eBc@kB_@wAa@sAi@aBs@sB_@eAcAsCcBkEs@gB_@_A_@aAkAaDoBsF{BqG_@eAi@yAa@gAUk@Sg@Ys@cAcCi@oAm@wAIc@EQEOGSOg@eAaD[cAk@kBW{@c@sAe@wAWq@Wo@_@y@c@y@e@w@_@i@]e@W]MOWYe@e@c@a@k@e@a@[w@i@qAu@kBeAaCsAkDmBcBcAcAo@gBkA_As@o@m@OMe@g@[a@QUQWYg@Wg@Qa@KWIUEMEOCOCUAMAYA]?c@?]@a@BY@KBSDUF[DQFSRc@Vc@Xa@p@{@f@e@pAsAf@g@LOJM`AiAhC}BdAaAvBsBlAiAf@e@\\a@z@gAv@aAj@q@nBmCr@aA|AgC^o@HM\\s@j@kAt@}Ar@_B|@}BNa@t@sBz@iCJ_@`@qAtAeEnAyDrC_JlBaGdAkDfB{F`CwHzB_Ht@aCj@gBFOZaA^iAfAaDjA_DlAaDp@_B|@uBlA{Cl@wAb@cAj@sAj@qAl@oA^u@|@gBfA_Cp@}An@_BbAqCTm@bAmCp@aBp@cBBGfAiCjAsCl@cBt@}B\\}AJc@\\sA^{APw@P}@Jm@Hs@Jw@V_CDa@Dc@@MDe@Dg@^gEFcC@u@?{@AwACeBEeBG}AKoBQuBU{BCWKaAKq@COa@uB]gB[_BYiAUy@GOi@}A{@iCo@mBa@qAUcA_@mAW}@EKUw@Qo@Qu@c@oBOw@O}@UaBMmAEg@Gy@G{@KyBAo@?KAoB?[@wAB_C@k@FaEJoFNyIBcA@o@HgE@{@LuBHw@@GHo@T{AJe@R}@b@}AVw@Xu@p@aBTe@`@w@Zi@Ze@VYVYj@g@nAeAj@i@f@c@h@g@JK\\Yd@c@d@a@POVSTSTQjBuBj@q@~BuCh@s@|@gAl@w@d@k@x@cApAwA|@aAv@y@n@q@l@m@bC_CjAiAhAgAhAiA\\]pAiBvA}Bt@wA`@aAXg@n@mB`@oAHYJ]J]`AeDn@}BtCyJfAyDh@iB^kA^cAj@qAn@sAd@{@`@o@f@u@t@}@j@u@b@g@VW\\[d@a@fA{@v@g@x@a@p@[v@Wh@Op@OfAQb@Ed@G|BUdAIvAI`ACn@AlA?|B?`B?lBAp@A^Ap@Eb@Ct@In@IRCv@O|Bm@XIn@W`@QTKb@UVMlAo@TOvAeAROp@m@z@{@`@c@n@w@b@k@X]PYDGd@w@BEl@eAbAcBp@eADGd@u@`@u@x@{Ap@sAj@eA`@w@Xk@HOxAgC`CwDR[fAcB\\i@x@qAf@_Al@eAd@{@Zm@LW^u@h@aAXi@f@_AJS^u@R]j@aAFKrA_Cl@cAt@sAd@y@v@sAPY`@q@P[PYBEf@y@Ta@FM`@s@T_@p@iAf@}@b@s@PYZi@R]PYZi@Zk@HMDIt@qAdAgB~@_Bp@iAt@qAf@{@b@u@Xg@~@}An@gAb@w@vAcC^k@P[Xe@`@s@d@y@f@}@T_@JQR_@LUt@oAr@kANWNWz@{Ah@_A`@Up@c@NG^GNAf@?b@@J@n@@^GLGXWPUFOJa@Ba@AYEYWm@eAwAMOQUgE}FuAiBg@q@w@cAOSw@iAGGKQMa@GYE]Ac@@YBWDYLe@N]^q@PYT[`@o@JWLYFYF]BY@a@C_@E_@G]K[OWSWOOMK_@Mc@Ei@?}AFa@@c@E_@O[SWS]_@{AiB{AiBy@_AmAqAkEyFmCoDoHuJoEiGgCsDyD{FkBoC_DuEeEiG_DwEa@o@iDcFkEoGqDoF{PeWcDwEaCgDcDmEoDyEsJkMgAyAiF_HwAmB_BuBu@cAcDiEkA}AsRiWmEyFmDmE}FaHgGaHwCcDYY_AgA[[oBwBeCoCqC{CiG_H_EkEsB}BiF{FiDwDsEmFSWsAeB{@iAiBiCqAkBm@}@e@w@cAcB]k@]k@q@kAYg@u@uA{@aBq@sAi@gAm@oAa@{@e@eAa@aAk@sAk@sA{AsDwAkDiDiIeBeEuAeDiAqCaAaCk@sA_A}B}@yBaA_Cs@cBy@oBYo@_BsDaAwBk@mAoCwFq@qAi@eAa@u@mAyBaEoH{BuDyDkG{DoGoEiHsGoKsBgDaA_By@mAuA{Be@{@e@{@oAcCsAiCcAwBk@mAeB}DyAqDuAkDkAcDiBwFiCsIkDsL}ByHa@uA{AeFsAgEkAkDqAmDaAiCkCmGgCmFiA}Bs@sAo@mAq@mAyBuD_BiCkBoCo@_AgA{AuAiByBoC{@cAiAqA{AcBeBgByB{BoCqCqCqCsFuFaDcDaAaA}@_AeFgFuHwHwGyGkEoEsEwEgDeDq@q@oCmCu@w@c@g@GIa@c@q@o@wC{CmFyFy@u@a@a@yBsBYYiBeBuEwEkGkGyB{BoBoBoAoAgFkFgFgFaCcC}@}@_@_@oAqA}BcC_DmDuDkEcCyCqCqDiDuEoBqCeA}AqB}C}@uAy@qA_A}AiB{CuAcC[i@{DmHcAoB_AkBuAwCm@qAoCcGcCoFaGwMqFyLiFkLaEcJiAgC{Pq_@eAwB}A_DgBkDqBwDoBmDuBoDgCeEqCkEiBmCsAoBuDqFaFkHoBuCgA_B_AsAwAsBu@eA}AaCgAcBgCqD_DqEoEsGiBmCyBaDkJgN{BeDu@iAyBeDwKwOqMoRq@}@gCoD}CkEyByCiGiI{GqIqBeCiAqAmEiFkHkIaHsHyC_D]]_A_AcEcEcBcByEuE}MyM{A{AsBsB}E{EkDiDyCwCkCkCoImI_A_AuHsHuFsFu@u@sCqCmCkCgPcPcJiJ_FiFsB{BsB{BwBcC_KiLqH_JaCyCoEwFqBkC_@g@cFyGqCwDqD}Ey@gASW[a@sAiBcCeDeB}Be@o@qJqMiEwFGIwEuGq@_AeAuAyCcEsPaUoBkCkX}^{EqGcN_Rw@eAsK{Nkw@weAgJcMuDcFuYm`@u@cAgA{AaAqAW]W]W]kFiHqBoCaLiOkFkH{@oAw@kA]e@wByC}BoDiCaEkB{C_C{DeCiEqBoDoCcFcCwEoBwDmB}DyBqEgCqFyBwE_JsRcTqd@s@{A}G_OiDkHeHkOSc@_GgMoH{O}EiKi@cBe@sA_@cA]{@gCoFWm@Sg@Y{@Mo@WkAUeAKa@K]Oc@g@eAm@qAwAkCsAmCu@_BgAmBKQs@uAWc@o@eAUc@Qc@Oa@I[Ia@E]C_@@c@Dc@L]PWRQVKRCT?RDRJPNNPHRHXDX?ZA`@EZGXWfAs@rCQn@Ol@Qp@WfAaBbHg@pB]lAw@xCI\\GVYrA_@fBWtAKl@Kp@Mz@ObAQhAQz@M`@Mb@GTKXOZOVQRSPSJUDY?WEWKQOOSKUGSCQCYA_@@c@De@Da@Hm@j@qDFa@\\_BZuAj@mCPw@~BqKj@oCl@iC\\}Ap@wCJc@R}@Lk@Ns@bBkIj@eDLu@PcAHi@N_ARuAd@qD\\yCn@eGLiARaBFg@Da@BUTcCFe@JeAz@qHPaBvAaNt@}Gd@{DNoAXoBPoAZkBb@{Bd@cC\\_Bj@cCbBgHlDyNv@eD^{Af@oBNo@zAmG~A_HZ{Av@eDf@oBH]XkArBoIRw@hDwNf@uB~BwJJa@jMgi@|Hg\\FU~@wDfA{El@}Cl@qDd@gDb@aE\\iEVcFJsCDeBByAVmNPaKDcBBoA?WTwKRuJBmD?uDCiCEsBMgCQyCg@eHs@_Ks@iJ[{EQgDSeFI{DC_DB}E@y@@i@@Y@c@JqDVgEJaB@WFs@Fw@NsCPeBLkAl@yFReBTkBv@sGD_@j@wEd@sDb@oDxCqV^uCxDo[h@qEN}ATkCX}ENiEF}BBwC?{BC_EM}EWcFQ_EWmFq@qOoA_Y[iHWuFUyEGkBEaBCgAAeAAmC@_CBcBDeCHcCLcCN{BP}Bd@yFV{CTuCx@yJXgDRcCReCVaD@MbAaMr@kITeCR}BNsAXuBVyAr@wDl@aCp@cChAmDfAmCx@iBh@gAd@}@hAwBlCeFt@uAxBgE|@aBpAeC~BmEbFsJ~A{Cv@{Ar@_Bj@yAn@gBf@}A^oATu@ZgAl@kC~@_Er@yC\\yAxAsGZsAp@uCLi@H[TcAPs@x@iDJc@p@uCjAcFDS`@eBFYz@sEd@uCfBcKBMj@iDJo@PcAL{@b@sC`@gCv@{Et@oFZaDX}EN{DB}CEiGG{BMaCQmCKqAOyA_@oCQkAu@mEaDsPuDaSiBmJoA}Gi@uCg@gDMiAM{ASeDE{ACsB@}CBwADqAR}C\\_D`@oC\\gBTaAVcAlA_EzAkEtDqK`GwPL_@b@qAl@gBj@iB^qAdAaE~@sDh@eCx@oEb@gCRyAX}Bj@}Eh@qFLaBNgCV}EBo@Bw@D{ADoBB{B@mB?aFA}CC_FCwEGqNIeUCeGC_GAgEAoB?cA?w@AcACyG?w@CmF?eB?a@?sACoA?oAAuDA{DCyAA_EC{E?mACqBCwFAoEC{DCeBGsCGgCEwAGwAI_BEw@KeBo@mJe@gFcAiKoEkb@i@qFO{BMuCI}EAeDB}BBqBDeAF{ADkAJ_B^cEPqBLiAr@aHJ{@Hu@DYLyAB]X_DHw@@EPwARiB`@eEVgDJcBFk@FeCBmABiADgC?gEG_FOmH_@cOi@qRWqJSqIi@{Sk@cVIaDYmKYwKIyDE{D?eD@gED{ELsGj@aQhAeYTgG\\_JLoDHsCFeEDgE@sD?aECaDEqEIoDK}DOqEWwG[sGQuBUqBQoAWyAg@_Ck@{Bk@eBeAmCg@iAs@sAo@gAq@_Ai@s@k@u@_BgBiCwC}DkEaCiCuAyA]a@g@m@eBuB{@gAcA{A_@k@]k@yAwCQa@KUUk@q@aBg@yAi@cBWcAi@wBu@uDUsAIu@S_BUoBCc@O}BIgBGgBEoEC{F?kEEyGGcL?iDK{UEeSKoWCkM?KEaKGqNE_NCsGE_GCqJC_J?Q?ICgJCqF@cHHwGLoF^mJ^eHx@mMv@sNj@mKl@gLz@eOnAaT~@yO~@cPb@{HHuAHyAPyCFiAJ_BDiBHmD@]NsGNeH@g@@e@HwDFyBDo@XmAVoAPe@JOLMZSPGd@Ad@J\\XHLPb@Jt@Cx@I^O^WXMHYJ[@qBEw@Ce@Bc@BwAb@mBn@aA\\]JYH[FWDa@D[@M?UAQAQ?W?YASA[C[CWCAp@DvCBr@DrCBdB@l@BrAFbE?l@@zCCb@Q\\KLIF_OdKoAz@eAr@WPmAx@oVtPi@\\yAbAmAx@UPa@\\aA`AgRhTo@}AWmA?sADa@g@Ke@Qi@Kg@Gg@A[DMD?@LEZEf@@f@Fh@Jd@Pf@JE`@?rAVlAn@|AfRiT`AaA^]TQnAy@xAcAh@]nVuPlAy@VQdAs@nA{@~NeKHGJMP]Bc@A{C?m@GcECsAAm@CgBEqCCs@EwC@q@VBZBZBR@X@VDNBv@NzCr@v@Nh@J`@Ff@FbAHr@Dh@Dt@D~@`@ZV\\j@Ll@Bv@C\\GVGLSVWLM@Y?YKSUIKK_@Eg@GiBC[E]@e@HwDFyBDo@Bc@DwBHkEFkCDyADeADgC?OBkBAgA?_AAiAAeAE}AKeCOeCUsCW{BUgBM{@_@{BWwAYqAIY_AsDaAsCg@yAu@uBo@_BWi@oBsEo@wAa@_Ai@mAq@yAuCoG{AwDgA}CaAoDw@mDs@wDi@oDYiCUuCSqCKkCE{BE}B@}B@sBF_DLcEPqE^sK^gKFmDD}CA_CCmCAc@KkJAsACcBCsCAy@AmAGkDKiGA{A?e@CcBAsAA{BGmFAq@Aa@C}@Ay@EiEAo@Am@I}GA}@Aq@AaABa@B[B[BSBSFWDOFOFKFMHKHGHGJCHENEJAJ?L@LDHBJDHDHFJHFFHHFHFJFJDJFNDNBLBN@P@T?PCb@AJCPGVELKRILKJMHIDGBKBI@M@W?e@AqB[sAS_@GeAOaAO{C_@s@Ik@Gm@Gg@Cc@A_@?o@?iBAe@D_AHk@BuANqAPiEf@[DYDOBqB`@W@gBHiBJmBL_@B]B[Ba@Bm@B{@BoIPiCFwA@q@@w@@eBFcB@oJCgEEqFKcBEiEOiCM_BM{BSaDYkAIYCeAIq@Gi@EaCUyAMeCWoBQuAQ[EUCs@KwAQqDa@aBSwDe@eDa@oCYaCSuDWOAiCKsCKeCE}ECwB?sB?K?sDAO?eE@mDDeFJwABuABcBBkEL{ADM?gC@{FDwA@gBCcBAq@CaDImDMgDU{BSKAoD_@sBYuB[QEaAUoBc@o@O{A]qBi@cBe@eEwA_A]}CkAeD_BwCwAyBeA}CmBiBiAwEuCiC_BuEiD_FqDaHeFeDaC{EmDGEwEaD_BiAyCeBs@a@qDqB]QsDiBiCmAmB{@cAc@iAc@qAc@k@QWIs@K_@Ec@Ca@AmEYkCS{@Iw@I_@Ey@KeAM[Ei@Ii@My@Sm@Q_@Mm@Si@SWKQIu@]_CcAoAe@g@Q_@MYI[IQE_@Ig@Ki@Im@Iq@IcBOcBKoF]aDSo@E}AMkBSgC[aBU{Ce@uCe@iCa@aFu@mBWsAOoBO]AgAE_DGcC@mCFmCNaDXmC^{E`AYF[Jq@P}Ab@wBr@wBv@{Bz@qBx@gBv@qAn@yAv@mAp@cAj@}@f@qAx@_CxAgAz@qCvBkB|AoAfAwClC}BnBs@l@{@t@_BtASNyAlAuAfAcAr@aBfAwBrA_Bx@{@`@gBv@wBx@sCbAc@NSF[Js@RuDx@wEx@sEl@sLtAqCZ}ARkFl@iEf@a@DeJfAuLtAqFn@cFl@mDb@{Cf@_Ep@gI`BeNpD}NdE{GlB}D|@gCh@aC`@wB\\qC\\wEd@yCRqCR_CF_CH{ADo@@yB@wD?kA?kA?gB?yCAaF?wA@aBAoA?w@?}A@gB@iAFgADe@B[@wALkBNwARaBVo@LwB`@{@PcAT}@TsA^qA`@_AZk@T[Lm@Tk@V[Lm@Vs@\\sCvAw@b@}@h@{AbAo@f@}@t@WRYXq@r@m@p@q@x@u@bAm@~@m@`Ao@hAc@|@g@jAWp@Sf@g@|Ai@dBoAzE_B|Go@jC_AfD[hAQn@IRY|@c@dAu@|Aq@tAs@fAy@jAu@dAs@x@cAhA_A|@eAz@y@n@{@j@{A~@gAp@gAn@i@\\oBlAkAr@eAp@u@f@qAbAy@p@oAlA{@~@s@x@iAxAm@|@gAdBk@`AMVmB|Dq@dBg@pA_AbDyAhFkA`EaDzKm@vBe@~AM\\qBdGg@zAgArCgAfCaAvBg@dAq@tAk@dAm@fA]l@q@lAc@r@c@t@o@`Au@fAu@dA_BtBu@~@s@z@eAlAqArAc@b@UT]ZUTKHc@b@i@b@c@`@mAbAaAr@u@j@yA`A_BbAyAx@aEzBs@^}DxBcNzHeCtAmBdAiAx@}@n@uAfAqA`Au@l@}@bAyA`BaAnAy@lAu@hAa@l@aA~Au@tAe@`AYj@c@pAo@lBoAxDeB|FqC~I_AvCcBnFeBtFsAlE{AzEcClIyA`GuBbK{BzLMt@]nBa@xBa@zBk@xCc@`Co@rC]|Ay@|Ck@hBeAzCu@`Bu@bBo@fAs@nA{@pA}@rAuAfBe@l@oBpBOPMLMLeAhAy@t@gA~@aBpAqA`AsAz@sAx@iCtA}DrBsDlBqEzBmAr@gAp@kAx@iAz@qAfAcA`AmAnAqAzA{@dAuAhBeBlCqChF_AfB}E`KsBdE}CpG{@bB_@r@}ApC{A|B}@jAm@p@o@p@qBjBoBzAsBnAiAj@ULaA`@gCdAWJqBj@kBf@wCt@iCn@aBb@mA^gA^eAb@_Ab@qBhAkAp@_Ap@s@h@aB~A]\\gAhAyAzAsAtB}@rAa@v@mAtBi@nAmAxCm@fBe@zAeAhDkAvDi@~As@tBuAhEkAzD[fA_@bAWp@c@jA{AhEyAnDcA`CoC~F}A~CQ\\o@zAwAhDkB~Dy@fBCF]t@[l@cElIkA`Cw@jBiAbDs@dCs@lDg@nDS~BWrEAXG~D?LEbBOjFEnAIlDMjEY|HMjCYjFSvCa@bFYbDU|Ba@nDSvAQbAg@|B_@|AQn@i@bBKXeA~C{@xBu@~Aq@pA{@xAeErG_@j@kDnFeCzD}AfCkCvEsAhCqAlC_@t@Yj@{@hBmBhEmCnGeDfI_ExJ_ChFeArBcClEkAnBs@jA{@jAu@`A_BbBgAfAwBdBiBlA}@f@cAh@iBx@{Ar@eEjBiCjAaCjA}At@}A~@eBdA_BhAc@X_@V_CbBeAv@eBnAyC~B}@p@yBhBy@r@GDwBhBmB~AaDvCsDpD}B`CwBbCqDpE_AdAmBrCu@hAy@jB{@`BwCtFkBjDkAnBgA|Ak@v@oA`BuCzDcCrDuBpDgBfDYh@Yp@_BbDMTsAbCsBvDkCjEiBbCoB|B_@`@_A|@a@`@e@f@a@`@URSPe@b@yChCcClB{AlA[V]V_C~Aq@b@iAr@gAn@eBbAiCtAGBq@^oB~@wAn@gBr@oC~@_Cn@]Jw@Ts@LcBXOBm@JwAXmB\\}BZSBoALqCP_E\\qBF}A?{@?]Cy@GWAq@Eq@MgAQy@QaB_@aBg@kBu@[I}Ac@eAY_AW{Aa@kBc@eCa@wAQsAK{@EkAE{A?g@Cw@?a@@sBHi@Do@F_@Dk@F}@Ls@Jm@J[D]D{Et@qBZm@HyA^g@Jq@F]B{@D{@DgABo@@q@?aBCi@Ac@AaDImJU_Qe@iPa@eDGiA?S?aB@a@@}CH]BmDRc@BwCJqC@qB@iBGcCYi@CWCaAG_AG}@Ia@EoBYmB_@oA[KCsBo@[K_F}AwAe@iBm@uEwAk@QkBo@_AUgAS_BS}@KmAGqBAsAD}APo@HqATs@Ty@V{@^yAn@aAf@e@\\g@^sArAu@t@gApAq@z@kBfCgD`F]b@g@`@URgAdAmAnAeAjAWTQNQLQJMFSJUHQDOBM@S@O?QAKAOCOEQGMGKGMIMKGGKMMQMSMWKWKYEMI[GWESCOCQGi@Ec@C[Em@IoAGgAGmACw@EuBIcBGoAOoCYqDUiC]oCKq@Ic@GYI[Qo@Ws@q@}A[u@M[GQIWK_@GWESEUCOEYCWAMAQAYAyA@g@FwA@a@@e@?cAAe@AWAOCYCWE]EYG_@Ia@I]K_@M_@Oa@MYMWMUOWOUQU[a@u@}@q@YQIOIe@[kAw@e@[OKOKYUQOMMKKMOIKIKIMMSIOMWIQISKYK[Ma@Qo@aAeDaA_D[_AK[GQGOIQMWYc@}C{Ic@kAsAiDy@gBk@qAOYEGSe@Wi@g@gAaAoB[m@oAcC{AuCYg@a@y@_ByCcCuEs@uAe@{@aBcDc@y@i@cA[m@i@eAkDoGcCcEw@oAe@u@OUUa@g@s@wAsBkBiCk@u@e@k@uBiCoB}B_CiCkAmAwFmFmCeCmG{FqEqEu@s@[Ye@c@sCiCuH{GSQoEgEgDuCyAsAIIoAkA_A{@eHsGuFiFmDcDcDwCsDiDuG_GkEqD}BgBiDgCgCkBy@k@{AcAgCaBiCaB{BsA_E}BqBiAoHeEkDoB{GyDiEcCiAm@uBkAuBeAmEyBmCsA}@c@qHeEsCcB_CwAIGoCeBoCcBcDgBs@_@sBgAu@a@_@ScAg@kAm@_@SoAo@aFiCyMyGaAg@}BkAeAi@kGaDqCuAs@[yBoAECm@[{MaHmIgEkKqFgEwB]Qc@UkAq@iB}@UKQKGCaCgAkDeBoG_DgIcEiK{FkG}C}GgDqCwAsC{AkFsCOIcAk@eAk@sC}AaCqA}BoAmAo@e@WqFqCaDcBuGiDeFiCaB{@]Q{BiAQIuBiAwBgAuFuC_@SoBaAaAe@s@_@g@WyCyA}EaCuCqA_E_Ba@Q{@a@aAe@o@[}A{@m@a@}@o@iA_AuBgB{@_Ai@m@}AmBs@cAu@kAe@w@e@y@Uc@o@wAcAyBo@uAg@iAc@_Am@sAs@aBc@aAq@yAk@qAc@}@a@cAs@}Ac@aAm@qAqAyCaBmD{@iBu@qA_A}Ai@u@o@y@mAyAoAsAmAgA_Aw@aAq@y@k@oCaBgCyAMIm@_@mBkAa@YQKs@c@g@[_@Ua@UgAq@yBsAiAq@_BaA_BeAgCiBqDoCwBkBmCaCOO_CqBgCaCaB}AWUuCkCiBeBWUq@m@wAqAoBiBwEkE_GoFkJuIo@e@i@c@aAs@}@o@yDiCuAy@w@g@cC{AcP{JcHiEmCaBqJ}FoG_EkDwBsBoAmDwBg@]a@Ye@UYOgAs@}ByAiCaBo@a@uDaC{ByAYSmD_CgHyEoD_CeEgCUM{@g@qDqBi@Yq@k@]We@Yi@[yAy@_Ag@}As@eBw@iAg@eAk@eAo@i@g@q@o@g@o@w@{@gAgAoAcAwAcAs@g@UOs@e@MMKMIOQ]K[G_@@oA?IJe@BOf@gCJg@Ns@F]BW@_@XcAZgA^kA~@cCN_@Pg@p@eB|@{BJWNa@v@yBVy@j@eBNk@ZiAPo@lAaFr@wCrAsF|AoHTeArEuTvH__@pAkGjCiMl@wCj@mCnDyPxBmK\\eB|AyHpAmG|DkRpBsJReAJe@f@aCxAeHNu@tAyGViA^gB\\qAT_AFQJY^cAp@eBn@sA^o@HOp@gAT[fA{AfA{AvAiBz@gA^i@\\c@X]TWTWTWTYPSNSNUNWP]P_@N[LYLYLYJYHWLa@HYFUDQF[DSDUDUBQBQBQBSDc@Da@B]B]B_@@S@]@cA?e@?e@Aw@Cq@Ce@Ce@ASEg@CWE]Ge@Ga@Gc@EYG_@Ic@Ki@Kg@I]Kc@I]Ka@YgAk@eBg@yAUm@Qc@q@{AWk@qAgCi@}@u@kAa@o@k@u@_AmA_AcAaAeAk@k@kEmEsBsB{B}BuAwAgAkAaBaBsDwDuByBUWu@}@q@}@o@_Am@aAcAcBc@{@Ym@w@eBy@qBq@oBe@{A[iAKa@[wAqAqGMo@k@wCiA{EU{@g@_Be@mAg@oAk@mAm@mA_@q@e@y@{@mAoAeBuA}AwAwA_A}@MMq@q@gDeDOOWWu@{@a@g@_AwAi@cAUi@Wk@}AkDe@cAa@}@]y@e@cA_AaB[u@Yk@k@sAc@eAe@iAc@iAYs@w@mB{@yB}@yBc@eAQ_@Q_@MWMUMUKQKOOSQUOQSSSSSQUQQMMIQKQKMGWMSIOGQGWIYIWGSESEMCWEQCUC]Cc@CYAiAAaAJy@NaAZ{An@_Ah@KFKFIDMFoB|@IDUJ}An@e@N_@Jo@J_@Di@FqADsAAcAEkBSkAQ}@QyA_@yA_@kCo@yDaAkCq@i@MUGc@Ka@KICYGoA[{Cw@uG_BcCm@o@QmEeAa@KyBk@m@Qc@MQGUIOGOGQIQIOIQKMIOKQMKIOMQQOQIKIMGKGMEKEMIWGWGYEUCQCSCWC[AOAWAa@?c@?c@@q@@o@@m@DqB^iIBo@DaAPcD@_@@g@Fy@HaB@YF}A@S@[FmABk@Bi@JwBBk@Di@Dm@Fq@B[BUFu@FuAJgC@]FuA@e@@aA@eC?SByAL{ALaAD_@F[PqANkALs@VkBL_APqAn@qELkAHaB@c@PkE`A}UJiBTeCdAcLNsAR{BTiCDg@JaAFo@VkCb@mEj@iGRoBNaBVqFf@eLRoDNoARaAXcALYTm@j@cAVc@bA{AzA_ChAgBj@}@|@gAX_@NSb@k@f@u@`@m@Xc@T_@LSNQJGLGNEJAP?L@H@PFHDNJLNFJFLDT@P?X?X@b@@P@JBLDLFJHJHFHDHBH@H?JAJCHEHGLMFKDMDQBU@K?KAMAICMCKEMKSGIGIIKCGCIAGA[|@Jl@F^D`CX|@HdAHJ@pAPf@FP@RAd@Zn@b@`@`@jBtAhBrArBxAbBjAzB{FfAaD"
        }
    ],
    "meta": {
        "userId": "sushmitaswati2114@gmail.com",
        "customerId": "cus_PA2bXjgSyZQWwC",
        "tx": 6,
        "type": "api",
        "client": "api",
        "source": "here"
    }
};