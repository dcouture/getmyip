# Get My IP

A project in node.js and express to return the requestors client ip address.

# Getting Started

### Prerequisites

* node.js (tested on 4.3.2)
* npm

### Local development environment:

* git clone https://github.com/dcouture/getmyip
* cd getmyip
* npm install

Run the web application locally:  
NODE_ENV=development npm start  
or  
NODE_ENV=production npm start

Application is available on http://`<ipaddress>`:8081

## Running the tests

Run the unit tests locally:  
NODE_ENV=development npm test  
or  
NODE_ENV=production npm test

Tests:
```
Positive test for home page available
Negative test when a requested page is unavailable
Health page test
```

# Automated Elastic Beanstalk Deployment

### Prerequisites

* Working AWS Elastic Beanstalk CLI http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html
* node.js (tested on 4.3.2)
* npm

### Elastic Beanstalk Deployment

Default global application setup: getmyip/.elasticbeanstalk/config.yml can be adjusted as desired.  
Default environment setup: getmyip/.elasticbeanstalk/getmyip-`<env>` can be adjusted as desired.

####Clone the repo if necessary and checkout a branch if you do not want to deploy master.
* git clone https://github.com/dcouture/getmyip
* cd getmyip

####Create Application
eb init `<application_name>` --platform <platform>  

Example:
```
eb init getmyip --platform node.js
```

####Create environment
eb create `<environment>` --cname `<cname-prefix>` --cfg `<environment config file>`  

Example:

```
eb create getmyip-prod --cname ipcow --cfg getmyip-prod
```
Application is available on http://`<cname-prefix>`.`<region>`.elasticbeanstalk.com 

## Authors

* **Don Couture** - *Initial Commits*
