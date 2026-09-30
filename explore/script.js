
fetch("https://alfa-leetcode-api.onrender.com/heetpat_69/solved")
    .then(response => {
        console.log("HTTP Status:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("FULL API RESPONSE:", data);
    })
    .catch(error => {
        console.error("ERROR:", error);
    });
    fetch("https://alfa-leetcode-api.onrender.com/heetpat_69/solved")
    .then(response => {
        console.log("HTTP Status:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("FULL API RESPONSE:", data);

        document.getElementById("leetcode-solved").textContent = data.solvedProblem;
    })
    .catch(error => {
        console.error("ERROR:", error);

        document.getElementById("leetcode-solved").textContent = "N/A";
    });