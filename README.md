# Function Starter
A Cosmic JS Function Starter

### Installation
1. [Login to Cosmic JS](https://cosmicjs.com) and go to Your Bucket > Settings > Functions > Upload Function
2. Add the link to this repo: `https://github.com/cosmicjs/function-starter` and click "Install Function"

#### function.json file properties
Key | Type | Description
--- | --- | ---
| title     | string | Function title
| description      | string | Function description (HTML allowed)
| image_url      | string | Image thumbnail
| repo_url      | string | Function git repo url
| env_vars      | array | key / value for environment variables
| routes      | array | Function routes: properties include path (string), method (string) and cors (bool)

Example `function.json` file:
```json
{
  "title": "Function Starter",
  "description": "Cosmic JS Function starter.",
  "image_url": "https://cosmicjs.com/images/marketing/logo-w-brand.jpg",
  "repo_url": "https://github.com/cosmicjs/function-starter",
  "env_vars": [
    {
      "key": "CUSTOM_MESSAGE",
      "value": ""
    }
  ],
  "routes": [
    {
      "path": "hello-world",
      "method": "get",
      "cors": true
    }
  ]
}
```
