var Proxy = "15.152.209.250:8888";

function FindProxyForURL(url, host) {

  if ( 
      shExpMatch(url, "*blockscout*")
//      || shExpMatch(url, "*github*")
  )
    return Proxy;

  else
    return "DIRECT";
    
}