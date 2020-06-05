

const journalEntryList = () => {

    // const entryList = journalEntry

    // create an iterate on the list
    for (entry of journalEntry) {
        // convert
        const convertedEntry = makeJournalEntryComponent(entry)
        // find location
        const entryLocation = document.querySelector(".entryLog")
        // adding to the location
        entryLocation.innerHTML += convertedEntry
    }

    //find a location


    //place it in the location



}