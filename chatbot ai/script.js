const btn=document.querySelector(".btn")
const  content=document.querySelector(".content")

btn.addEventListener("click",function(){
    let prompt=document.querySelector(".prompt").value;
    getdata(prompt)
})

async function getdata(prompt) {

    const res =await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer <YOURAPIKEY>',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'tngtech/deepseek-r1t2-chimera:free',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        }),
    });

    const data=await res.json();
    console.log(data.choices[0].message.content);
    content.textContent=data.choices[0].message.content;

}

// getdata()