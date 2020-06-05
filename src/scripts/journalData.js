let journalEntry = [] 


const getJournalData = () => {
    return fetch("http://localhost:8088/entries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfEntries) => {
                // 100 percent sure the data is back
                journalEntry = arrayOfEntries
            }
        )
}