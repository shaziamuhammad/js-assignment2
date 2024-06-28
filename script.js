document.addEventListener('DOMContentLoaded', function() {
    // Task 1
    let num = 10;
    let task1Output = `
        <h2>Result:</h2>
        <p>The value of num is: ${num}</p>
        <p>-----------------------------------------------</p>
        <p>The value of ++num is: ${++num}<br>Now value of num is: ${num}</p>
        <p>The value of num++ is: ${num++}<br>Now value of num is: ${num}</p>
        <p>The value of --num is: ${--num}<br>Now value of num is: ${num}</p>
        <p>The value of num-- is: ${num--}<br>Now value of num is: ${num}</p>
        <br><br><br><br><br>`;
    document.getElementById('task1').innerHTML = task1Output;

    // Task 2
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    let task2Output = `
        <h2>Result:</h2>
        <p>The value of a is: ${a}</p>
        <p>The value of b is: ${b}</p>
        <p>The result is: ${result}</p>
        <br>`;
    document.getElementById('task2').innerHTML = task2Output;

    // Task 3
    let name = prompt("Enter your name:");
    let task3Output = `<p>Hello ${name}!</p><br><br><br>`;
    document.getElementById('task3').innerHTML = task3Output;

    // Task 4
    let num1 = prompt("Enter a number:");
    if (num1 === null || num1 === "") {
        num1 = 5;
    }
    let task4Output = `<p>Multiplication table of ${num1} is:</p><br>`;
    for (let i = 1; i <= 10; i++) {
        task4Output += `<p>${num1} x ${i} = ${num1 * i}</p>`;
    }
    task4Output += `<br><br><br><br>`;
    document.getElementById('task4').innerHTML = task4Output;

    // Task 5
    let sub1 = prompt("Enter subject 1:");
    let sub2 = prompt("Enter subject 2:");
    let sub3 = prompt("Enter subject 3:");

    let totalMarks = 100;

    let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${sub1}:`));
    let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${sub2}:`));
    let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${sub3}:`));

    let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    let task5Output = `
        <table border='1'>
            <tr>
                <th>Subject</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                <td>${sub1}</td>
                <td>${obtainedMarks1}</td>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <td>${sub2}</td>
                <td>${obtainedMarks2}</td>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <td>${sub3}</td>
                <td>${obtainedMarks3}</td>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>${totalObtainedMarks}</th>
                <th>${totalMarks * 3}</th>
            </tr>
            <tr>
                <th>Percentage</th>
                <th colspan='2'>${percentage.toFixed(2)}%</th>
            </tr>
        </table>`;
    document.getElementById('task5').innerHTML = task5Output;
});
