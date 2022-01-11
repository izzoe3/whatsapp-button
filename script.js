var ita= document.getElementById("ws-ita");
var thiru= document.getElementById("ws-thiru");
var robert= document.getElementById("ws-robert");
var pageInfo = encodeURIComponent(document.getElementById('header-title').textContent) + ' ' + encodeURIComponent(document.URL);
function selectedSubjectName(question) {
    var selectedText = question.options[question.selectedIndex].innerHTML;
    var selectedValue = question.value;
    return selectedValue
}

var chat = "?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20one%20of%20your%20programme "

 


ita.onclick= function whatsApp(){
    var whatsapp = window.open('https://wa.me/60123073646'+chat + selectedSubjectName(question) + pageInfo) ;
 }
  
thiru.onclick= function whatsApp2(){
    var whatsapp2 = window.open('https://wa.me/60122646159?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20one%20of%20your%20programme '+ pageInfo) ;
    }

robert.onclick= function whatsApp3(){
        var whatsapp3 = window.open('https://wa.me/60122022549?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20one%20of%20your%20programme '+ pageInfo) ;
        }
    
    
