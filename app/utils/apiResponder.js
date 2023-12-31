class ApiResponder
{
    static successResponse($data, $message = 'OK, i dont know how but its worked', $code, $requestBody = null)
    {
        return {
            'message' : $message,
            'data' : $data,
            'code' : $code,
            'error' : false,
            'requestBody' : $requestBody
        };
    }

    static errorResponse($message, $code, $requestBody = null)
    {
        return {
            'message' : $message,
            'code' : $code,
            'error' : true,
            'requestBody' : $requestBody
        };
    }
}
/*const data = {
    "name": "John",
    "age": 34,
    "hobby": {
    "reading" : true,
    },
    "status" : ["JavaScript", "HTML", "CSS"]
}*/
module.exports = ApiResponder;