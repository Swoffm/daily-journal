
import makeJournalEntryComponent from "../scripts/journal.js"
import API from "../scripts/journalData.js"

const journalEntryList = () => {

    const entryLocation = document.querySelector(".entryLog")
    entryLocation.innerHTML = ""
    document.querySelector("#journalEntry").value = ""
    document.querySelector("#concepts").value = ""
    document.querySelector("#journalDate").value = ""


    // create an iterate on the list
    for (let entry of API.journalEntry) {

        // convert
        const convertedEntry = makeJournalEntryComponent(entry)
        // find location

        // adding to the location
        entryLocation.innerHTML += convertedEntry
    }

}

export default journalEntryList