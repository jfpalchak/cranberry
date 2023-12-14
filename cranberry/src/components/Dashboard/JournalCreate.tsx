
export default function JournalCreate() {
  return (
    <div className="journal-create journal-card">
      <form>
        <div className="journal-form">
        <label>Entry Date:</label>
        <input type="date" />
        <label>Craving Intensity:</label>
        <input min="0" max="10" type="number" />
        <label>Did you smoke?</label>
        <input type="checkbox" />
        <label>How many?</label>
        <input type="number" />
        <label>Notes:</label>
        <textarea name="" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}