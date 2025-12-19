// Safen User Input Part I - htmlspecialchars
// You are a(n) novice / average / experienced / professional / world - famous Web Developer(choose one) who owns a(n) simple / clean / slick / beautiful / complicated / professional / business website(choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease.However, with ease comes danger.Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS(Cross Site Scripting).This is done by injecting script tags into the website through form fields which may contain malicious code(e.g.a redirection to a malicious website that steals personal information).

//     Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> & lt;
// > --> & gt;
// " --> &quot;
//     & --> & amp;



function htmlspecialchars(formData) {
    result = "";
    for (let i = 0; i < formData.length; i++) {
        if (formData[i] === "<") {
            result += "&lt;"
        }
        else if (formData[i] === ">") {
            result += "&gt;"
        }
        else if (formData[i] === "&") {
            result += "&amp;";
        }
        else if (formData[i] === '"') {
            result += "&quot;";
        }
        else {
            result += formData[i]
        }
    }
    return result

}

console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("Hello, how would you & I fare?"))
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'))
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"))