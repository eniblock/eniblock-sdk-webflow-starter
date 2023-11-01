import { createAuth0Client } from '@auth0/auth0-spa-js';
import { Eniblock, UnsafeStorage, urlConfig } from '@eniblock/sdk';
import * as https from 'https'; 

const domain = window.location.hostname;
let auth0Client = null;
let sdk = null;
let auth0Domain, auth0ClientId, auth0CookieDomain, eniblockAppId, eniblockContract, eniblockTokenId, eniblockMintDomain;

switch (domain) {
  case 'testing.eniblock.com':
    auth0Domain = 'testing-eniblock-sdk.eu.auth0.com';
    auth0ClientId = 'BpfQk1mCjnLak5e42iHX24feDnXRG1bq';
    auth0CookieDomain = '.eniblock.com';    

    urlConfig.API_BASE_URL = "https://testing.sdk.eniblock.com";

    eniblockAppId = 'keen-hoover-4794'; 
    eniblockContract = '0x7Bc713Eb623CB60269dB5c46d57E4ce098803656';
    eniblockTokenId = '1';
    eniblockMintDomain = 'testing.demo.eniblock.com';
    break;

  default:
    auth0Domain = 'eniblock-sdk.eu.auth0.com';
    auth0ClientId = 'kQh2yBn9gIIvDmFJ2LIHoPgK7PcDPbXG';
    auth0CookieDomain = '.eniblock.com';    

    urlConfig.API_BASE_URL = "https://sdk.eniblock.com";

    eniblockAppId = 'pedantic-bouman-8826';
    eniblockContract = '0x7Bc713Eb623CB60269dB5c46d57E4ce098803656';
    eniblockTokenId = '1';
    eniblockMintDomain = 'demo.eniblock.com';
    break;
}

const configureClient = async () => {
  auth0Client = await createAuth0Client({
    domain: auth0Domain,
    clientId: auth0ClientId,
  	cookieDomain: auth0CookieDomain
  });
};

window.onload = async () => {
  const buttonEl = document.getElementById("demo-button");  
  buttonEl.addEventListener("click", mint);

  await configureClient();

  sdk = new Eniblock({
    appId: eniblockAppId,
    accessTokenProvider: async () => { 
      const token = await auth0Client.getTokenSilently({detailedResponse: true});

      return token.id_token;      
     },
    storageItems: [{ alias: "UnsafeStorage", storage: new UnsafeStorage() }],    
  });
}

const login = async () => {
  await auth0Client.loginWithPopup({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });
};

const mint = async () => {
  const loaderEl = document.getElementById("demo-loader");
  const descriptionEl = document.getElementById("demo-description");
  const textStartEl = document.getElementById("demo-text-start");
  const textEndEl = document.getElementById("demo-text-end");
  const linkEl = document.getElementById("demo-link");
  const buttonEl = document.getElementById("demo-button");

  descriptionEl.style.display = 'none';
  textStartEl.style.display = 'none';
  loaderEl.style.display = 'grid';

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (!isAuthenticated) {
    await login();
  }

  let wallet;

  try {
    wallet = await sdk.wallet.instantiate();
  } catch (error) {
    await sdk.wallet.destroy();
    wallet = await sdk.wallet.instantiate();
  }

  const account = await wallet.account.instantiate("My first account");
  const walletAddress = await account.getAddress();

  console.log(`Account Details:
  - Address: ${await account.getAddress()}
  - Alias: ${account.alias}
  - Balance: ${(await account.getNativeBalance()).balance}
  - Public Key: ${await account.getPublicKey()}
  - Creation Date: ${account.creationDate}`);

  var options = {
    host: eniblockMintDomain,
    port: 443,
    path: '/backend/functions/mint?contract=' + eniblockContract + '&to=' + walletAddress + '&tokenId=' + eniblockTokenId + '&amount=1',
    method: 'GET'
  };

  var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {

      buttonEl.innerHTML = 'Learn more';
      buttonEl.href = urlConfig.API_BASE_URL + '/docs';
      linkEl.href = 'https://testnets.opensea.io/' + walletAddress;
      buttonEl.removeEventListener("click", mint);

      loaderEl.style.display = 'none';
      textEndEl.style.display = 'block';
      descriptionEl.style.display = 'grid';      
    });
  });

  req.on('error', error => {
    console.error(`Error on Get Request --> ${error}`)
  })
  
  req.end(); 
};