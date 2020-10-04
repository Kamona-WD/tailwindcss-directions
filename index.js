module.exports = function ({ addVariant, config, e }) {
  const dirs = config('theme.directions')
  let data = []

  if (Array.isArray(dirs)) {
    data = dirs.map((dir) => ({ attr: dir, name: dir }))
  } else {
    for (let name in dirs) {
      data.push({ attr: dirs[name], name })
    }
  }

  if (!data.length) {
    throw new Error('No directions found in theme.')
  }

  addVariant('directions', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return data.map(({ attr, name }) => {
        return `[dir="${attr}"] .${e(name + separator + className)}`
      })
    })
  })
}
