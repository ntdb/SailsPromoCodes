# Sails Promo Codes

A simple promotional code API built with Sails JS

## Setup

#### Install Sails

    npm -g install sails

#### Setup MongoDB on OSX

[http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

#### Create MongoDB directories

From the project root: `mkdir mongo && mkdir mongo/mongo_data`

#### Start mongod

From the project root: `mongod --dbpath mongo/mongo_data`

#### Install all dependencies

    npm install

#### Start the app

From the project root: `sails lift`

## Using the app

#### Generate a new promo code

    http://localhost:1337/code/generate?description=One%20free%20beer

#### Check the validity and description of a promo code

    http://localhost:1337/code/check?code=5RA4-LTHV-YX05

#### Redeem a promo code

    http://localhost:1337/code/redeem?code=5RA4-LTHV-YX05