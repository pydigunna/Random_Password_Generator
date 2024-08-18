const result=document.getElementById("result");
function generate(){
    const passwordLength=parseInt(document.getElementById("length").value);
    const lowerCase=document.getElementById("lowerCase").value.toLowerCase()==="true";
    const upperCase=document.getElementById("UpperCase").value.toLowerCase()==="true";
    const numbers=document.getElementById("number").value.toLowerCase()==="true";
    const symbols=document.getElementById("symbols").value.toLowerCase()==="true";
    const allLower="abcdefghijklmnopqrstuvwxyz";
    const allUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const allnumbers="0123456789";
    const allsymbols="!@#$%^&*()_+";
    let allowed="";
    let password="";
    allowed+=lowerCase?allLower:"";
    allowed+=upperCase?allUpper:"";
    allowed+=numbers?allnumbers:"";
    allowed+=symbols?allsymbols:"";
    if(allowed.length==0){
        result.textContent="please select atleast one option";
        return;
    }
    for(let i=0;i<passwordLength;i++){
        password+=allowed.charAt(Math.floor(Math.random()*allowed.length));

    }
    result.textContent="Generated password: "+password;
}