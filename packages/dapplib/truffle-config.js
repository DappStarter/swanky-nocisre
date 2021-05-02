require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict roast fortune street name rescue rural honey inflict nasty equal gasp'; 
let testAccounts = [
"0x27f33ee0f6669577fbd647ed15a317c30681d80dac792f8721ae9668e5f46d21",
"0x9062c59f6b344ac279e9cb5898a2c2f5507e5c6c98c00caeda14f082bfa33220",
"0x8a3963d3e1d8a6bedb69bfb0f79e61539245b3564930016c004b60332319945d",
"0xdac4baed8c7eaa9145235e67fccf2276cf6f479892014e48fceab50c4102c8a6",
"0xb9ed5ef69fd46a03b3954416dd69167e972a13070089dd950b415c19af1e0ed1",
"0x95b788aed551b8bf097c21e8783d235655a49f9f9460cb24f192db414275ef19",
"0x466ffa654e56458db9910739312ce7ebf038f34c65950f3209189d9161909ab0",
"0x649188818aade5728003c1508443d92f90cbfe4fab9c587ab177baceb4d16487",
"0x32dc4908b8954efba1251c900a7453f5f67bc044f83d700be20f2cdb0feaae55",
"0x77b67322f3a3253951ba990cc4443e868d1fefa5392cd5e3d95f510db6424b61"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


