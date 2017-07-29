/**
 * Part of the Blockchain Course
 * http://AcloudFan.com
 * http://TheDapps.com
 * 
 * Start a local geth to try this out
 * $ geth --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --datadir "./devdata"  --dev console
 * > personal.newAccount()
 * 
 * Code unlocks the 0th account for 10 minutes
 */
var Web3 = require('web3');

var provider = "http://localhost:8545";

var web3 = new Web3(new Web3.providers.HttpProvider(provider)); 



web3.eth.personal.getAccounts(function(error, accounts){
    if(accounts.length == 0) {
        console.log("No Account to Unlock!!!");
        process.exit(1)
    } else {
        // Unlock account for 1 minute
        web3.eth.personal.unlockAccount(accounts[0],"password",6000,function(error, result){
            if(error){
                console.log(error)
            } else {
                console.log(result);
            }
        })
    }
});


