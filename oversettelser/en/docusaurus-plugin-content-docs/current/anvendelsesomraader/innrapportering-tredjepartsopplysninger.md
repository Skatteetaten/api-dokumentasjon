---
title: Reporting third-party data
slug: /anvendelsesomraader/innrapportering-tredjepartsopplysninger
folder: anvendelsesomraader
sidebar: mydoc_sidebar
datatable: true
tags: [ altinn, innrapportering, tredjepartsopplysninger, grunnlagsdata ]
last_updated: Oct 1, 2025
hide_table_of_contents: true
---

## Reestablishing Altinn services

The transition from Altinn II to Altinn 3 is underway. The Tax Administration has started a major effort to move our forms and reporting solutions from Altinn to skatteetaten.no. We’ve already done this for the tax return and the VAT return.
See more information about the reestablishment and our test plan on [skatteetaten.no](https://www.skatteetaten.no/bedrift-og-organisasjon/reetableringaltinn/)

## What you need to do as a supplier of end-user systems

Here’s an overview of the steps required to start using the new services provided by the Tax Administration.

1. **Availability:** Verify that the service you want to integrate with is available in the test environment. See the links below for services that are ready for testing. We recommend reviewing the supporting documents for the service before proceeding.

2. **Communication:** Our developers and functional experts are available on **Slack** to answer questions and guide you through the process. Click [here](https://join.slack.com/t/skatteetaten/shared_invite/zt-2yvnsfetg-yuDEBJkcuj5n8KSyZi9yBg) to request access. We recommend using a Slack account linked to your workplace, and including your organisation name in your display name, for example, "Ola Nordmann (Tax Administration)".

3. **System access:** To integrate with our services, you’ll need to set up access via Maskinporten using a system user. Follow the setup guide [here](../om/systembruker.md. You’ll need information about the Maskinporten scope and Altinn resource, which you’ll find in the supporting documents for each service.

4. **Integration with the test environment:** Follow the supporting documents for each service to set up integration with our test environment. You’ll find technical specifications and links to **SwaggerHub** for detailed API information. The test environment only accepts synthetic data – see the test tab for each service for more details.

5. **Testing:** We strongly recommend verifying all parts of the integration in the test environment well before  using the services in production.

## New APIs for reestablishing Altinn services

The following APIs are currently available or planned:

| API                                                                                                                                     | Test                | Produksjon    |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------------|
| [Innrapportering aksjesparekonto API](../api/innrapportering-aksjesparekonto.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering aksjonaerregisteroppgave API (RF-1086)](../api/innrapportering-aksjonaerregisteroppgave.md)                            | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering betalinger naeringsdrivende API](../api/innrapportering-betalingernaeringsdrivende.md)                                 | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering boligsameie API](../api/innrapportering-boligsameie.md)                                                                | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering boligselskap API](../api/innrapportering-boligselskap.md)                                                              | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering BSU API](../api/innrapportering-bsu.md)                                                                                | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering drosjetjenester API](../api/innrapportering-drosjetjenester.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering fagforeningskontingent API](../api/innrapportering-fagforeningskontingent.md)                                          | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering finansprodukter API](../api/innrapportering-finansprodukter.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering fondskonto API](../api/innrapportering-fondskonto.md)                                                                  | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering gaver til frivillige API](../api/innrapportering-gavertilfrivillige.md)                                                | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering godtgjøring til opphaver til åndsverk API](../api/innrapportering-aandsverk.md)                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering individuelle_pensjonsordninger API](../api/innrapportering-individuellepensjonsordninger.md)                           | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering innskudd utlaan renter API](../api/innrapportering-innskuddutlaanrenter.md)                                            | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering internasjonal rapportering API](../api/innrapportering-internasjonalrapportering.md)                                   | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - egg API](../api/innrapportering-egg.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - fisk API](../api/innrapportering-fisk.md)                                                      | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - frukt, bær, poteter og grønnsaker (jord- og hagebruk) API](../api/innrapportering-jordbruk.md) | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - korn API](../api/innrapportering-korn.md)                                                      | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - melk API](../api/innrapportering-melk.md)                                                      | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - slakt API](../api/innrapportering-slakt.md)                                                    | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering kjøp fra primærnæring - toemmer API](../api/innrapportering-toemmer.md)                                                | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering livsforsikringer API](../api/innrapportering-livsforsikring.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering overskuddsstrøm API](../api/innrapportering-overskuddsstroem.md)                                                       | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering pass og stell av barn API](../api/innrapportering-passogstell.md)                                                      | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering skadeforsikring API](../api/innrapportering-skadeforsikring.md)                                                        | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering skattefrie utbetalinger API](../api/innrapportering-skattefrieutbetalinger.md)                                         | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering skattepliktig kundeutbytte API](../api/innrapportering-skattepliktigkundeutbytte.md)                                   | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering tilskudd API](../api/innrapportering-tilskudd.md)                                                                      | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering tilskudd, erstatning mv. innen primærnæringene API](../api/innrapportering-tilskudd-prim.md)                           | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering verdipapirfond API](../api/innrapportering-verdipapirfond.md)                                                          | :white_check_mark:  | Scheduled for Q4 |
| [Innrapportering verdipapirfondshistorikk API](../api/innrapportering-verdipapirfondshistorikk.md)                                      | :white_check_mark:  | Scheduled for Q4 |


