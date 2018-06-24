# denford-sfdx-plugins

Plugins for the Salesforce CLI built by Mark Denford.

## Installation into the Salesforce CLI

Install the plugin by cloning this repo and linking it using this command:

```sh-session
$ sfdx plugins:link <folder>
```

You can check a successful installation with `sfdx plugins`.

<!-- install -->

## Commands

<!-- commands -->
* [`sfdx denford:envar:customlabels`](#sfdx-denfordenvarcustomlabels)
* [`sfdx denford:envar:namedcredentials`](#sfdx-denfordenvarnamedcredentials)
* [`sfdx hello:org [FILE]`](#sfdx-helloorg-file)

## `sfdx denford:envar:customlabels`

Sets Custom Label value

```
USAGE
  $ sfdx denford:envar:customlabels

OPTIONS
  -f, --fullname=fullname                          fullname of the Custom Label
  -l, --labelvalue=labelvalue                      value of the Custom Label
  -u, --targetusername=targetusername              username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --apiversion=apiversion                          override the api version used for api requests made by this command
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx denford:envar:customlabels -u username -f customLabelFullName -l customLabelValue
     Successfully updated NamedCredential: customLabelFullName
  
  $ sfdx denford:envar:customLabel -u username -f customLabelFullName -l customLabelValue --json
     {
       "status": 0,
       "result": {
         "fullName": "customLabelFullName",
         "success": true
       }
     }
```

_See code: [src/commands/denford/envar/customlabels.ts](https://github.com/denford/denford-sfdx-plugins/blob/v0.0.2/src/commands/denford/envar/customlabels.ts)_

## `sfdx denford:envar:namedcredentials`

Sets Named Credentials endpoint

```
USAGE
  $ sfdx denford:envar:namedcredentials

OPTIONS
  -e, --endpoint=endpoint                          endpoint of the Named Credential
  -f, --fullname=fullname                          fullname of the Named Credential
  -u, --targetusername=targetusername              username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --apiversion=apiversion                          override the api version used for api requests made by this command
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx denford:envar:namedcredentials -u username -f namedCredentialFullName -e namedCredentialEndpoint
     Successfully updated NamedCredential: namedCredentialFullName
  
  $ sfdx denford:envar:namedcredentials -u username -f namedCredentialFullName -e namedCredentialEndpoint --json
     {
       "status": 0,
       "result": {
         "fullName": "namedCredentialFullName",
         "success": true
       }
     }
```

_See code: [src/commands/denford/envar/namedcredentials.ts](https://github.com/denford/denford-sfdx-plugins/blob/v0.0.2/src/commands/denford/envar/namedcredentials.ts)_

## `sfdx hello:org [FILE]`

Prints a greeting and your org id(s)!

```
USAGE
  $ sfdx hello:org [FILE]

OPTIONS
  -f, --force                                      example boolean flag
  -n, --name=name                                  name to print
  -u, --targetusername=targetusername              username or alias for the target org; overrides default target org
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --apiversion=apiversion                          override the api version used for api requests made by this command
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx hello:org --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
     Hello world! This is org: MyOrg and I will be around until Tue Mar 20 2018!
     My hub org id is: 00Dxx000000001234
  
  $ sfdx hello:org --name myname --targetusername myOrg@example.com
     Hello myname! This is org: MyOrg and I will be around until Tue Mar 20 2018!
```

_See code: [src/commands/hello/org.ts](https://github.com/denford/denford-sfdx-plugins/blob/v0.0.2/src/commands/hello/org.ts)_
<!-- commandsstop -->
