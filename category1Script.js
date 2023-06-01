const category = "Race Results";
document = "category1.html";
var q;
var a;
var b;
var c;
var d;
var ans;
async function sendMessage(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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', // Replace with your API key
      },
      body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
      }),
    });
const data = await response.json();

    //console.log(response.choices[0].message.content);
    // Process the response
    const reply = data.choices[0].message.content;
    console.log(reply);
    //var sr = reply.substr(reply.indexOf("1)"), reply.indexOf("?"));
    //console.log(" " + sr);
    /*const array = reply.split(reply.indexOf("?"));
    for(let i = 0; i<array.length; i++){
      console.log(array[i].toString());
    }*/
    console.log();
    reply.toUpperCase();

    q = reply.substring(0,reply.indexOf('?')+1);
    a = reply.substring(reply.indexOf("A)"),reply.indexOf("B)"));
    b = reply.substring(reply.indexOf("B)"),reply.indexOf("C)"));
    c = reply.substring(reply.indexOf("C)"),reply.indexOf("D)"));
    d = reply.substring(reply.indexOf("D)"), reply.indexOf("Answer ="));
    ans = reply.substring(reply.indexOf("=") + 1, reply.length);
    console.log(q);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(ans);
    //reply1 = " " + reply;
    console.log('ChatGPT:', reply);
}

sendMessage("Create a 1 new Formula 1 questions about the race results, give 4 possible options and the answer letters in all caps and give the correct answer by saying answer = :").then(() => {
      document.getElementById("question").innerText = "Question: " + q;
      document.getElementById("ans 1").innerText = a;
      document.getElementById("ans 2").innerText = b;
      document.getElementById("ans 3").innerText = c;
      document.getElementById("ans 4").innerText = d;
      console.log("ans" + ans);
      document.getElementById('ans 1').addEventListener("click", function() {
        console.log("clicked");
        var button1Text = document.getElementById("ans 1").innerText;
        check();
        if (button1Text === ans) {
          points++;
          document.getElementById("question").innerText = "Score: " + points + "/10";
        }
      });
      document.getElementById('ans 2').addEventListener("click", function() {
        var button1Text = document.getElementById("ans 1").innerText;
        check();
        if (button1Text === ans) {
          points++;
          document.getElementById("question").innerText = "Score: " + points + "/10";
        }
      });
      document.getElementById('ans 3').addEventListener("click", function() {
        var button1Text = document.getElementById("ans 1").innerText;
        check();
        if (button1Text === ans) {
          points++;
          document.getElementById("question").innerText = "Score: " + points + "/10";
        }
      });
      document.getElementById('ans 4').addEventListener("click", function() {
        var button1Text = document.getElementById("ans 1").innerText;
        check();
        if (button1Text === ans) {
          points++;
          document.getElementById("question").innerText = "Score: " + points + "/10";
        }
      });



  function check() {
    var A = document.getElementById("ans 1");
    var B = document.getElementById("ans 2");
    var C = document.getElementById("ans 3");
    var D = document.getElementById("ans 4");
    
  }
});

/*q = reply.substr(reply.indexOf("1"), reply.indexOf("?"));
console.log(q);*/