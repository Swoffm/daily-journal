import factoryJournalEntry from "./createEntry.js";
import API  from "./journalData.js";
import journalEntryList from "./journalList.js"

// import journalEntryList from "../scripts/journalList.js"

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/


const makeJournalEntryComponent = (myJournalEntry) => {
    // Create your own HTML structure for a journal entry

    const stringTemplate = `<section class="journalEntry">
    <ul class="journalEntry__List">
    <li class="list__Date">Date: ${myJournalEntry.date}</li>
    <li class="list__Concepts">Concepts: ${myJournalEntry.concepts}</li>
    <li class="list__JournalEntry">Journal Entry: ${myJournalEntry.journalEntry}</li>
    <li class="list__Mood">Mood: ${myJournalEntry.mood}</li>
    <button id="delete--${myJournalEntry.id}">Delete</button>
    <button id="edit--${myJournalEntry.id}">Edit</button>
    
    </ul>
    </section>`

    return stringTemplate
}

let userObject;
const saveButtonEvent = () => {

    const saveButtonLocation = document.querySelector("#saveEntry");
    saveButtonLocation.addEventListener("click", clickEvent => {
        let userMood = document.querySelector("#mood").value
        let userJournalEntry = document.querySelector("#journalEntry").value
        let userConcepts = document.querySelector("#concepts").value
        let userJournalDate = document.querySelector("#journalDate").value

        // if (userMood === "") {
        //     alert("Missing a mood")
        // }
        // else if (userJournalEntry === "") {
        //     alert("Missing a Journal Entry")
        // }
        // else if (userConcepts === "") {
        //     alert("Missing a Concept Entry")
        // }
        // else if (userJournalDate === "") {
        //     alert("Missing a journal date")
        // }


        // if (userMood !== "" && userJournalEntry !== "" && userConcepts !== "" && userJournalDate !== "") {

            
            userObject = factoryJournalEntry(userJournalDate, userConcepts, userJournalEntry, userMood)
            
            console.log("before", userObject)
            API.saveJournalEntry(userObject).then(() => {
                journalEntryList()
                // API.getJournalData()
            })
            // API.getJournalData()
            .then(() => {
                console.log("inside the then")
                // journalEntryList()
                API.getJournalData()

            })
            // journalEntryList()
            console.log("lion", userObject)

        // }
       // journalEntryList()
    }
    )
}






export default makeJournalEntryComponent
export { saveButtonEvent }


