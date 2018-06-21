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
* [`denford-sfdx-plugins denford:envar:namedcredentials`](#denford-sfdx-plugins-denfordenvarnamedcredentials)
* [`denford-sfdx-plugins hello:org [FILE]`](#denford-sfdx-plugins-helloorg-file)

## `denford-sfdx-plugins denford:envar:namedcredentials`

Sets named credentials endpoint

```
USAGE
  $ denford-sfdx-plugins denford:envar:namedcredentials

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

_See code: [src/commands/denford/envar/namedcredentials.ts](https://github.com/denford/denford-sfdx-plugins/blob/v0.0.1/src/commands/denford/envar/namedcredentials.ts)_

## `denford-sfdx-plugins hello:org [FILE]`

Prints a greeting and your org id(s)!

```
USAGE
  $ denford-sfdx-plugins hello:org [FILE]

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

_See code: [src/commands/hello/org.ts](https://github.com/denford/denford-sfdx-plugins/blob/v0.0.1/src/commands/hello/org.ts)_
<!-- commandsstop -->
