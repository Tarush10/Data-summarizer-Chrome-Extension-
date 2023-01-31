// fetch('https://text-summarizer1.p.rapidapi.com/summarize')
//     .then(data => data.json())
//     .then(textData =>{
//         const text = textData.message;
//         const txt = document.getElementById('txt');

//         txt.innerHTML = text;
//     })

const form = document.getElementById('myForm');
    const inputField = document.getElementById('mytext');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const inputValue = inputField.value;
    });


    const encodedParams = new URLSearchParams();
    encodedParams.append("text", inputValue);
    encodedParams.append("sentnum", "5");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '55ccc9867emsh74fcb4a081068adp1fd3cejsncbed375a43c8',
            'X-RapidAPI-Host': 'textanalysis-text-summarization.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text', options)
        .then(response => response.json())
        .then(textData =>{
            const text = textData.message;
            const txt = document.getElementById('txt');
    
            txt.innerHTML = text;
        })


    