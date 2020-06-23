 

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
     
       
   }
}

export default API;