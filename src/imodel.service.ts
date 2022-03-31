import { IModelsClient } from "@itwin/imodels-client-management";
import ITwinAuthService from "./auth.service";


export default class IModelService {

    public static async GetModelInfo(iModelId: string) {

        const authCallback = await ITwinAuthService.getAccess();
        if (authCallback) {
            // Get changesets
            const iModelsClient: IModelsClient = new IModelsClient();
            return await iModelsClient?.iModels.getSingle({
                authorization: authCallback,
                iModelId: iModelId,
            });
        }
    }
}