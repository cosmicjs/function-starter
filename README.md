# Function Starter
Cosmic JS Function Starter.

### Getting Started
You can run this Function locally for development:
```
git clone https://github.com/cosmicjs/function-starter
cd function-starter
npm run develop
```

### Installation
1. [Login to Cosmic JS](https://cosmicjs.com) and go to Your Bucket > Settings > Functions
2. Add the link to this repo: `https://github.com/cosmicjs/function-starter` and click "Install Function"

#### function.json file properties
Key | Type | Description
--- | --- | ---
| title     | String | Function title
| description      | String | Function description (HTML allowed)
| image_url      | String | Image thumbnail
| repo_url      | String | Function git repo url
| env_vars      | Array | key / value for environment variables
| routes      | Array | Function routes: properties include path (string), method (string) and cors (bool)

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
