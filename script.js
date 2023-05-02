function Insert(){
    let JudgementNumber = document.getElementById("JudgementNumber").value;
    let Citations = document.getElementById("Citations").value;
    let NameofCourt = document.getElementById("NameofCourt").value;
    let NameofJudges = document.getElementById("NameofJudges").value;

   let tables = `<tr>
                <td>${JudgementNumber}</td>
                <td>${Citations}</td>
                <td>${NameofCourt}</td>
                <td>${NameofJudges}</td>
                </tr>
   
   `
   document.getElementById("table").innerHTML += tables;




}