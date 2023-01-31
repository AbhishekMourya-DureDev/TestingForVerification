const solc = require("solc");
const fs = require("fs");


async function  main(){
const CONTRACT_FILE = `/home/luffy/Desktop/Solidity/Contract Verification/contracts/HelloWorld.sol`;

const content = await fs.readFileSync(CONTRACT_FILE).toString();

const input = {
  language: "Solidity",
  sources: {
    [CONTRACT_FILE]: {
      content: content,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = await JSON.parse(solc.compile(JSON.stringify(input)));

console.log(input);
}

main()

// for (const contractName in output.contracts[CONTRACT_FILE]) {
//   console.log(
//     output.contracts[CONTRACT_FILE][contractName].evm.bytecode.object
//   );
// }
