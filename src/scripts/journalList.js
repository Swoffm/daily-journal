
import makeJournalEntryComponent from "../scripts/journal.js"
import {journalEntry} from "../scripts/journalData.js"

const journalEntryList = () => {

    // const entryList = journalEntry

    // create an iterate on the list
    for (let entry of journalEntry) {
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