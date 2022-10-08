const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 synonym">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.synonyms?.map((syn) => <li>{syn}</li>);
          })
        )
      )}
    </div>
  );
};

export default Synonym;
