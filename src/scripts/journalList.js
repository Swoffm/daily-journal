
import makeJournalEntryComponent from "../scripts/journal.js"
import journalDataObject from "../scripts/journalData.js"

const journalEntryList = () => {

    // const entryList = journalEntry

    // create an iterate on the list
    for (entry of journalDataObject.journalEntry) {
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

export default journalEntryList