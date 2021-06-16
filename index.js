const divinationList = require('./resources/data.json')
const MIN = 1
const MAX = 96

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url)
  const uriList = pathname.split('/').slice(1)

  let number = null

  // Parse the Divination Number if passed
  const divinationEndpoint = '/divination/'
  if (pathname.startsWith(divinationEndpoint)) {
    number = uriList[1]
  }

  // Get the Divination
  let obj = getData(number)

  // Response Mapping
  let response = responseMapping(obj)

  // Return to Caller
  return new Response(JSON.stringify(response, null, ' '), {
    headers: { 'content-type': 'text/json; charset=utf-8' },
  })
}

//The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Get Random Data
function getData(number) {
  let index = parseInt(number)
  if (isNaN(index) || index < MIN || index > MAX) {
    index = getRandomIntInclusive(MIN, MAX)
  }
  return divinationList.data[index - 1]
}

// Format Response
function responseMapping(obj) {
  let lines = obj.result1 + obj.result2 + obj.result3 + obj.result4
  lines = lines.replace('自身：', '\n自身：').trim()
  lines = lines.replace('財運：', '\n財運：').trim()
  lines = lines.replace('訴訟：', '\n訴訟：').trim()
  lines = lines.replace('行人：', '\n行人：').trim()
  lines = lines.replace('生育：', '\n生育：').trim()
  lines = lines.replace('出行：', '\n出行：').trim()
  lines = lines.replace('事業：', '\n事業：').trim()
  lines = lines.replace('姻緣：', '\n姻緣：').trim()
  lines = lines.replace('家宅：', '\n家宅：').trim()
  lines = lines.replace('疾病：', '\n疾病：').trim()
  lines = lines.replace('搬遷：', '\n搬遷：').trim()
  lines = lines.replace('\n\n', '\n')

  let title = `${obj.token} ${obj.score}`
  let index = obj.index
  let type = obj.score
  let heading = `${obj.line1} ${obj.line2}`
  let detail = lines

  let response = {
    index,
    type,
    title,
    heading,
    detail,
  }

  return response
}
