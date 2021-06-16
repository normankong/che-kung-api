# Che Kung Fortune Stick API

This is a API service to provide the Fortune Stick drawing and the explanation, host on Cloudflare Worker platform

### To use directly
https://che-kung.normankong.workers.dev/divination/  
https://che-kung.normankong.workers.dev/divination/1  (Range 1 - 96)

### To Build 
```
npm run format
npm run pack
```

### Deployment
```
wrangler dev
wrangler publish
```

For installation of Cloudflare worker and Wrangler, it can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
