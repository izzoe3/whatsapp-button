
//Custom Message to be added. Only replace message AFTER ?text=
var chat = "?text=Hi I would like to know more about your product"
//document.getElementbyID will get the text from based on ID we choose to be included in the message| document.URL will get the page url to be included in the message
var pageInfo = encodeURIComponent(document.getElementById('header-title').textContent) + ' ' + encodeURIComponent(document.URL);
//OPTIONAL: Function to output the text based on what's selected in the dropdown. Remove the whole thing if you didn't use it
function selectedSubjectName(question) {
    var selectedText = question.options[question.selectedIndex].innerHTML;
    var selectedValue = question.value;
    return selectedValue
}


//Multiple function if you have multiple number. Change the number accordingly. Remove whatsApp2 and whatsApp3 if you only need one

function whatsApp(){
    
    var whatsapp = window.open('https://wa.me/60123073646' +chat + selectedSubjectName(question) + ' ' + pageInfo) ;
}
function whatsApp2(){
    var whatsapp2 = window.open('https://wa.me/60122646159' +chat + selectedSubjectName(question) + ' ' + pageInfo) ;
    }
function whatsApp3(){
        var whatsapp3 = window.open('https://wa.me/60122022549' +chat + selectedSubjectName(question) + ' ' + pageInfo) ;
        }
    
    

