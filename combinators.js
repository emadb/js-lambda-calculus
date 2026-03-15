// BASIC COMBINATORS

// λx.x
const I = a => a    // Idior
const M = f => f(f) // Mockingbird
const C = f => a => b => f(b)(a) // Cardinal
const B = f => g => a => f(g(a))  // Bluebird
const T = a => f => f(a) // Thrush = CI
const V = a => b => f => f(a)(b) // Vireo = BTC
const B1 = f => g => a => b => f(g(a)(b)) // Blackbird = BBB

let K = x => y => x; // Kestrel
let S = x => y => z => x(z)(y(z)); // Starling
