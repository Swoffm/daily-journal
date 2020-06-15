


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
    
    </ul>
    </section>`

    return stringTemplate
}

export default makeJournalEntryComponent


