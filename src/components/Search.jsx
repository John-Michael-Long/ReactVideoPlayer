var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={props.onTextChange} className="form-control" type="text" />
    <button onClick={() => props.onSearchClick(props.inputString)} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
