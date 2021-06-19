# Che Kung Fortune Stick API
[![Publish](https://github.com/normankong/forex-api/actions/workflows/main.yml/badge.svg)](https://github.com/normankong/forex-api/actions/workflows/main.yml)  

This is a API service to provide the Fortune Stick drawing and the explanation, host on Cloudflare Worker platform

### To use directly
https://che-kung.normankong.workers.dev/  
https://che-kung.normankong.workers.dev/1  (Range 1 - 96)

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
### Sample Response
```json
{
    "index": 1,
    "token": "第一簽",
    "score": "上簽",
    "head1": "帥靈地傑逞英豪，一箭分明點大敖：",
    "head2": "得意春風攜滿袖，馬頭聲唱狀元高。",
    "lines": [
        "家宅：喜事將近",
        "出行：順順利利",
        "姻緣：必得美滿姻緣",
        "行人：必達彼岸",
        "生育：可得男孩",
        "訴訟：萬事皆以和為貴",
        "事業：起步順利",
        "搬遷：遠近皆宜",
        "自身：努力者必得其成就",
        "疾病：小心腸胃",
        "財運：晚年更佳"
    ]
}
```

For installation of Cloudflare worker and Wrangler, it can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).
