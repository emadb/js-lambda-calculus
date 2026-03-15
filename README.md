# Experiments with lambda calculus in javascript

In [genesis.js](./genesis.js) a guided implementation of FizzBuzz in lambda calculus.

## References

- https://en.wikipedia.org/wiki/Lambda_calculus
- https://www.amazon.com/Introduction-Functional-Programming-Calculus-Mathematics-ebook/dp/B00CWR4USM
- https://joshmoody.org/blog/programming-with-less-than-ngiothing/


## Combinators

| Sym. Bird | 𝜆-Calculus | Use | Haskell |
| :--- | :--- | :--- | :--- |
| **I** Idiot | `𝜆a.a` | identity | `id` |
| **M** Mockingbird | `𝜆f.ff` | self-application |  |
| **K** Kestrel | `𝜆ab.a` | true, first, const | `const` |
| **KI** Kite | `𝜆ab.b` | false, second | `const id` |
| **C** Cardinal | `𝜆fab.fba` | reverse arguments | `flip` |
| **B** Bluebird | `𝜆fga.f(ga)` | composition | `(.)` |
| **Th** Thrush | `𝜆af.fa` | hold an argument | `flip id` |
| **V** Vireo | `𝜆abf.fab` | hold a pair of args | `flip . flip id` |


## Booleans

| Sym. Name | 𝜆-Calculus | Use | Haskell |
| :--- | :--- | :--- | :--- |
| **T** TRUE | `𝜆ab.a` (= K) | encoding for true | `True` |
| **F** FALSE | `𝜆ab.b` (= KI) | encoding for false | `False` |
| **NOT** | `𝜆p.pFT` (= C) | negation | `not` |
| **AND** | `𝜆pq.pqF` | conjunction | `(&&)` |
| **OR** | `𝜆pq.pTq` (= M*) | disjunction | `(\|\|)` |

## Boolean operators

| Name | 𝜆-Calculus | Use |
| :--- | :--- | :--- |
| **IS0** | `𝜆n.n (K F) T` | test if n = 0 |
| **LEQ** | `𝜆nk.IS0 (SUB n k)` | test if n <= k |
| **EQ** | `𝜆nk.AND (LEQ n k) (LEQ k n)` | test if n = k |
| **GT** | `𝜆nk.B1 NOT LEQ` | test if n > k |

## Numerals

| Sym. | Name | 𝜆-Calculus | Use |
| :--- | :--- | :--- | :--- |
| **N0** | ZERO | `𝜆fa.a` (= F) | apply f no times to a |
| **N1** | ONCE | `𝜆fa.f a` (= I*) | apply f once to a |
| **N2** | TWICE | `𝜆fa.f (f a)` | apply 2-fold f to a |
| **N3** | THRICE | `𝜆fa.f (f (f a))` | apply 3-fold f to a |
| **N4** | FOURFOLD | `𝜆fa.f (f (f (f a)))` | apply 4-fold f to a |
| **N5** | FIVEFOLD | `𝜆fa.f (f (f (f (f a))))` | apply 5-fold f to a |

# Arithmetic
| Name | 𝜆-Calculus | Use |
| :--- | :--- | :--- |
| **SUCC** | `𝜆nf.B f (nf)` (= `𝜆nfa.f(nfa)`) | successor of n |
| **ADD** | `𝜆nk.n SUCC k` (= `𝜆nkf.B (n f) (k f)`) | addition of n and k |
| **MULT** | `𝜆nkf.n(kf)` (= B) | multiplication of n and k |
| **POW** | `𝜆nk.kn` (= Th) | raise n to the power of k |
| **PRED** | `𝜆n.n (𝜆g.IS0 (g N1) I (B SUCC g)) (K N0) N0` | predecessor of n |
| **PRED** | `𝜆n.FST (n Φ (PAIR N0 N0))` | predecessor of n (easier) |


# All the combinators

| Combinator | Bird | Type | Implementation | In Haskell | Intuition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **I** | idiot | `a -> a` | I x = x<br>I = S K K<br>I = S K S | `id` | Identity |
| **A**<br>**I\*** | apply / applicator<br>idiot once removed | `(a -> b) -> a -> b` | A x y = x y<br>I* = B I | `($)` | 1 param to a function of arity 1 |
| **I\*\*** | idiot twice removed | `(a -> b -> c) -> a -> b -> c` | I** x y z = x y z<br>I** = B I* | | 2 params to a function of arity 2 |
| **I\*\*\*** | | `(a -> b -> c -> d) -> a -> b -> c -> d` | I*** x y z w = x y z w<br>I*** = B I** | | |
| **I\*\*\*\*** | | `(a -> b -> c -> d -> e) -> a -> b -> c -> d -> e` | I**** x y z w v = x y z w v<br>I**** = B I*** | | |
| **K** | kestrel | `a -> b -> a` | K x y = x | `const` | Encoding of *true* in lambda calculus |
| **Ki** | kite | `a -> b -> b` | Ki x y = y | `const id` | Encoding of *false* in lambda calculus |
| **B** | bluebird | `(b -> c) -> (a -> b) -> a -> c` | B x y z = x (y z)<br>B = Q T (Q Q)<br>B = S (K S) K | `(.)` | Composition<br>Pass a value to a function and the result to another function<br>"Add a star"<br>"Add a pass-through argument" |
| **B1** | blackbird | `(c -> d) -> (a -> b -> c) -> a -> b -> d` | B1 x y z w = x (y z w)<br>B1 = B B B | | Composition of composition and composition<br>Pass two values to a function and the result to another function |
| **B2** | bunting | `(d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e` | B2 x y z w v = x (y z w v) | | Composition of composition, composition and composition |
| **B3** | becard | `(c -> d) -> (b -> c) -> (a -> b) -> a -> d` | B3 x y z w = x (y (z w)) | | Pass a value to a function and the result to another function and the result to another function |
| **S** | starling | `(a -> b -> c) -> (a -> b) -> a -> c` | S x y z = x z (y z)<br>S = B (B W) (B B C)<br>S = B W* G<br>S = W** G | `ap` / `<*>` | Pass a value straight and also through a function to another function of arity 2 |
| **?** | missing bird | `(b -> a -> c) -> (a -> b) -> a -> c` | ? x y z = x (y z) z | | Pass a value through a function and also straight to another function of arity 2 |
| **Φ** | phoenix / starling’ | `(b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d` | Φ x y z w = x (y w) (z w) | `liftM2` | Pass a value through two different functions to another function of arity 2 |
| **D**<br>**B'** | dove<br>bluebird prime | `(a -> c -> d) -> a -> (b -> c) -> b -> d` | D x y z w = x y (z w)<br>D = B B | | Pass a value straight and another value through a function to another function of arity 2 |
| **C'** | cardinal prime | `(c -> a -> d) -> (b -> c) -> a -> b -> d` | C' x y z w = x (y w) z | | Pass a value through a function and another value straight to another function of arity 2 |
| **E** | eagle | `(a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e` | E x y z w v = x y (z w v)<br>E = B (B B B)<br>E = B B1 | | Pass a value straight and two other values through a function to another function of arity 2 |
| **D1** | dickcissel | `(a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e` | D1 x y z w v = x y z (w v)<br>D1 = B D<br>D1 = B (B B) | | Pass two values straight and a third value through a function to another function of arity 3 |
| **ψ** | psi | `(b -> b -> c) -> (a -> b) -> a -> a -> c` | ψ x y z w = x (y z) (y w) | `on` | Pass two values through the same function and pass the results to another function of arity 2 |
| **D2** | dovekie | `(c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e` | D2 x y z w v = x (y z) (w v) | | Pass two values through different functions and pass the results to another function of arity 2 |
| **E^** | bald eagle | `(e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g` | E^ x y1 y2 y3 z1 z2 z3 = x (y1 y2 y3) (z1 z2 z3)<br>E^ = E E<br>E^ = B(B B B)(B(B B B))<br>E^ = (B B1)(B B1) | | Pass two pairs of values through different functions and pass the results to another function of arity 2<br>Like blackbird, but for two pairs of values |
| **W** | warbler | `(a -> a -> b) -> a -> b` | W x y = x y y<br>W = C (B M R)<br>W = C W'<br>W = B (T W') R<br>W = C (H R)<br>W = R (H R) R<br>W = C (S R R)<br>W = C (S (C C) (C C))<br>W = S T | `join` | Duplicate the value and pass to a function of arity 2 |
| **W\*** | warbler once removed | `(a -> b -> b -> c) -> a -> b -> c` | W* x y z = x y z z<br>W* = B W | | Pass first value straight and duplicate another value to a function of arity 3 |
| **W\*\*** | warbler twice removed | `(a -> b -> c -> c -> d) -> a -> b -> c -> d` | W** x y z w = x y z w w<br>W** = B (B W)<br>W** = B W* | | Pass first two values straight and duplicate third value to a function of arity 4 |
| **H** | hummingbird | `(a -> b -> a -> c) -> a -> b -> c` | H x y z = x y z y<br>H = B W (B C)<br>H = W* C*<br>H = S R | | Pass the two values straight and duplicate first value to a function of arity 3 |
| **J** | jay | `(a -> b -> b) -> a -> b -> a -> b` | J x y z w = x y (x w z) | | |
| | jalt | `(a -> c) -> a -> b -> c` | jalt x y z = x y | | Pass first value straight and forget the second value |
| | jalt' | `(a -> b -> d) -> a -> b -> c -> d` | jalt' x y z w = x y z | | Pass first two values straight and forget the third value |
| **𝚪** | gamma | `((a -> b -> c) -> d -> e -> b) -> (a -> b -> c) -> (d -> a) -> d -> e -> c` | 𝚪 x y z w v = y (z w) (x y w v) | | |
| **M** | mockingbird | | M x = x x<br>M = O I<br>M = W T<br>M = S T T<br>M = S I I | | Pass the value to itself |
| **M2** | double mockingbird | | M2 x y = x y (x y)<br>M2 = B M | | |
| **L** | lark | | L x y = x (y y)<br>L = Q M<br>L = C B M<br>L = R M B<br>L = B B T M B<br>L = B (T M) B<br>L = B W B | | Pass the value to itself and pass the result to another function |
| **O** | owl | `((a -> b) -> a) -> (a -> b) -> b` | O x y = y (x y)<br>O = S I<br>O = Q Q W<br>O = B W Q<br>O = B W (C B) | | |
| **Θ** | sage | `(a -> a) -> a` | Θ x = x (Θ x)<br>Θ = S L L | | |
| **U** | turing | | U x y = y (x x y)<br>U = L O<br>U = L (S I)<br>U = B W (L Q) | | |
| **G** | goldfinch | `(b -> c -> d) -> (a -> c) -> a -> b -> d` | G x y z w = x w (y z)<br>G = B B C | | Like D, but arguments in different order |
| **T** | thrush | `a -> (a -> b) -> b` | T x y = y x<br>T = C I<br>T = S (K (S I)) (S (K K) I)<br>T = Q3 I | `(&)` | Like I*, but arguments in different order |
| **C** | cardinal | `(a -> b -> c) -> b -> a -> c` | C x y z = x z y<br>C = R R R<br>C = B (T (B B T)) (B B T)<br>C = Q Q (Q T)<br>C = G G I I | `flip` | Swap argument order<br>Like I**, but arguments in different order |
| **F** | finch | `b -> a -> (a -> b -> c) -> c` | F x y z = z y x<br>F = E T T E T<br>F = B (T T) (B (B B B) T)<br>F = C V | | Like I**, but arguments in different order |
| **R** | robin | `b -> (a -> b -> c) -> a -> c` | R x y z = y z x<br>R = B B T<br>R = C C | | Like I**, but arguments in different order |
| **V** | vireo | `a -> b -> (a -> b -> c) -> c` | V x y z = z x y<br>V = B C T<br>V = C F<br>V = C* T | | Like I**, but arguments in different order |
| **R\*** | robin once removed | `(b -> c -> a -> d) -> a -> b -> c -> d` | R* x y z w = x z w y<br>R* = C* C* | | Like I***, but arguments in different order |
| **F\*** | finch once removed | `(c -> b -> a -> d) -> a -> b -> c -> d` | F* x y z w = x w z y<br>F* = B C* R* | | Like I***, but arguments in different order |
| **C\*** | cardinal once removed | `(a -> c -> b -> d) -> a -> b -> c -> d` | C* x y z w = x y w z<br>C* = B C<br>C* = G R | | Like I***, but arguments in different order |
| **V\*** | vireo once removed | `(b -> a -> b -> d) -> a -> b -> b -> d` | V* x y z w = x z y w<br>V* = C* F* | | Same as Cardinal but additional argument. Implementation was incorrect in the book. |
| **R\*\*** | robin twice removed | `(a -> c -> d -> b -> e) -> a -> b -> c -> d -> e` | R** x y z w v = x y w v z<br>R** = B R* | | Like I****, but arguments in different order |
| **F\*\*** | finch twice removed | `(a -> d -> c -> b -> e) -> a -> b -> c -> d -> e` | F** x y z w v = x y v w z<br>F** = B F* | | Like I****, but arguments in different order |
| **C\*\*** | cardinal twice removed | `(a -> b -> d -> c -> e) -> a -> b -> c -> d -> e` | C** x y z w v = x y z v w<br>C** = B C* | | Like I****, but arguments in different order |
| **V\*\*** | vireo twice removed | `(a -> c -> b -> c -> e) -> a -> b -> c -> c -> e` | V** x y z w v = x y v z w<br>V** = B V* | | Like I****, but arguments in different order |
| **Q** | queer | `(a -> b) -> (b -> c) -> a -> c` | Q x y z = y (x z)<br>Q = C B<br>Q = R R R B<br>Q = R B R<br>Q = B B T B R<br>Q = B (T B) R<br>Q = B (T B) (B B T)<br>Q = G R Q3<br>Q = C* Q3 | `(>>>)` | Like B, but arguments in different order. BBTBR was incorrect in the book (was BBBTBR) |
| **Q1** | quixotic | `(b -> c) -> a -> (a -> b) -> c` | Q1 x y z = x (z y)<br>Q1 = B C B<br>Q1 = C* B | | Like B, but arguments in different order |
| **Q2** | quizzical | `a -> (b -> c) -> (a -> b) -> c` | Q2 x y z = y (z x)<br>Q2 = R* B<br>Q2 = B C (B C) B<br>Q2 = C (B C B) | | Like B, but arguments in different order |
| **Q3** | quirky | `(a -> b) -> a -> (b -> c) -> c` | Q3 x y z = z (x y)<br>Q3 = B T<br>Q3 = G I | | Like B, but arguments in different order |
| **Q4** | quacky | `a -> (a -> b) -> (b -> c) -> c` | Q4 x y z = z (y x)<br>Q4 = F* B<br>Q4 = C (B T)<br>Q4 = Q1 T<br>Q4 = C Q3 | | Like B, but arguments in different order |
| **W'** | converse warbler | `a -> (a -> a -> b) -> b` | W' x y = y x x<br>W' = B M R<br>W' = M2 R<br>W' = B M (B B T)<br>W' = B (B M B) T<br>W' = H R | | Like W, but arguments in different order |