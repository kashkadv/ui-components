

export function buildDictionaries(settings) {
  const dictionaries = {}

  settings.dictionaries.forEach((dictionary) => {
    dictionaries[dictionary.name.toLowerCase()] = buildDictionaryValues(dictionary.items)
  })

  return dictionaries
}

function buildDictionaryValues(items) {
  const values = {}

  items?.forEach((item) => {
    const { key, _key, _type, ...value } = item
    values[key] = value
  })

  return values
}

export async function checkIfDictionariesNeedUpdate(initialSettings) {
}

async function updateLocalDictionaries(initialSettings) {
  const dictionaries = buildDictionaries(initialSettings)

  // const localCookies = await cookies()
  localCookies.set('dictionaries', JSON.stringify({ dictionaries: dictionaries, updatedAt: initialSettings._updatedAt }))
}

function updateCachedDictionaries(initialSettings) {
  const dictionaries = buildDictionaries(initialSettings)
  localStorage.setItem('dictionaries', JSON.stringify({ dictionaries: dictionaries, updatedAt: initialSettings._updatedAt }))
}

// export function checkIfDictionariesNeedUpdate(initialSettings) {
//   const cachedDictionaries = getCachedDictionaries()

//   if (!cachedDictionaries) {
//     updateCachedDictionaries(initialSettings)
//   } else {
//     const cachedDate = new Date(cachedDictionaries.updatedAt)
//     const currentDate = new Date(initialSettings._updatedAt)

//     if (cachedDate < currentDate) {
//       updateCachedDictionaries(initialSettings)
//     }
//   }
// }

function getCachedDictionaries() {
  console.log(localStorage)

  return JSON.parse(localStorage.getItem('dictionaries'))
}

