class TOKEN {
/*
    EXPORT_ACCESSS_TOKEN =  ():any => {
        if (Cypress.env('ENVIRONMENT') == 'uat'){
            return cy.request({

                method  : 'POST',
                url     : Cypress.env('ICON_EXPORT_TOKEN_URL'),
                headers : {
                    'Content-Type'  : 'application/x-www-form-urlencoded'
                },
                body: {
                    
                    'audience'      :   `https://incidents.${Cypress.env('ENVIRONMENT')}.rfs.nsw.gov.au/`,
                    'client_id'     :   Cypress.env('ICON_TOKEN_CLIENT_ID_UAT'),
                    'client_secret' :   Cypress.env('ICON_TOKEN_CLIENT_SECRET_UAT'),
                    'grant_type'    :   'client_credentials'
                }               
            
            })
        } */

        EXPORT_ACCESSS_TOKEN =  ():any => {
            if (Cypress.env('ENVIRONMENT') == 'uat'){
                return cy.request({
    
                    method  : 'POST',
                    url     : Cypress.env('ICON_EXPORT_TOKEN_URL'),
                    headers : {
                        'Content-Type'  : 'application/x-www-form-urlencoded',
                        'Authorization' : 'Basic SWNvbkFkYXB0ZXJVQVQ6STJvQV9wYy12a1U1ZklZU1lEZHo5akV1b3BVVWoyTXpKSklQMEFvbA=='
                    },
                    body: {                       
                        
                        'grant_type'    :   'client_credentials',
                        'scope'         :   'm2m'
                    }               
                
                })
            } 
        
        if (Cypress.env('ENVIRONMENT') == 'dev') {  
            return cy.request({

                method  : 'POST',
                url     : Cypress.env('ICON_EXPORT_TOKEN_URL'),
                headers : {
                    'Content-Type'  : 'application/x-www-form-urlencoded'
                },
                body: {
                    
                    'audience'      :   `https://incidents.${Cypress.env('ENVIRONMENT')}.rfs.nsw.gov.au/`,
                    'client_id'     :   Cypress.env('ICON_TOKEN_CLIENT_ID_DEV'),
                    'client_secret' :   Cypress.env('ICON_TOKEN_CLIENT_SECRET_DEV'),
                    'grant_type'    :   'client_credentials'
                }
            })
        
        }
    }

}

export default TOKEN


