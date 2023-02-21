import "./text.css";

const TextComponent = (props) => {

    const {year, setYear, album, setAlbum, artist, setArtist, date, setDate, duration, setDuration, label, setLabel, genreTagOne,
    genreTagTwo, genreTagThree} = props;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case "year":
            setYear(value);
            break;
          case "album":
            setAlbum(value);
            break;
          case "artist":
            setArtist(value);
            break;
          case "date":
            setDate(value);
            break;
          case "duration":
            setDuration(value);
            break;
          case "label":
            setLabel(value);
            break;
        //   case "genreTagOne":
        //     setGenreTagOne(value);
        //     break;
        //   case "genreTagTwo":
        //     setGenreTagTwo(value);
        //     break;
        //   case "genreTagThree":
        //     setGenreTagThree(value);
        //     break;
          default:
            break;
        }
      };

    return (
        <div className="nav-content-container">
           <div className="text-container">
                <label>Font</label>
                <div className="text-select-container">
                    <select defaultValue="Verdana">
                        <option>Arial</option>
                        <option>Monospace</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div>
                <label>Year</label>
                <div className="text-input-container">
                    <input type="text" name="year" value={year} onChange={handleInputChange} />
                    {/* <select>
                        <option>1</option>
                        <option>2</option>
                    </select> */}
                </div>
                <label>Album</label>
                <div className="text-input-container">
                    <input type="text" name="album" value={album} onChange={handleInputChange} />
                    {/* <input type="text" name="city" list="citynames"/>
                        <datalist id="citynames">
                            <option value="Boston"></option>
                            <option value="Cambridge"></option>
                        </datalist> */}
                </div>
                <label>Artist</label>
                <div className="text-input-container">
                    <input type="text" name="artist" value={artist} onChange={handleInputChange} />
                </div>
                <label htmlFor="">Release Date:</label>
                <div className="text-input-container">
                    <input type="text" name="date" value={date} onChange={handleInputChange} />
                </div>
                <label htmlFor="">Duration:</label>
                <div className="text-input-container">
                    <input type="text" name="duration" value={duration} onChange={handleInputChange} />
                </div>
                <label>Label</label>
                <div className="text-input-container">
                    <input type="text" name="label" value={label} onChange={handleInputChange} />
                </div>
                <label>Genre #1</label>
                <div className="text-input-container">
                    <input type="text" value={genreTagOne}/>
                </div>
                <label>Genre #2</label>
                <div className="text-input-container">
                    <input type="text" value={genreTagTwo}/>
                </div>
                <label>Genre #3</label>
                <div className="text-input-container">
                    <input type="text" value={genreTagThree}/>
                </div>
            </div>
        </div>
    )
}

export default TextComponent;
