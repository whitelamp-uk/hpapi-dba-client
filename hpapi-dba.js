/* Copyright 2018 Whitelamp http://www.whitelamp.com/ */

export class HpapiDba {

    constructor () {
    }

    init (api) {
        console.log ('Greetings human; this is HpapiDba speaking');
        this.api        = api;
        this.vendor     = 'whitelamp-uk';
        this.package    = 'hpapi-dba-server';
        console.log ('Client configuration:');
        console.table (this.api.cfg);
    }

    handlebars (template) {
alert ('HpapiDba.handlebars()');
        this.template   = handlebars;
    }

    sayHello ( ) {
alert ('Hello. There -  I\'ve said it!');
    }

}

