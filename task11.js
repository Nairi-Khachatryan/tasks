// es xndir@ miqich shpotechnoxa 
// funkcian stanuma a zangvac@ [1,2,3] ov, heto push anum 4, heto zangvac@ poxum sarqum [4,5,6] heto push anum 7 , baic heto funkiai taracqich durs chgitem inch klini qani vor funkcian return chuni miguce undefined kstananq 

function foo(x) {
   x.push(4)
   console.log(x)
   x = [4,5,6]
   x.push(7)
   console.log(x)
}

var a = [1,2,3]
foo(a)
console.log(a)