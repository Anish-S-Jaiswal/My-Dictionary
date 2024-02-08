const apiurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// var meaning = document.getElementById('input2').value;
async function dics()
{
    var a = document.getElementById('input1').value;
    const response = await fetch(apiurl + a);
    var data = await response.json();
     let meaning=data[0].meanings[0].definitions[0].definition;
     document.getElementById('input2').value=meaning;
    console.log(meaning);
}