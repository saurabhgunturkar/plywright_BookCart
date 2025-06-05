import { Given, Then, When } from '@cucumber/cucumber';

Given('the user is on the login page', async () => {
    console.log("given printed")
  });

  When('the user enters valid credentials', async () => {
    console.log("when printed")
  });


  Then('the user should be redirected to the dashboard', async () => {     
    console.log("then printed")
  });