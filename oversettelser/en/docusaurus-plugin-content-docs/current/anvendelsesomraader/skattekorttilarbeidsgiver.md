---
title: Tax deduction cards for employers
slug: /anvendelsesomraader/skattekorttilarbeidsgiver
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [Skattekort,Arbeidsgiver,Forskudd]
last_updated: Oct 01, 2025
hide_table_of_contents: true
---
<Summary>APIs related to tax deduction cards for employers</Summary>

## Modernising the tax deduction card service for employers

The Tax Administration is developing new APIs for payroll systems to provide tax deduction cards to employers. These APIs will replace the current integration with the Altinn form RF-1211.

## Usage pattern
The useage pattern will remain the same as before; one API for ordering the tax deduction cards, and one API to retrieving the response. In the future, it will also be possible to listen for changes in the dialogue portal and retrieve the response using an ID from there.

The existing solution via RF-1211 will remain available in parallel with the new APIs. This means, for example, that you can order tax deduction cards using the old solution, and then order changes using the new one. There is also nothing preventing you from retrieving tax cards using the old solution even after having retrieved them using the new one.

No date has been set yet for the reorganisation of RF-1211.

## Timeline

The APIs are now ready for test. 
In production, the plan is to have a version ready during October.

## Technical documentation
Technical documentation, URLs to the APIs, and other necessary information can be found on [these pages.](https://skatteetaten.github.io/api-dokumentasjon/api/skattekorttilarbeidsgiver)

This is a preliminary version, and changes may occur.

More information on [how to connect to our re-established services can be found here.](https://skatteetaten.github.io/api-dokumentasjon/api/skattekorttilarbeidsgiver)

## Contact

If you have questions or feedback, please contact us by email at [forskudd\@skatteetaten.no](mailto:forskudd@skatteetaten.no)  
