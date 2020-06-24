import factoryJournalEntry from "./createEntry.js";
import API from "./journalData.js";
import journalEntryList from "./journalList.js"

const clearTheField = () => {
    document.querySelector("#mood").value = ""
    document.querySelector("#journalEntry").value = ""
    document.querySelector("#concepts").value = ""
    document.querySelector("#journalDate").value = ""
    document.querySelector("#hiddenIdValue").value = ""
}
let userObject;
const saveButtonEvent = () => {

    const saveButtonLocation = document.querySelector("#saveEntry");
    saveButtonLocation.addEventListener("click", clickEvent => {
        clickEvent.preventDefault()
        let userMood = document.querySelector("#mood").value
        let userJournalEntry = document.querySelector("#journalEntry").value
        let userConcepts = document.querySelector("#concepts").value
        let userJournalDate = document.querySelector("#journalDate").value
        let userID = document.querySelector("#hiddenIdValue").value

        if (userMood === "") {
            alert("Missing a mood")
        }
        else if (userJournalEntry === "") {
            alert("Missing a Journal Entry")
        }
        else if (userConcepts === "") {
            alert("Missing a Concept Entry")
        }
        else if (userJournalDate === "") {
            alert("Missing a journal date")
        }


        if (userID == "" && userMood !== "" && userJournalEntry !== "" && userConcepts !== "" && userJournalDate !== "") {


            userObject = factoryJournalEntry(userJournalDate, userConcepts, userJournalEntry, userMood)


            API.saveJournalEntry(userObject).then(() => {
//this will get the JournalData and then list
                API.getJournalData()
                    .then(() => {

                        journalEntryList()

                    })

            })

        }

        else if (userID !== "") {

            
            API.updateEditJournalData(userID, factoryJournalEntry(userJournalDate, userConcepts, userJournalEntry, userMood))
            .then(() => {
//here we clear the fields first
//API.getJournaldata is called so the page will refresh
//after the get is executed it will the execute journalEntryList
//upon journal entryList being excuted the page will update the DOM

                clearTheField()
                API.getJournalData()
                .then(() => {

                    journalEntryList()

                })

                
                // journalEntryList()
            })
        }


        //below is the what will be excuted if userObject has an ID

    }
    )
}

export default saveButtonEvent
