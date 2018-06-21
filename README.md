# sfdx-plugin

A plugin for the Salesforce CLI built by Mark Denford.

## Installation into the Salesforce CLI

Install the plugin into your Salesforce CLI using this command:

```sh-session
$ sfdx plugins:install @denford/denford-sfdx-plugins
```

You can check a successful installation with `sfdx plugins`. Updates are applied when executing `sfdx plugins:update`.

<!-- install -->

## Commands

<!-- commands -->

- [sfdx denford:envar:namedcredentials](#sfdx-denfordenvarnamedcredentials)

## sfdx denford:envar:namedcredentials

Sets the endpoint of a named credential

```
USAGE
  $ denford:envar:namedcredentials

OPTIONS
  -a, --apiversion=apiversion                      specify the API version (defaults to API version of your DevHub)
  -h, --help                                       show CLI help
  -v, --targetdevhubusername=targetdevhubusername  username or alias for the dev hub org; overrides default dev hub org
  --json                                           format output as json
  --loglevel=(trace|debug|info|warn|error|fatal)   logging level for this command invocation

EXAMPLES
  $ sfdx muenzpraeger:source:api:set
       Reading content of package directories
       45 files have been set to API version 42.0.

  $ sfdx muenzpraeger:source:api:set -a 41.0
       Reading content of package directories
       45 files have been set to API version 41.0.
```


<!-- commandsstop -->