

const CreateEmergenciesTable = ()=>{

    const Name_and_Emergencies = [];

    const forma3 = JSON.parse(localStorage.getItem("forma3"));
    const forma3_table = JSON.parse(localStorage.getItem("forma3_table"));

    const findRow = (name)=>{
        for(let i=0; i<forma3_table.length; i++){
            if(forma3_table[i].name === name){
                return forma3_table[i];
            }
        }
    }
    
    if(forma3.AC6_2.length !== 0){
        for(let i = 0; i < forma3.AC6_2.length; i++){
            Name_and_Emergencies.push({
                "No." : Name_and_Emergencies.length+1,
                "Name" : forma3.AC6_2[i],
                "Age" : findRow(forma3.AC6_2[i])?.age,
                "MemberID" : findRow(forma3.AC6_2[i])?.MemberID,
                "Emergency" : "Trauma",
            })
        }
    }

    localStorage.setItem("Name_and_Emergencies", JSON.stringify(Name_and_Emergencies));
}

export default CreateEmergenciesTable;