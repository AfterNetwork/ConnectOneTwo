const fs = require('fs');
var program = fs.readFileSync(process.argv[2]).toString()
var instructions = program.split("\n")
var tokenized = []
instructions.forEach(element=>{
  if (element === "") return
  var tokenizedElement = element.split(" ")
  tokenized.push(tokenizedElement)
})
var instEnums = {
  add          :0 ,
  xor          :1 ,
  subtract     :2 ,
  and          :3 ,
  or           :4 ,
  not          :5 ,
  write        :6 ,
  multiply     :7 ,
  divide       :8 ,
  copy         :9 ,
  goto         :10,
  writestatic  :11,
  gt           :12,
  lt           :13,
  eq           :14,
  ifjump       :15,
  call         :16,
}
var asm = new Uint8Array(0)
tokenized.forEach(instruct=>{
  asm = new Uint8Array([...asm,instEnums[instruct[0]],parseInt(instruct[1]),parseInt(instruct[2]),parseInt(instruct[3])])
})
fs.writeFileSync(process.argv[2]+".js",`swasm_execSmileyasm(new Uint8Array(${JSON.stringify(Array.from(asm))}),globalCb)`)
