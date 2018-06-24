import {core, SfdxCommand, flags} from '@salesforce/command';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('denford-sfdx-plugins', 'customlabels');

export default class CustomLabels extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx denford:envar:customlabels -u username -f customLabelFullName -l customLabelValue
  Successfully updated NamedCredential: customLabelFullName
  `,
  `$ sfdx denford:envar:customLabel -u username -f customLabelFullName -l customLabelValue --json
  {
    "status": 0,
    "result": {
      "fullName": "customLabelFullName",
      "success": true
    }
  }
  `
  ];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    fullname: flags.string({char: 'f', description: messages.getMessage('fullnameFlagDescription')}),
    labelvalue: flags.string({char: 'l', description: messages.getMessage('valueFlagDescription')})
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
    const metadataType = 'CustomLabel';

    // call the metadata api to read the existing custom label
    const fullNames = [ this.flags.fullname ];
    const metadataRead = await conn.metadata.read(metadataType, fullNames);
    interface CustomLabelMetadata {
      fullName: string;
      categories: string;
      language: string;
      protected: string;
      shortDescription: string;
      value: string;
    }
    const metadata = <CustomLabelMetadata> metadataRead;

    // todo - test that there were no errors here, that the read worked, that it existed

    // update the endpoint to the supplied value
    metadata.value = this.flags.labelvalue;

    // call the metadata api to update the named credential
    const metadataUpdate = await conn.metadata.update(metadataType, metadata);
    interface CustomLabelMetadataUpateResponse {
      fullName: string;
      success: boolean;
    }
    const metadataUpdateResponse = <CustomLabelMetadataUpateResponse> metadataUpdate;

    // output and wrap-up
    if (metadataUpdateResponse.success === true) {
      this.ux.log("Successfully updated CustomLabel:", metadataUpdateResponse.fullName);
    }
    else {
      this.ux.log("Failed to update CustomLabel:", metadataUpdateResponse.fullName);
    }

    // Return an object to be displayed with --json
    return metadataUpdateResponse;
  }
}
