/**
* The Settings Module reads the settings out of settings.json and provides
* this information to the other modules
*/

var fs = require("fs");
var jsonminify = require("jsonminify");

//The app title, visible e.g. in the browser window
exports.title = "eIquidus";

//The url it will be accessed from
exports.address = "explorer.example.com";

//logo
exports.logo = "/img/logo.png";
// header logo
exports.headerlogo = "/img/header_logo.png";

//The app favicon fully specified url, visible e.g. in the browser window
exports.favicon = "public/favicon.ico";

//What is displayed for the home button in the top-left corner (valid options are: title, coin, logo)
exports.homelink = "coin";

// home link logo height (value in px, only valid if using homelink = 'logo')
exports.logoheight = 50;

// set whether page header "sticks" to top of page or not
exports.sticky_header = true;
// set whether page footer "sticks" to bottom of page or not
exports.sticky_footer = false;

// Footer height
exports.footer_height_desktop = "50px";
exports.footer_height_tablet = "60px";
exports.footer_height_mobile = "70px";

// Social media link height
exports.social_link_percent_height_desktop = 70;
exports.social_link_percent_height_tablet = 55;
exports.social_link_percent_height_mobile = 40;

//Theme
exports.theme = "Exor";

//The Port ep-lite should listen to
exports.port = process.env.PORT || 3001;

//coin symbol, visible e.g. MAX, LTC, HVC
exports.symbol = "EXOR";

//coin name, visible e.g. in the browser window
exports.coin = "Exor";

//This setting is passed to MongoDB to set up the database
exports.dbsettings = {
  "user": "eiquidus",
  "password": "Nd^p2d77ceBX!L",
  "database": "blockchaindb",
  "address" : "localhost",
  "port" : 27017
};

//This setting is passed to the wallet
exports.wallet = { "host" : "127.0.0.1",
  "port" : 51573,
  "username" : "exorrpc",
  "password" : "sSTLyCkrD94Y8&9mr^m6W^Mk367Vr!!K"
};

//Locale file
exports.locale = "locale/en.json",

//Menu and panel items to display
// set a number to pnl variables to change the panel display order. lowest # = far left panel, highest # = far right panel, 0 = do not show panel
exports.display = {
  "api": true,
  "market": true,
  "search": true,
  "richlist": true,
  "movement": true,
  "network": true,
  "masternodes": true,
  "claim_address": true,
  "claim_address_header_menu": true,
  "page_header_bgcolor": "",
  "page_footer_bgcolor": "",
  "table_header_bgcolor": "",
  "networkpnl": 1,
  "difficultypnl": 2,
  "masternodespnl": 3,
  "coinsupplypnl": 4,
  "pricepnl": 5,
  "marketcappnl": 0,
  "logopnl": 0
};

//API view
exports.api = {
  "blockindex": 6415,
  "blockhash": "dd17105f9e3d79c553b3670001e0243dd21378f4f90a340d87c0e5eb0b44dfd4",
  "txhash": "2af5cc842d18814b45db44b62411c8a47987fc3c56294af38572989de5c1f7d5",
  "address": "EaqHssmmgEPCxaeczbZnoqM6vutv9xmhrZ",
};

// markets
exports.markets = {
  "coin": "EXOR",
  "exchange": "BTC",
  "enabled": [],
  "default": "",
  "market_dropdown_menu": true,
  "market_select_visible": true
};

// richlist/top100 settings
exports.richlist = {
  "distribution": true,
  "received": true,
  "balance": true
};

exports.movement = {
  "min_amount": 100,
  "low_flag": 1000,
  "high_flag": 10000
},

//index
exports.index = {
  // show_last_updated: determine whether to show a label above the transaction data with the last updated date
  "show_last_updated": true,
  "show_hashrate": false,
  "difficulty": "POS",
  "last_txs": 100,
  "txs_per_page": 10
};

// reward page
exports.reward_page = {
  // show_last_updated: determine whether to show a label above the reward data with the last updated date
  "show_last_updated": true
};

// masternodes page
exports.masternodes_page = {
  // show_last_updated: determine whether to show a label above the masternode data with the last updated date
  "show_last_updated": true
};

// movement page
exports.movement_page = {
  // show_last_updated: determine whether to show a label above the movement data with the last updated date
  "show_last_updated": true
};

// network page
exports.network_page = {
  // show_last_updated: determine whether to show a label above the network data with the last updated date
  "show_last_updated": true
};

// richlist page
exports.richlist_page = {
  // show_last_updated: determine whether to show a label above the richlist data with the last updated date
  "show_last_updated": true
};

// markets page
exports.markets_page = {
  // show_last_updated: determine whether to show a label above the market data with the last updated date
  "show_last_updated": true
};

// Add as many custom social links to be displayed in the Explorer footer as desired
exports.social_links = [];

exports.confirmations = 6;

//timeouts
exports.update_timeout = 125;
exports.check_timeout = 250;
exports.block_parallel_tasks = 1;

//genesis
exports.genesis_tx = "dd1d332ad2d8d8f49195056d482ae3c96fd2d16e9d166413b27ca7f19775644c";
exports.genesis_block = "0000860fcf946b44df0e7d85d6757d45f8de6f4c9aacc5c7b6abc13db1f68819";

exports.use_rpc = true;
exports.heavy = false;
exports.save_stats_after_sync_blocks = 100;
exports.lock_during_index = false;
exports.txcount = 100;
exports.txcount_per_page = 50;
exports.show_sent_received = true;
exports.supply = "TXOUTSET";
exports.nethash = "getnetworkhashps";
exports.nethash_units = "G";

// simple Cross-Origin Resource Sharing (CORS) support
// enabling this feature will add a new output header to all requests like this: Access-Control-Allow-Origin: <corsorigin>
// corsorigin "*" will allow any origin to access the requested resource while specifying any other value for corsorigin will allow cross-origin requests only when the request is made from a source that matches the corsorigin filter
exports.usecors = false;
exports.corsorigin = "*";

exports.labels = {};
exports.burned_coins = [];

// Enable/disable the use of specific public apis
exports.public_api = {
  "rpc": {
    "getdifficulty": true,
    "getconnectioncount": true,
    "getblockcount": true,
    "getblockhash": true,
    "getblock": true,
    "getrawtransaction": true,
    "getnetworkhashps": true,
    "getvotelist": true,
    "getmasternodecount": true,
    "getmaxmoney": true,
    "getmaxvote": true,
    "getvote": true,
    "getphase": true,
    "getreward": true,
    "getsupply": true,
    "getnextrewardestimate": true,
    "getnextrewardwhenstr": true
  },
  "ext": {
    "getmoneysupply": true,
    "getdistribution": true,
    "getaddress": true,
    "getaddresstxs": true,
    "gettx": true,
    "getbalance": true,
    "getlasttxs": true,
    "getcurrentprice": true,
    "getbasicstats": true,
    "getsummary": true,
    "getnetworkpeers": true,
    "getmasternodelist": true,
    "getmasternoderewards": true,
    "getmasternoderewardstotal": true
  }
};

// Customized API commands
exports.api_cmds = {
  "getnetworkhashps": "getnetworkhashps",
  "getmininginfo": "getmininginfo",
  "getdifficulty": "getdifficulty",
  "getconnectioncount": "getconnectioncount",
  "getblockcount": "getblockcount",
  "getblockhash": "getblockhash",
  "getblock": "getblock",
  "getrawtransaction": "getrawtransaction",
  "getinfo": "getinfo",
  "getpeerinfo": "getpeerinfo",
  "gettxoutsetinfo": "gettxoutsetinfo",
  "getvotelist": "masternodelist votes",
  "getmasternodecount": "getmasternodecount",
  "getmasternodelist": "listmasternodes",
  "verifymessage": "verifymessage",
  "heavies": {
    "getmaxmoney": "getmaxmoney",
    "getmaxvote": "getmaxvote",
    "getvote": "getvote",
    "getphase": "getphase",
    "getreward": "getreward",
    "getnextrewardestimate": "getnextrewardestimate",
    "getnextrewardwhenstr": "getnextrewardwhenstr",
    "getsupply": "getsupply"
  }
};

exports.reloadSettings = function reloadSettings() {
  // Discover where the settings file lives
  var settingsFilename = "settings.json";
  settingsFilename = "./" + settingsFilename;

  var settingsStr;
  try{
    //read the settings sync
    settingsStr = fs.readFileSync(settingsFilename).toString();
  } catch(e){
    console.warn('No settings file found. Continuing using defaults!');
  }

  // try to parse the settings
  var settings;
  try {
    if(settingsStr) {
      settingsStr = jsonminify(settingsStr).replace(",]","]").replace(",}","}");
      settings = JSON.parse(settingsStr);
    }
  }catch(e){
    console.error('There was an error processing your settings.json file: '+e.message);
    process.exit(1);
  }

  //loop trough the settings
  for(var i in settings)
  {
    //test if the setting start with a low character
    if(i.charAt(0).search("[a-z]") !== 0)
    {
      console.warn("Settings should start with a low character: '" + i + "'");
    }

    //we know this setting, so we overwrite it
    if(exports[i] !== undefined)
    {
      // This check uses old .user and .pass config strings if they exist, and .username, .password don't.
      if (i == 'wallet')
      {
        if (!settings.wallet.hasOwnProperty('username') && settings.wallet.hasOwnProperty('user'))
        {
          settings.wallet.username = settings.wallet.user;
        }
        if (!settings.wallet.hasOwnProperty('password') && settings.wallet.hasOwnProperty('pass'))
        {
          settings.wallet.password = settings.wallet.pass;
        }
      }
      exports[i] = settings[i];
    }
    //this setting is unkown, output a warning and throw it away
    else
    {
      console.warn("Unknown Setting: '" + i + "'. This setting doesn't exist or it was removed");
    }
  }
};

// initially load settings
exports.reloadSettings();