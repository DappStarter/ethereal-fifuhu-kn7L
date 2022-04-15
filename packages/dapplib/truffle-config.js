require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain snake grid prize bubble gift'; 
let testAccounts = [
"0xc140c0b6715099b63913fe94059754547da99f26042303d51e6f6baa7d2d83eb",
"0xa3f5b73d236a290ba803c44399abaab9beffdd865fae3277009d4ac53f289d96",
"0x8cafd79911505dae859adafade1244562a8db05c5f0f7e13b96914e4f402d096",
"0x16edb5b7b543662b0df1c84e9941c7e5645bbf3a38184dddc6fb2950034b0d2d",
"0xbfb1bdc784780de47ceb9dc34c06cb1ccaf41b82b38e34a37592436411bcfa56",
"0x3c4229f6a74f32c3b3009e9d4fde5f7120f294ede846fa61a0c2c938bd930878",
"0x34f3856a05d99b82ccafa1d76a3f531850de7e24236230256fb0e81f17ce89d2",
"0xbbe8974919fbb2aa68cbc3f57e474ba58e4f4ab8da60018637e9a2d66122a7a6",
"0x5e26d9f604bf08cb2940c2e364fd6e5729097865bbbb13b04d28d8c37a45df2f",
"0xd28ecd314074e437751bfc24e200e0e1f3d4a2b7ed4dd3feb6752c27b62071f3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


