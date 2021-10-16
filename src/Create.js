const Create = () => {
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required></input>

        <label>Blog Body:</label>
        <textarea required></textarea>

        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yusuf">yusuf</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
