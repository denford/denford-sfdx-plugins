# denford-sfdx-plugins

Plugins for the Salesforce CLI built by Mark Denford.

## Installation into the Salesforce CLI

Install the plugin by cloning this repo and linking it using this command:

```sh-session
$ sfdx plugins:link
```

You can check a successful installation with `sfdx plugins`. Updates are applied when executing `sfdx plugins:update`.

<!-- install -->

## Commands

<!-- commands -->
* [`sfdx denford:envar:namedcredentials`](#sfdx-denfordenvarnamedcredentials)

## `sfdx denford:envar:namedcredentials`

Sets named credentials endpoint

```
USAGE
  $ sfdx denford:envar:namedcredentials

OPTIONS
  -e, --endpoint=endpoint                          endpoint of the named credential
  -f, --fullname=fullname                          fullname of the named credential
  -u, --targetusername=targetusername              username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --apiversion=apiversion                          override the api version used for api requests made by this command
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx denford:envar:namedcredentials -u username -f namedCredentialsFullName -e namedCredentialEndpoint
     Successfully updated NamedCredential: namedCredentialsFullName
  
  $ sfdx denford:envar:namedcredentials -u username -f namedCredentialsFullName -e namedCredentialEndpoint --json
     {
       "status": 0,
       "result": {
         "fullName": "namedCredentialsFullName",
         "success": true
       }
     }
```
<!-- commandsstop -->
