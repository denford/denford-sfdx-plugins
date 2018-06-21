import {core, SfdxCommand, flags} from '@salesforce/command';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('denford', 'namedcredentials');

export default class NamedCredentials extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx denford:envar:namedcredentials -u username -f namedCredentialsFullName -e namedCredentialEndpoint
  Successfully updated NamedCredential: namedCredentialsFullName
  `,
  `$ sfdx denford:envar:namedcredentials -u username -f namedCredentialsFullName -e namedCredentialEndpoint --json
  {
    "status": 0,
    "result": {
      "fullName": "namedCredentialsFullName",
      "success": true
    }
  }
  `
  ];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    fullname: flags.string({char: 'f', description: messages.getMessage('fullnameFlagDescription')}),
    endpoint: flags.string({char: 'e', description: messages.getMessage('endpointFlagDescription')})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<any> { // tslint:disable-line:no-any

    // this.org is guaranteed because requiresUsername=true, as opposed to supportsUsername
    const conn = this.org.getConnection();

    // call the metadata api to read the existing named credential
    const fullNames = [ this.flags.fullname ];
    const metadataRead = await conn.metadata.read('NamedCredential', fullNames);
    interface NamedCredentialMetadata {
      fullName: string;
      label: string;
      endpoint: string;
      principalType: string;
      protocol: string;
      username: string;
    }
    const metadata = <NamedCredentialMetadata> metadataRead;

    // todo - test that there were no errors here, that the read worked, that it existed

    // update the endpoint to the supplied value
    metadata.endpoint = this.flags.endpoint;

    // call the metadata api to update the named credential
    const metadataUpdate = await conn.metadata.update('NamedCredential', metadata);
    interface NamedCredentialMetadataUpateResponse {
      fullName: string;
      success: boolean;
    }
    const metadataUpdateResponse = <NamedCredentialMetadataUpateResponse> metadataUpdate;

    // output and wrap-up
    if (metadataUpdateResponse.success === true) {
      this.ux.log("Successfully updated NamedCredential:", metadataUpdateResponse.fullName);
    }
    else {
      this.ux.log("Failed to update NamedCredential:", metadataUpdateResponse.fullName);
    }

    // Return an object to be displayed with --json
    return metadataUpdateResponse;
  }
}
