const MeanigsDefinitions = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li className="meaning">{def.definition}</li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default MeanigsDefinitions;
