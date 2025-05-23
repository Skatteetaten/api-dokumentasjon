---
title: Utleggsbegjæring API
slug: /api/utleggsbegjaering
folder: api
sidebar: mydoc_sidebar
datatable: true
tags: [API, Innkreving]
keywords: [utleggsbegjaering, innkreving]
last_updated: Apr 11, 2025
hide_table_of_contents: true
---

<Summary>English summary for Utleggsbegjaering API.</Summary>

<Tabs underline={true}>
<TabItem headerText="About the service" itemKey="itemKey-1" default>
The target audience includes current debt collection systems, municipalities, and other system providers.
If you wish to integrate the Utleggsbegjæring and prøving service into your system, or if you have any related questions, please contact: fremtidensinnkreving@skatteetaten.no.

The diagram below illustrates the overall services the Norwegian Tax Administration will offer for the receipt and assessment of Utleggsbegjæring. Please note that the diagram represents a target state, and not all services shown have been implemented yet. Additional services not included in the diagram may also be introduced in the future 


[![Informasjonsmodell](../../../../../static/download/Utleggsbegjaering_oversikt.png)](../../../../static/download/Utleggsbegjaering_oversikt.png)


For information about the services see:

* [Sikkerhetsmekansimer](../../../../../docs/om/sikkerhet.md)
* [Systembruker](../../../../../docs/om/systembruker.md)
* [Feilhåndtering](../../../../../docs/om/feil.md)
* [Versjonering](../../../../../docs/om/versjoner.md)
* [Teknisk spesifikasjon](../../../../../docs/om/tekniskspesifikasjon.md)

### Altinn Dialogue gateway
Suppliers are not required to integrate with Dialogporten, either during the pilot phase or in full production. It will be sufficient to use only the API endpoints.
However, through Dialogporten, we will offer an event notification service that alerts users when new messages from the Norwegian Tax Administration are available—such as requests to correct a previously submitted enforcement request.
If you choose not to use the notification service, you must regularly check for new messages by polling the agency’s API.

### Follow up and support
During the testing phase, we will provide support to system providers throughout development and testing.
More information will be made available here.

In the meantime, please contact: fremtidensinnkreving@skatteetaten.no.

## Scope

The following scope is to be used when authenticating in Maskinporten: `skatteetaten:utleggsbegjaering`

## Delegation

Tilgang til dette API-et kan delegeres i Altinn, f.eks. dersom leverandør benyttes for den tekniske oppkoblingen. Søk
opp følgende tjeneste i Altinn for å delegere tilgangen: `Utleggstrekkbegjæring API - På vegne av`

## Technical specification

URL-er til API-et, beskrivelsen av parameterne, endepunkter og respons ligger
i [Open API spesifikasjonen](https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-app) på SwaggerHub.

## Data catalogue

This API is currently not available in the data catalogue
 
## Access to the service
Connection to the Tax Administration's test environment is done via Maskinporten. To obtain a token from Maskinporten, the debt collection system must use its enterprise certificate to specify which Organisasjonsnummer it represents. This organisasjonsnummer  must be approved by the Tax Administration.

To use the services for submitting Utleggsbegjæring, the following scope must be specified during authentication with Maskinporten: skatteetaten:utleggsbegjaering
The API supports two authentication methods via Maskinporten, as described below

### Option 1 – System Provider as Submitter
If the system provider only submits utleggsbegjæring on behalf of their own organization, classic authentication via Maskinporten can be used. More information is available here.

### Option 2 – Systembruker
If the system provider wants to offer functionality where another organization (a customer of the system provider) uses the system to submit utleggsbegjæringer, Altinn's new functionality for Systembruker must be used. More information can be found in Altinn System User for SBS and the System User Roadmap.
In order to use Systembruker functionality, the system provider must register in Maskinporten and the Altinn test environment.

[Read about Systembruker here](https://skatteetaten.github.io/api-dokumentasjon/om/systembruker)

### Test setup
Use any fictional organizations from Tenor as the submitter of the utleggsbegjæring.

### Option 1 - Testing with System Provider as Submitter
When the system provider is the submitter, any fictional organizations in Tenor can be used.

### Option 2 - Testing with System User
The selected organization in Tenor (representing a test debt collection company) must approve that its business system is allowed to use the resource/service "Submission and follow-up of enforcement requests" on behalf of the company.
A Systembruker is then created, linking the user, system, provider, and API.

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

```
```

### Example of respons

</TabItem>
<TabItem headerText="Error codes" itemKey="itemKey-4">

See separat page (Norwegian) for general information concerning [feilhåndtering i tjenestene](../om/feil.md).

## Error codes
The table below shows an overview of specific error codes that may be produced. The error message may vary even if the same error code is returned. This is done in order to provide as precise a description as possible.

| Errorcode          | HTTP Status code | Error description                                               |
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
<TabItem headerText="Information modell" itemKey="itemKey-5">

Thi is the entire information modell Utleggsbegjæring

[![Informasjonsmodell](../../../../../static/download/informasjonsmodell-utleggsbegjaering.png)](../../../../static/download/informasjonsmodell-utleggsbegjaering.png)

</TabItem>
<TabItem headerText="Test" itemKey="itemKey-6">

## Testing
### Requirements for trial run
System providers are responsible for conducting their own testing. The focus should be on ensuring that the validation and submission services function as expected. The project team will assist with troubleshooting, error correction (if needed), and follow-up on cases submitted to the test environment.

### Test Environment and Test Data
System providers must use test environments that contain only synthetic data. Test data from Syntetisk Norge must be used and retrieved using Tenor Test Data Search for the messages submitted. Attachments must also contain only synthetic test data. A user guide for Tenor Test Data Search is available. Connection to the Tax Administration's test environment is established via Maskinporten.
An example of an enforcement request that follows the information model is provided under Information Models.

The Tax Administration’s test environment is generally available 24/7, but technical support or environment restarts cannot be expected outside normal business hours (08:00–15:45 on weekdays). The environment may also be unavailable during evenings and weekends due to maintenance.

The URL for the test environment is: https://api-test.sits.no/api/utleggsbegjaering/v1



</TabItem>
</Tabs>
