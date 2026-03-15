function to_integer(f) {
  return f(n => n + 1)(0)
}
function to_boolean(f) {
  return f(true)(false)
}

function to_array(l) {
  var array = []
  while (!to_boolean(IS_EMPTY(l))) {
    array.push(CAR(l))
    l = CDR(l)
  }
  return array
}

function to_char(c) {
  return "0123456789BFiuz"[to_integer(c)]
}

function to_string(l) {
  return to_array(l).map(to_char).join("")
}

// Sono sempre stato attratto da linguaggi di programmazione semplici: C# -> Ruby -> Javascript -> Elixir
// e ho voluto provare a capire fino a che punto si può arrivare.
// Qual'è l'essenza di un linguaggio di programmazione?
// Come Russel nei "The Principles of Mathematics" è arrivato all'essenza della matematica possiamo
// arrivare all'essenza della programmazione.

// Togliamo tutto
// - No keyword
// - No operatori
// - No array
// - No cicli/if/ecc..
// - Solo funzioni (e assegazione per comodità)
// - Partiamo dal basso, costruiamo mattoncini che componiamo

// Turing Machine: ha portato alla macchina di von neumann e ai linguaggi imperativi (assembly, fortran, c/c++)
// Lambda calcolo: ha portato ai linguaggi funzionali (LISP, OCaml, Haskell)

// Peculiarità del lambda calcolo
// - No global state (no tape)
// - Funzioni pure
// - Valori immutabili
// - No loop (ricorsione)
// - No valori primitivi (solo funzioni che interpretiamo come valori)
// - Funzioni come unità di composizione

// Point free function
// Pure function
// Curried functions => facile comporre

// const sum = (x, y) => x + y
// const sumc = x => y => x + y
// const sum3 = sumc(3)
// sum3(5) // 8

// BOOLEANS
// const vero_o_falso = true? 'vero':'falso'
// E' una scelta, selezione degli argomenti: T per il primo argomento, F per il secondo

const T = x => y => x // K
const F = x => y => y // KI
// Possiamo ottere false "flippando" true
// CT = F e CF = T quindi NOT è C
//const F = C(T) // = CK => KI

// T('Vero')('Falso')
// F('Vero')('Falso')

// La funzione to_boolean mi fa passare dal mondo delle lambda al mondo di js

// Se inverto il comportamento di True... ottengo False.
// C(T)(a)(b) -> T(b)(a) -> b (che è False!)
// NOT = C;

// const NOT = f => f(x => y => y)(x => y => x) // C
const NOT = f => f(F)(T) // C

// NOT T e false!
//NOT_T = NOT(T) = T(F((T))) = F
//
// OR
// const OR = a => b => a()()
// Se a è vero torno a, altrimenti valuto b
const OR = a => b => a(a)(b)
// const OR = a => M(a)

// FATE VOI!
// Se a è false, torno a (il secondo elemento), se è true valuto b
const AND = a => b => a(b)(a)

// L'If chiama semplicemente i boolean. b rappresenta un booleano, se è true torna il primo altrimenti il secondo
// L'IF in Lambda Calculus non esiste.
// Sono i booleani stessi a decidere!
const IF = x => x // I
// If(T)("Vero!!")("No")
// If(F)("No")("Falso");

to_boolean(T)

// NUMERI
// 1 è il successivo di 0
// 2 è il successivo di 1 o il successivo del successivo di 0
// 3 è il successivo del successivo del successivo di 0
// Possiamo pensare ai numeri naturali come chiamate a funzioni: 0 chiamo la funzione 0 volte, 1 la chiamo una volta, ecc...
// La funzione identità rappresenta lo zero

const ZERO = f => x => x
const ONE = f => x => f(x)
const TWO = f => x => f(f(x))
const THREE = f => x => f(f(f(x)))
const FOUR = f => x => f(f(f(f(x))))
const FIVE = f => x => f(f(f(f(f(x)))))
const FIFTEEN = f => x => f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(x)))))))))))))))
const ONE_HUNDRED = f => x => f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(f(x))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

// E la funzione f applicata n volte, composta con f (per avere un'applicazione in più)
// SUCC = n => n
// Voglio sempre tornare 1...quindi copio la definizione di ONE.
// SUCC = n => f => x => f(x)
// Ora posso giocare con f e applicarla quante volte voglio
// Ripeto f per n volte
// SUCC = n => f => x => n(f)(x)
// Quindi se applico f una volta in più ottengo il successivo
const SUCC = n => f => x => f(n(f)(x))

const sum = a => b => {
  if (b === 0) return a
  return sum(a + 1)(b - 1)
}

// la somma a + b può essere vista come come b + a volte il successore di b
const ADD = a => b => a(SUCC)(b)

// La moltiplicazione è una composizione (chiamo a per b volte)
// const MUL = a => b => f => x => b(a(f))(x)
const MUL = a => b => a(ADD(b))(ZERO)
// La x la tolgo:
// const func = x => console.log(x);
// Versione "corta" (Eta-reduced)
// const func = console.log;
// const MUL = a => b => B(a)(b)

// Dobbiamo produrre T se l'input è 0
// Se n è ZERO, torna x (che impostiamo a T).
// Se n è 1+, applica la funzione K(F) n volte.
// K(F) butta via l'argomento e torna F.
const IS_ZERO = n => IF(n)(_ => F)(T)
//const IS_ZERO = n => n(K(F))(T)

// STRUTTURE DATI
// Pair (V)
// A Pair is a function that "closes over" two values (a, b) and waits for a selector function to tell it which one to release.
const PAIR = a => b => f => f(a)(b)

// First (Fst) - Uses T (True) to select the first
const FST = p => p(T)

// Second (Snd) - Uses F (False) to select the second
const SND = p => p(F)

// PREDECESSOR
// Phi crea una nuova coppia: (OldSecond, OldSecond + 1)
const PHI = p => PAIR(SND(p))(SUCC(SND(p)))

// Applichiamo Phi n volte partendo da (0, 0)
// Poi prendiamo il primo elemento.
const PRED = n => FST(n(PHI)(PAIR(ZERO)(ZERO)))

// Eseguo PRED n Volte partendo da m
const SUB = m => n => n(PRED)(m)

// LIST
// Costruiamo le liste come struttura ricorsiva di Pair

// Empty. E' un pair. Il primo T rappresenta "si sono una lista vuota"
const EMPTY = PAIR(T)(T)
const IS_EMPTY = FST

// Car e Cdr (da Lisp) accedono al secondo elemento (il primo indica solo se la lista è vuota)
const CAR = l => FST(SND(l))
const CDR = l => SND(SND(l))

const CONS = h => t => PAIR(F)(PAIR(h)(t))
// const my_list = CONS(ONE)(CONS(TWO)(CONS(THREE)(EMPTY)))

const Z = f => (x => f(y => x(x)(y)))(x => f(y => x(x)(y)))

const PUSH = l => x => FOLD(l)(CONS(x)(EMPTY))(a => e => CONS(e)(a))


const DIVIDE = Z(
  f => m => n =>
    IF(IS_LESS_OR_EQUAL(n)(m))(x => SUCC(f(SUB(m)(n))(n))(x))(ZERO),
)

const IS_LESS_OR_EQUAL = m => n => IS_ZERO(SUB(m)(n))

const RANGE = Z(
  f => m => n =>
    IF(IS_LESS_OR_EQUAL(m)(n))(x => CONS(m)(f(SUCC(m))(n))(x))(EMPTY),
)

const FOLD = Z(
  f => l => x => g => IF(IS_EMPTY(l))(x)(y => g(f(CDR(l))(x)(g))(CAR(l))(y)),
)

const MAP = k => f => FOLD(k)(EMPTY)(l => x => CONS(f(x))(l))
const APPEND = a => b => FOLD(a)(b)(a => e => CONS(e)(a))

const MOD = Z(f => m => n => IF(IS_LESS_OR_EQUAL(n)(m))(x => f(SUB(m)(n))(n)(x))(m))

//Strings - "0123456789BFiuz"
const TEN = MUL(TWO)(FIVE)
const _B = TEN
const _F = SUCC(_B)
const _I = SUCC(_F)
const _U = SUCC(_I)
const _Z = SUCC(_U)
const FIZZ = CONS(_F)(CONS(_I)(CONS(_Z)(CONS(_Z)(EMPTY))))
const BUZZ = CONS(_B)(CONS(_U)(CONS(_Z)(CONS(_Z)(EMPTY))))
const FIZZBUZZ = APPEND(FIZZ)(BUZZ)

const TO_DIGITS = Z(
  f => n =>
    PUSH(IF(IS_LESS_OR_EQUAL(n)(PRED(TEN)))(EMPTY)(x => f(DIVIDE(n)(TEN))(x)))(
      MOD(n)(TEN)
    )
)

//The FizzBuzz function
const FizzBuzz = () =>
  MAP(RANGE(ONE)(ONE_HUNDRED))(n =>
    IF(IS_ZERO(MOD(n)(FIFTEEN)))(FIZZBUZZ)(
      IF(IS_ZERO(MOD(n)(THREE)))(FIZZ)(
        IF(IS_ZERO(MOD(n)(FIVE)))(BUZZ)(TO_DIGITS(n)),
      ),
    ),
  )

const FizzBuzzDecoded = () => to_array(FizzBuzz()).map(to_string)

console.log(FizzBuzzDecoded())
