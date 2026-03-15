# All the birds from the book 

| Function Abstraction | Symbol | Bird | Combinator | SK Combinator |
| :--- | :--- | :--- | :--- | :--- |
| `λabc.a(bc)` | B | Bluebird | `S(KS)K` | `((S(KS))K)` |
| `λabcd.a(bcd)` | B₁ | Blackbird | `BBB` | `((S(K((S(KS))K)))((S(KS))K))` |
| `λabcde.a(bcde)` | B₂ | Bunting | `B(BBB)B` | `((S(K((S(K((S(KS))K)))((S(KS))K))))((S(KS))K))` |
| `λabcd.a(b(cd))` | B₃ | Becard | `B(BB)B` | `((S(K((S(K((S(KS))K)))((S(KS))K))))((S(KS))K))` |
| `λabc.acb` | C | Cardinal | `S(BBS)(KK)` | `((S((S(K((S(KS))K)))S))(KK))` |
| `λabcd.ab(cd)` | D | Dove | `BB` | `(S(K((S(KS))K)))` |
| `λabcde.abc(de)` | D₁ | Dickcissel | `B(BB)` | `(S(K(S(K((S(KS))K)))))` |
| `λabcde.a(bc)(de)` | D₂ | Dovekies | `BB(BB)` | `((S(K((S(KS))K)))(S(K((S(KS))K))))` |
| `λabcde.ab(cde)` | E | Eagle | `B(BBB)` | `(S(K((S(K((S(KS))K)))((S(KS))K))))` |
| `λabcdefg.a(bcd)(efg)` | Ê | Bald Eagle | `B(BBB)(B(BBB))` | `((S(K((S(K((S(KS))K)))((S(KS))K))))(S(K((S(K((S(KS))K)))((S(KS))K)))))` |
| `λabc.cba` | F | Finch | `ETTET` | `((S(K((S((SK)K))(K((S(K(S((SK)K))))K)))))((S(K((S(K((S(KS))K)))((S(KS))K))))((S(K(S((SK)K))))K)))` |
| `λabcd.ad(bc)` | G | Goldfinch | `BBC` | `((S(K((S(KS))K)))((S((S(K((S(KS))K)))S))(KK)))` |
| `λabc.abcb` | H | Hummingbird | `BW(BC)` | `((S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))(S(K((S((S(K((S(KS))K)))S))(KK)))))` |
| `λa.a` | I | Identity Bird (aka Idiot) | `SKK` | `((SK)K)` |
| `λabcd.ab(adc)` | J | Jay | `B(BC)(W(BC(B(BBB))))` | `((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))(K((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S(K((S(KS))K)))((S(KS))K))))))))` |
| `λab.a` | K | Kestrel (True) | `K` | `K` |
| `λab.a(bb)` | L | Lark | `CBM` | `((S((S(KS))K))(K((S((SK)K))((SK)K))))` |
| `λa.aa` | M | Mockingbird | `SII` | `((S((SK)K))((SK)K))` |
| `λab.ab(ab)` | M₂ | Double Mockingbird | `BM` | `(S(K((S((SK)K))((SK)K))))` |
| `λab.b(ab)` | O | Owl | `SI` | `(S((SK)K))` |
| `λabc.b(ac)` | Q | Queer Bird | `CB` | `((S(K(S((S(KS))K))))K)` |
| `λabc.a(cb)` | Q₁ | Quixotic Bird | `BCB` | `((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K))` |
| `λabc.b(ca)` | Q₂ | Quizzical Bird | `C(BCB)` | `((S(K(S((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K)))))K)` |
| `λabc.c(ab)` | Q₃ | Quirky Bird | `BT` | `(S(K((S(K(S((SK)K))))K)))` |
| `λabc.c(ba)` | Q₄ | Quacky Bird | `F*B` | `((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S((S(K((S((S(K((S(KS))K)))S))(KK))))((S(KS))K)))))K))` |
| `λabc.bca` | R | Robin | `BBT` | `((S(K((S(KS))K)))((S(K(S((SK)K))))K))` |
| `λabc.ac(bc)` | S | Starling | `S` | `S` |
| `λab.ba` | T | Thrush | `CI` | `((S(K(S((SK)K))))K)` |
| `λab.b(aab)` | U | Turing | `LO` | `((S(K(S((SK)K))))((S((SK)K))((SK)K)))` |
| `λabc.cab` | V | Vireo (aka Pairing) | `BCT` | `((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S((SK)K))))K))` |
| `λab.abb` | W | Warbler | `C(BMR)` | `((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)` |
| `λab.baa` | W¹ | Converse Warbler | `CW` | `((S(K(S((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K))))K)` |
| `λa.a(λa)` | Y | Why Bird (aka Sage Bird) | `SLL` | `(((SS)K)((S(K((SS)(S((SS)K)))))K)` |
| `λab.ab` | I* | Identity Bird Once Removed | `S(SK)` | `(S(SK))` |
| `λabc.abcc` | W* | Warbler Once Removed | `BW` | `(S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))` |
| `λabcd.abdc` | C* | Cardinal Once Removed | `BC` | `(S(K((S((S(K((S(KS))K)))S))(KK))))` |
| `λabcd.acdb` | R* | Robin Once Removed | `C*C*` | `((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))` |
| `λabcd.adcb` | F* | Finch Once Removed | `BC*R*` | `((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK))))))` |
| `λabcd.acbd` | V* | Vireo Once Removed | `C*F*` | `((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))` |
| `λabc.abc` | I** | Identity Bird Twice Removed | | |
| `λabcd.abcdd` | W** | Warbler Twice Removed | `B(BW)` | `(S(K(S(K((S(K(S((S(K((S((SK)K))((SK)K))))((S(K((S(KS))K)))((S(K(S((SK)K))))K))))))K)))))` |
| `λabcde.abced` | C** | Cardinal Twice Removed | `BC*` | `(S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))` |
| `λabcde.abdec` | R** | Robin Twice Removed | `BR*` | `(S(K((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))` |
| `λabcde.abedc` | F** | Finch Twice Removed | `BF*` | `(S(K((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK))))))))` |
| `λabcde.abecd` | V** | Vireo Twice Removed | `BV*` | `(S(K((S(K((S((S(K((S(KS))K)))S))(KK))))((S(K(S(K((S((S(K((S(KS))K)))S))(KK))))))((S(K((S((S(K((S(KS))K)))S))(KK))))(S(K((S((S(K((S(KS))K)))S))(KK)))))))))` |
| `λab.b` | KI | Kite (False) | `KI` | `(K((SK)K))` |
| `λ` | Ω | Omega | `MM` | `(((S((SK)K))((SK)K))((S((SK)K))((SK)K)))` |
| `λab.bb` | KM | Konstant Mocker | `KM` | `(K((S((SK)K))((SK)K)))` |
| `λab.aa` | C(KM) | Crossed Konstant Mocker | `C(KM)` | `((S(K(S(K((S((SK)K))((SK)K))))))K)` |
| `λ` | Θ | Theta | `YO` | `((((SS)K)((S(K((SS)(S((SS)K)))))K)(S((SK)K)))` |