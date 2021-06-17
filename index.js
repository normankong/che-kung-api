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
  let result = getData(number)

  // Response Mapping
  let response = result;

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