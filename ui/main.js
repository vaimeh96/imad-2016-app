//counter code
var button=document.getElementById('counter');
button.onclick=function(){
var request = new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.done){
        if(request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
};
counter=counter+1;
request.open('GET','http://vaimeh96.imad.hasura-app.io/counter',true);
request.send(null);

};



//Submit name
var nameInput=document.getELementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit-btn');
submit.onclick=function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<name.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('name-list');
    ul.innerHTML=list;
}
