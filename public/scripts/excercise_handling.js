function printExc()
{
    let excName =document.getElementById("exc_name").value;
    let excReps = parseInt(document.getElementById("exc_reps").value);
    let excObj = {"name":excName, "reps":excReps};

    console.log(JSON.stringify(excObj));
    
}