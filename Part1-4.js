//Part 2
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 
	console.log(char)

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}
console.log(table);

//Part3
table = [
   ["ID", "Name", "Occupation", "Age"],
   ["42", "Bruce", "Knight", "41"],
   ["57", "Bob", "Fry Cook", "19"],
   ["63", "Blaine", "Quiz Master", "58"],
   ["98", "Bill", "Doctor’s Assistant", "26"]
]

let newTable= [];

for (let i = 1; i < table.length; i++){
//    let row = table[i]
   let obj= {
      id:           table[i][0],
      name:         table[i][1],
      occupation:   table[i][2],
      age:          table[i][3],
   };
   newTable.push(obj);   
}
console.log(newTable);

//Part 4
newTable = [
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19'},
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'}, 
    {id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'}
    
    ]
    
    newTable.pop()
    let arrL ={ id: "7", name: "Bilbo", occupation: "None", age: "111" } 
    let arrB= { id: "48", name: "Barry", occupation: "Runner", age: "25" }
    newTable.push(arrL)
    newTable.splice(1,0,arrB)
    console.log(newTable);

        let avgAge = 0;
        let sum = 0;
        for(let i=0; i< newTable.length; i++){
            sum = sum + parseInt(newTable[i].age) // parseint converst a string into a integer. 
    }
    avgAge = sum/newTable.length; 
    console.log(avgAge)

    // part 5
    let newChar = ""
    for(let i=0; i < newTable.length; i++){
        newChar += newTable[i].id + "," + newTable[i].name + "," + newTable[i].occupation+ "," + newTable[i].age
    }
    console.log(newChar)

