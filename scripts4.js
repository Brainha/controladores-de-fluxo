// throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome e obrigatorio'
  }
  console.log(name)
}

try {
  sayMyName('braio')
} catch (e) {
  console.log(e)
}

console.log('apos a funcao de erro')
// try...catch
