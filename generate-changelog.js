const { generateChangelog } = require('@gitmoji-changelog/core')

async function execute () {
  const args = process.argv.slice(2)
  const release = args.length ? args[0] : 'v1.0.0'
  const changelog = await generateChangelog('', release, {
    mode: 'init'
  })

  const releaseChangelog = changelog.changes.find(r => r.version === release.slice(1))
  if (!releaseChangelog) {
    console.log('No changelog.')
    return
  }

  releaseChangelog.groups.forEach((group) => {
    console.log(`### ${group.label}\n`)
    group.commits.forEach(({ emoji, message, hash, author }) => {
      console.log(`- ${emoji} ${message} [${hash}] (by ${author})`)
    })
  })
}

execute()
