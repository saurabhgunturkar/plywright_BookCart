#Playwright_BookCart

#Ci/Cd pipelines

Dev Env
- run the codes and unit tests locally nd push the code to github

Build Env
- checkout code, install dependencies, build the application, run unit tests
==============================================================================================
Test Env(During development)
- after build successful, app deployed to test env(docker, kubernetes, aws/gcp, internal IP or port)
- url e.g. http://test.app.com
- by considering this url, we can test the app with the testscripts during development
- seperate testing code repo, pipeline triggers automation code after deployment.
- run test across multiple browsers, perform different kinds of testing like smoke, regression, sanity, etc.
- generate report, after approval code is deployed to production



=======================================================================================
Stage Env(Pre-Prod/final QA)
- pre-prod env(getting final approval to QA)
- involve QA + prod team + customers; sometimes UAT also perform
- Real time data used
- perform final sanity, smoke and UAT

==================================================================================
Post-Prod Env
- perform sanity, smoke

===================================================

When to do sanity???
- only run/test that particular changes to ensure the funcationlity correctly works without any defect.
- after new build is deployed to test, before running full regression nd e2e
- after quick bug fix, before running all test
- before prod release
- post prod release