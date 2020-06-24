//updating the entry boxes so it can appear back into the form

const updatingFormBox = (myObject) => {
        let userMood = document.querySelector("#mood")
        let userJournalEntry = document.querySelector("#journalEntry")
        let userConcepts = document.querySelector("#concepts")
        let userJournalDate = document.querySelector("#journalDate")
        let userId = document.querySelector("#hiddenIdValue")
//id date concepts journalEntry mood
        userId.value = myObject.id
        userMood.value = myObject.mood;
        userJournalEntry.value = myObject.journalEntry
        userConcepts.value = myObject.concepts
        userJournalDate.value = myObject.date
}

export default updatingFormBox