# AppliHakathon2019
To participate in the AppliTool Hakathon 2019
Steps to Run this suite:


1. git pull this repo @ https://github.com/maggieraj/AppliHakathon2019.git
2. perform npm install on command line. This will install cypress and applitool sdk both.
    Tools Used:
    •	Cypress
    •	Visual Studio 1.40.2(user Setup)
    •	node-v10.15.1-x64.msi
    •	Demo web link - https://demo.applitools.com/hackathon.html & https://demo.applitools.com/hackathonV2.html
    •	Applitool key - ApplicationID=55c92734-d682-4d71-983e-d6ec3f16059f
    •	AppliTool Test Results: https://eyes.applitools.com/app/test-results/00000251827540528432/?accountId=KnMm59wV9k_lN4jNwdRX2w~~

3. Then open cypress runner by npx cypress run.
4. From the runner window click on Traditional.js and see the execution.
5. Then run AppliVisualAI.js from the window.
Importan note while executing: In Traditional coding 56 lines of code been developed.(sorting algorithm , compare of the chart for vairous years. line of code will exceed beyond 500 lines of code)
With Cypress been used, we get the  functional call direct with the rigt id to be picked up for the particular object element type.
On the Hakathon code we have 52 lines of code with the traditional along with the appli APi's to call.
Adding the appli API's, reduced in the above additional coding required for about 500 lines of code.
Development effort and maintenance reduced using the Visual Appli AI.


How to run test from CLI:
Traditional Test:
npx cypress run --spec "cypress/integration/Traditional.js"

Appli Hakathon2019 Visual AI Test:
npx cypress run --spec "cypress/integration/AppliVisualAI.js"

Two test scripts file locaton=>
1. cypress/integration/Traditional.js
2. cypress/integration/AppliVisualAI.js
