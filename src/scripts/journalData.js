 

 const API = {
    journalEntry: [],
   getJournalData: () => {
       return fetch("http://localhost:8088/entries").then(
           (httpResponse) => {
               return httpResponse.json()
           }
       )
           .then(
               (arrayOfEntries) => {
               //    journalEntry = []
               
                   // 100 percent sure the data is back
                   API.journalEntry = arrayOfEntries

               }
           )
   },


   saveJournalEntry: (newEntryObject) => {
       
       return fetch("http://localhost:8088/entries", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(newEntryObject)
       }).then(response => response.json());
     
       
   },
// to edit you must first pass in an id
//this id will go to entries and where the ID and return a response in a json format
//the edit itself is not happening here
   getSingleJournalData: (id) => {
    return fetch(`http://localhost:8088/entries/${id}`)
    .then(response => response.json());
   },
//the update is happening below with the put method
//the edited object is passed in an put at the id location
   updateEditJournalData: (id, editObject) => {
    return fetch(`http://localhost:8088/entries/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(editObject)
    })
   }
}

export default API;