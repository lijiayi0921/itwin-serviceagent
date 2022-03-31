# Service client connection error demo

## Initial error

Error: Authorization error: token_endpoint must be configured on the issuer
    at ServiceAuthorizationClient.generateAccessToken     
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Function.ITwinAuthService.getAccess (MY_PATH\server\build\services\itwin\auth.service.js:24:25)
    at async Function.GetModelInfo (MY_PATH\server\build\services\itwin\imodel.service.js:17:30)
    at .........

## Error encountered in this demo
  
Unauthorized: The user is unauthorized. Please provide valid authentication credentials.
    at AxiosRestClient.parse [as _parseErrorFunc] (D:\Dev\iTwin\itwin-serviceagent\node_modules\@itwin\imodels-client-management\lib\base\IModelsErrorParser.js:31:20)
    at AxiosRestClient.handleError (D:\Dev\iTwin\itwin-serviceagent\node_modules\@itwin\imodels-client-management\lib\base\rest\AxiosRestClient.js:52:36)
    at D:\Dev\iTwin\itwin-serviceagent\node_modules\@itwin\imodels-client-management\lib\base\rest\AxiosRestClient.js:21:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async IModelOperations.getSingle (D:\Dev\iTwin\itwin-serviceagent\node_modules\@itwin\imodels-client-management\lib\operations\imodel\IModelOperations.js:47:26)
    at async Function.GetModelInfo (D:\Dev\iTwin\itwin-serviceagent\lib\imodel.service.js:18:20)
    at async D:\Dev\iTwin\itwin-serviceagent\lib\main.js:12:27 {
  code: 'Unauthorized',
  details: undefined
} Unhandled exception thrown in my-agent
  
  
