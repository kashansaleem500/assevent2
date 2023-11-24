       // Assignment(Event) 49 to 52
       // Ques 1 
       document.getElementById('subForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let data2 = document.getElementById('data2').value;
        
        let submittedDataDiv = document.getElementById('submittedData');
        submittedDataDiv.innerHTML = `
        <h2>Data Here: ${data2}</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        `;
    });

    // Ques 2

    function read(button) {
        let item = button.parentNode;
        let fullPara = item.querySelector('.fullPara');
    
        if (fullPara.style.display === 'none') {
            fullPara.style.display = '';
            button.textContent = 'Read less';
        } else {
            fullPara.style.display = 'none';
            button.textContent = 'Read more';
        }
    }


    // Ques 3 


    var getul = document.getElementById('ul')
    function abc(){
        var a = document.getElementById('inp')
        var li = document.createElement('li')
        var litext = document.createTextNode(a.value)
        li.appendChild(litext)
        getul.appendChild(li)
        a.value = ''
        var delbtn = document.createElement('button')
        var delbtnText = document.createTextNode('Delete')
        delbtn.appendChild(delbtnText)
        li.appendChild(delbtn)
        delbtn.setAttribute('onclick','dee(this)')
        var editbtn = document.createElement('Button')
        var editbtnText = document.createTextNode('Edit')
        editbtn.appendChild(editbtnText)
        li.appendChild(editbtn)
        editbtn.setAttribute('onclick','edfun(this)')
        
        delbtn.setAttribute('class','btn btn-warning bta')
        editbtn.setAttribute('class','btn btn-info bta')
       
    }
    
    function deall(){
        getul.innerHTML = ''
    }
    
    function dee(e){
        e.parentNode.remove()
    }
    
    function edfun(e){
        var a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue = a
    }
    
