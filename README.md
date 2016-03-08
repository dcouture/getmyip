# Get My IP

A project in node.js and express to return the requestors client ip address.

## Getting Started

### Prerequisities

node.js (tested on 4.3.2)
npm

### Local development environment:

Clone getmyip repository:
git clone https://github.com/dcouture/getmyip
cd getmyip
npm install

NODE_ENV=development npm start
or
NODE_ENV=production npm start

Application is available on http://<ipaddress>:8081

## Running the tests

NODE_ENV=development npm test
or
NODE_ENV=production npm test

```
Tests:
Positive test for home page available
Negative test when home page is unavaialble
Health page test
```

## Automated Elastic Beanstalk Deployment

### Prerequisities

Working AWS Elastic Beanstalk CLI http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html
node.js (tested on 4.3.2)
npm

### Elastic Beanstalk Deployment

Default global application setup: getmyip/.elasticbeanstalk\config.yml can be adjusted as desired.
Default environment setup: getmyip/.elasticbeanstalk\getmyip-<env>.yml can be adjusted as desired.

####Create Application
eb init <application_name> --platform <platform>

```
Ex:
eb init getmyip --platform node.js
```

####Create environment
eb create <enironment> --cname <cname-prefix> --cfg <environment config file>

```
Ex:
eb create getmyip-prod --cname ipcow --cfg getmyip-prod
```
Application is available on http://<cname-prefix>.<region>..elasticbeanstalk.com 

## Authors

* **Don Couture** - *Initial Commits*
