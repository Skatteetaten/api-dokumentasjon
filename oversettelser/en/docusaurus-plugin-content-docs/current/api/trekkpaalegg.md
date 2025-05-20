---
title: Trekkpålegg API
slug: /api/trekkpaalegg
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Innkreving]
keywords: [trekkpålegg, innkreving]
last_updated: Apr 11, 2025
hide_table_of_contents: true
---

<Summary>English summary for Trekkpålegg API.</Summary>

<Tabs underline={true}>
<TabItem headerText="About the service" itemKey="itemKey-1" default>

This page describes a new interface between the IT systems of the Norwegian Tax Administration and liable parties/employers.
The target audience is developers and IT architects at system providers who deliver payroll and HR systems (or end-user systems) to employers. These systems are hereafter referred to as End-User Systems, abbreviated as SBS.

A new interface will be established to transmit withholding orders from the Tax Administration to employers with employees who are subject to wage garnishment.
This new interface will eventually replace the existing interface for withholding communication, but initially, it will be introduced alongside the current one. The new interface will first be available in a test environment, then in pilot projects, and finally in full production.

## Key features of the new interface
•	The interface is a machine-to-machine interface that transmits withholding orders from the Tax Administration to employers using SBS systems.
•	It follows a RESTful design and provides an API.
•	SBS systems must poll the interface to check for new withholding orders.
•	Eventually, a separate interface will be available, allowing SBS systems to receive notifications (events) when the Tax Administration issues a new withholding order to an employer.
•	SBS must present a token in the interface that contains the organization number of the liable employer.
•	The token is obtained by connecting to Maskinporten with a specified scope.
•	Withholding orders are delivered in JSON format.

For general informastion about the services; see pages (Norwegian) for:

* [Sikkerhetsmekansimer](../../../../../docs/om/sikkerhet.md)
* [Systembruker](../../../../../docs/om/systembruker.md)
* [Feilhåndtering](../../../../../docs/om/feil.md)
* [Versjonering](../../../../../docs/om/versjoner.md)
* [Teknisk spesifikasjon](../../../../../docs/om/tekniskspesifikasjon.md)

## Scope

The following scope is to be used when authenticating in Maskinporten: `skatteetaten:trekkpaalegg`

## Delegation

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Trekkpålegg API - På vegne av`

## Technical specification

The Norwegian Tax Administration provides an API to retrieve withholding orders.
The Open API specification is available here: [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/trekkpaalegg-app) on SwaggerHub.


## Trekkpålegg API
All URIs are relative to:
•	https://api-test.sits.no (test)
•	--- (production)

| Method             | HTTP Request     | Description                                                     |
|--------------------|------------------|-----------------------------------------------------------------|
| Get all active           | GET /api/trekkpaalegg/v1                              | Retrieve all current trekkpålegg for the liable party|
| Get version             | GET /api/trekkpaalegg/v1/trekkid/trekkversjon      | Retrieve a specific version of a trekkpålegg         |         
		
		
		

## Data catalog

This API is currently not in the common data catalog



</TabItem>
<TabItem headerText="Syllabus" itemKey="itemKey-2"> 

| Norwegian term          | English translation      | Description                                                    |
|-------------------------|---------------------------|----------------------------------------------------------------|
| Dialogporten            | The dialogue gateway      | Dialogporten is a national message distribution service in Norway that allows public agencies to send digital messages and notifications to individuals and organizations. It functions as a standardized interface for delivering messages across platforms like Altinn, Digital post to citizens, Digital post to businesses. |
| Maskinporten            | Machine-to-machine gateway | Maskinporten is a secure authentication and authorization mechanism used in Norway for system-to-system (machine-to-machine) communication between public and private sector systems. It issues tokens (OAuth 2.0) that allow systems to authenticate and access APIs on behalf of an organization, without involving a human user.|
| Namsmann                | Enforcement officer       | A public authority responsible for carrying out enforcement of claims, such as collecting unpaid debts or executing court orders. This can include wage garnishment, seizure of assets, evictions and enforcement of judgments. |
| Organisasjonsnummer     | Organisation number       | Nine-digit, information-free number that uniquely identifies entities in the Central Coordinating Register for Legal Entities (Enhetsregisteret). |
| Systembruker            | System user               | System User is a concept for API authentication. The system user is linked to the chosen system/system provider and assigned the necessary rights. |
| SBS                     | End user system           | A software solution used directly by organizations to manage specific business processes. |
| Syntetisk Norge/ Tenor  | Synthetic Norway          | A test data framework used in Norway for developing and testing digital solutions—especially those that interact with public sector systems—without using real personal data. Including a collection of synthetic (fake but realistic) people and organizations, national ID numbers, names, addresses, company info, etc.designed to mimic real-world scenarios while ensuring compliance with privacy regulations (e.g., GDPR). |
| Tvangsgrunnlag          | Base for execution        | Judgment, legal provision, promissory note, or other basis that allows a claim to be enforced. |
| Trekkpålegg             | Witholding order          | A formal order issued by a public authority requiring an employer or other payer to withhold a portion of an individual's income—typically wages or benefits—and transfer it to cover unpaid debts. |
| Trekkpliktig            | Subject to witholding     | An employer or entity that is legally obligated to withhold funds from an individual's salary and transfer it to the relevant authority (e.g., the Tax Administration). |
| Trekkmelding            | Garnishment message       | A trekkmelding is a digital message or data package that contains information about a wage garnishment order or similar withholding instruction. It is typically sent from the Norwegian Tax Administration to employers or their systems (SBS – end-user systems). |
| Utleggsbegjæring        | Request for Enforcement Proceedings | A formal request submitted to the namsmann (Enforcement Officer) to collect a debt by legal means, such as wage garnishment, seizure of assets and freezing of bank accounts. |


</TabItem>
<TabItem headerText="Examples" itemKey="itemKey-3"> 


### Example of request URL
'''
https://{env}/api/innkreving/kravogbetalinger/v1/finans/212201782/aapnekrav
'''
### Example of respons

### Example of request URL


### Example of respons

</TabItem>
<TabItem headerText="Error codes" itemKey="itemKey-4">

See separat page (Norwegian) for general information concerning [feilhåndtering i tjenestene](../om/feil.md).

## Error codes
The table below shows an overview of specific error codes that may be produced. The error message may vary even if the same error code is returned. This is done in order to provide as precise a description as possible.

| Error code          | HTTP Status code | Error description                                               |
|--------------------|------------------|-----------------------------------------------------------------|
| KB-001             | 500               | Unexpected error on the service                                |
| KB-002             | 500               | Unexpected error in an associated system                       |
| KB-003             | 404               | Unknown URL used                                               |
| KB-004             | 401               | Authentification error                                         |
| KB-005             | 403               | Error in connection with approval token                        |
| KB-006             | 400               | Error in connection with validation of input data              |
| KB-008             | 406               | Error in connection with data format. Only json eller xml is supported     |
| KB-009             | 404               | Unknown identifier                                             |
| DUPLIKAT_INNSENDING| Duplikat          | Duplicate submittal                                            |

</TabItem>
<TabItem headerText="Information model" itemKey="itemKey-5">

Bilde av informasjonsmodell.

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-6">

I første omgang er det test kun tilgjengelig for et utvalg leverandører som det er inngått avtale med og som skal være
med å pilotere løsningene.

## Tenor testdatasøk

Det finnes pt. ikke søk i [Tenor](../test/tenor.md) for denne tjenesten, og testdata er derfor listet her.
Men egenskaper ved enhetene som har testdata kan søkes frem i Tenor.

## Testdata

Følgende enkeltmannsforetak (ENK) er tilgjengelige for denne tjenesten i Skatteetatens testmiljø for eksterne.
Vær oppmerksom på at det er et levende testdatasett som kan endre seg i løpet av testperioden. Ta kontakt dersom du har
behov for ytterligere testdata.

Obs. regnskapssystemer som tester vil i Test kunne gjøre oppslag på alle testvirksomheter, selv om de i pilotperioden kun kan gjøre oppslag for egen virksomhet i Prod.


</TabItem>
</Tabs>
