---
title:  "Overgang til sommertid"
categories: nyhet
permalink: sommertid.html
tags: [old_news]
---

31 mars er det overgang til sommertid. 

Erfaringsmessig kan det oppstå problem med samtykker som inngås de siste 10 dagene før overgang til sommertid, dvs fra 21 mars.

Hvis datakonsument beregner 10 dager samtykkeperiode i LocalTime eller CET (eller uten tidssoneangivelse) kan faktisk varighet for samtykkeperioden bli 10 dager + 1 time.
Skatteetaten validerer at inngåtte samtykker ikke har varighet lenger enn 10 dager og vil avvise slike samtykker.

For å unngå problemet kan man bruke UTC tid i alle tidsberegninger, og også angi ValidToDate parameter i UTC tid.
Man kan også unngå problemet ved å inngå samtykker med varighet litt kortere en 10 dager.