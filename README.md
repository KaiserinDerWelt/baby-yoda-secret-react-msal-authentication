# Baby-yoda-secret-react-msal-authentication
Microsoft MSAL Authentication to Visit the Cutest In The Galaxy

The inspiration to create this repo was coming from  the need to document the steps to use MSAL.js library from
Microsoft due to a lack of documentation to use MSAL.js with react applications to set an  authentication layer to protect content and make it accesible only  to people registered
in a specific Azure Active Directory (AAD).

This project consist in  3 parts: 

- App Registration in Azure Portal.
- Run the application, authenticate and "earn" or not your  visit  to Arvala-7 and  see "The Cutest in the Galaxy".
- Generation and modification of an .env.local file to set Client_ID and  Tenant_ID.

## Important
All reserved rights to Disney & Lucas Films and related subsidiaries for the STAR WARS characters,graphics, characters and any other related material involving "The Child". 

## Collaboration*
Me, Mariana A. KaiserinDerWelt (@KaiserinDer) I was in charge of the backend end & product design to transport the user from Gaia to Arvala-7.

I want to thank Derya Tanrıverdi (@Derya_T88) Full Stack Software Engineer  and Enthusiastic CSS Artist from Flatiron School in  New York City from her amazing collaboration by building from scratch "The Child - Baby Yoda" in HTML-CSS  lend it to this Fan Dev - Art Project.

## Prerequisites
- Node.
- React.
- Azure Subscription.

## Azure Subscription
To use this application you gonna need to have an Azure subscription, you can get a free subscritption. Please follow the steps described [here](https://azure.microsoft.com/en-us/free/search/?&ef_id=CjwKCAjwmv-DBhAMEiwA7xYrd1hmMfFN8i542vQmJdaYGflXHBMjQ2fHkxLy3pYdnGSlbRg7kGzxexoCZZgQAvD_BwE:G:s&OCID=AID2100073_SEM_CjwKCAjwmv-DBhAMEiwA7xYrd1hmMfFN8i542vQmJdaYGflXHBMjQ2fHkxLy3pYdnGSlbRg7kGzxexoCZZgQAvD_BwE:G:s)

## App Registration on Azure
1. Surf on the Azure Portal and choose "App Registration".
2. Select " + New app registration".
3. Name your application.
4. Choose "Only accounts of this organization".
5. Set the redirection URL as following:
Type: Web  http://localhost:3000 

- This is the URL where you gonna be hosting your content
for testing purposes you can use localhost to render the content.
In the deployment stage you would have to host your react application in a fully qualified domain and set the URL in the 
authentication tab of your app registration to be able to retrieve the content.
6. Enable the checkboxes for: ID-Token / Access Tokens and save the settings.

## Install node packages and run the app
Clone this repo and follow up by running the next commands:
- Run npm install
- Run npm start

The application gonna be running on port 3000

## Add .Env.local to your root directory
Simply create a file called .env.local in the root directory
and add the following variables:

   REACT_APP_MSFT_CLIENTID= YOUR_CLIENT_ID
   REACT_APP_MSFT_AUTHORITY= "https://login.microsoftonline.com/YOUR_TENANT_ID"

- Pointing the variables above gonna allow you to authenticate in the AAD where your app was registered. If your email address is not registered in AAD, you can not see the content because is protected by the authentication layer.

## That's it, is all you have to do to visit Baby Yoda

As a bonus, if you run this application in Edge browser, you will enjoy the Star Wars Symphony while you get your admission to travel to Arvala-7


Thanks for your time, this repo was created for educational purposes and  JUST FOR FUN!

Cheers!!
-KaiserinDerWelt