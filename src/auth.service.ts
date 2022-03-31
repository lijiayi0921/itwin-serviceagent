import { AuthorizationCallback } from "@itwin/imodels-client-management";
import { ServiceAuthorizationClient, ServiceAuthorizationClientConfiguration } from "@itwin/service-authorization";

export default class ITwinAuthService {

    private static _authConfig?: ServiceAuthorizationClientConfiguration;
    static get AuthConfig() {
        if (!ITwinAuthService._authConfig) {
            ITwinAuthService._authConfig = {
                clientId: process.env.ITWIN_CLIENT_ID ?? '',
                clientSecret: process.env.ITWIN_CLIENT_SECRET ?? '',
                scope: 'itwinjs imodelaccess:read',
                authority: process.env.ITWIN_AUTH_AUTHORITY ?? '',
            };
        }
        return ITwinAuthService._authConfig;
    }

    public static getAccess = async (): Promise<AuthorizationCallback | null> => {
        const authClient = new ServiceAuthorizationClient(ITwinAuthService.AuthConfig);

        const accessToken = await authClient.getAccessToken();
        const tokenWords = accessToken.split(' ');
        if (tokenWords.length == 2 && tokenWords[0].length > 0 && tokenWords[1].length > 0) {
            return async () => {
                console.log(tokenWords)
                return {
                    scheme: tokenWords[0],
                    token: tokenWords[1],
                };
            }
        }
        return null;
    }
}