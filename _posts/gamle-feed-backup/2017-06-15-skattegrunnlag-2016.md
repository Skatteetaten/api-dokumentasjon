---
title:  "Skattegrunnlag 2016"
categories: nyhet
permalink: skattegrunnlag_2016.html
tags: [old_news]
---

Skattegrunnlag for 2016 vil snart gjøres tilgjengelig for de skatteytere som har fått skattegrunnlaget ferdig utarbeidet.

Vi har i dag åpnet for 2016 i AT-miljøet, slik at de som ønsker det kan teste mot 2016 data.
Vi har lagt opp 2016 testdata for [testbrukerne](data_testdata)
Beløp i testdata er like som for 2015, med unntak av at de 2 siste sifrene i alle beløp er 16

Formatet for 2016 er likt som for 2015, men det er noen få endringer på hvilke verdier som kan komme i &lt;felt&gt; elementet.
Informasjonsmodell for dette kommer straks den er klar (som blir veldig snart).

Skatteetaten har testet endringene en stund, men planlegger noe mer testing ifm at vi nå har løsningen klar i AT.
Integrerte partnere er velkomne til å teste i AT mot 2016 data, for å sjekke at det ikke oppstår problemer. Det oppfordres til å gjøre ihvertfall grunnleggende testing

* Tilgjengeligdata-api har også fått støtte for 2016, og kan nå brukes for å sjekke om data finnes for en skattepliktig
* Samtykkevalidering har blitt strengere, bl.a. med kontroll på at avtaleperioden i samtykket er innenfor det skatteetaten tillater
* data utleveres nå slik de så ut på samtykketidspunktet

Dette er en kodeendring i skattegrunnlag-api og tilgjengeligdata-api. Ny versjon skal være kompatibel med tidligere versjoner. 
Hvis datakonsument som benytter samtykke ikke har forholdt seg til kravene skatt stiller ifm bruk av samtykke kan man allikevel opleveve problemer.

Når man tar i bruk 2016 data bør man også ta høyde for at det er noen mindre funksjonelle endringer på hvilke verdier som benyttes i &lt;felt&gt;.

Vi legger opp til gå i produksjon med endringene relativt snart, straks vi har fått testet også i AT. 
Hvis datakonsumenter opplever problemer i AT er det viktig å gi beskjed, slik at vi kan vurdere om vi bør avvente produksjonsetting til eventuelle problemer er løst.






