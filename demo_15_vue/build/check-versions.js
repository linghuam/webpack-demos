'use strict'
// chalk 翻译：粉笔  命令输出着色 https://github.com/chalk/chalk
const chalk = require('chalk')
// 检查控制版本的 https://github.com/hongfanqie/node-semver
const semver = require('semver')
// package.json 文件
const packageConfig = require('../package.json')
// 用 node 实现的 unix 命令  https://github.com/shelljs/shelljs
const shell = require('shelljs')

function exec (cmd) {
  // child_process - 子进程 http://nodejs.cn/api/child_process.html
  return require('child_process').execSync(cmd).toString().trim()
}

// 检查 node 版本配置
const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

// 检查 npm 版本配置
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    // 比较当前版本和需求版本，如果不符合则输出提示语
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
