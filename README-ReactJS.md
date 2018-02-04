# Building a Health Assistent-bot 
## What is it?
This project was done as a part Hasura Product Development Fellowship(HPDF).
It a simple Health assistent-bot made using Reactjs as frontent , Nodejs-Express as backend and  integrates with wit.ai API and implements the features described below.

Entities used :

Intent - it extracts user intent from his query

Condition - it extracts the medical condition such as fever,cold,malaria etc.

Drug - it extracts the name of drug mentioned in user query such as aspirin,tetracyclines,etc.
## How it works 
#### Workfolw Overview
When a user type  any Query related to health issues in input box and click on ask button it 
provides the user with the appropriate answer available for that query . 
#### Internal Working
when a user post a query then as soon as he click ask button the state of variable (in which query is stored ) gets updated
and send as input to wit.ai API where intent behind the text is extracted, analysed and the appropriate response is displayed.
 Intent			Response
1. findMedicine - It fetches drug for value of condition entity
2. findCondition - It fetches medical condition for value of drug entity
3. greeting
4. bye
## What does it use?
1. [Hasura](https://hasura.io)
2.[Wit.ai API](https://wit.ai/)

## How do I use it in my  workspace?

1. Install [hasura CLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)

2. Then open git-bash and login/register by command:
```
$hasura login
```
This command will open up the browser and allow you to register with a new account (or login to your existing account).
Find complete documentation [here](https://docs.hasura.io/0.15/manual/tutorial/2-hasura-project.html).
3.Then run
```
$  hasura quickstart hasura/hello-react

```
 or u can clone and deploy it from [here](https://hasura.io/hub/project/hasura/hello-react/deployment-instructions) .
 4.Then 

