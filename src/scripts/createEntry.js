let id = 3;
const factoryJournalEntry = (journalDate, journalConcepts, entry, userMood) => {
    let factoryJournalEntryObject = {
        // id: id++,
        date: journalDate,
        concepts: journalConcepts,
        journalEntry: entry, 
        mood: userMood
    }
    
    return factoryJournalEntryObject
}

export default factoryJournalEntry