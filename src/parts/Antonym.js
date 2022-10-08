const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 antonym">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.antonyms?.map((ant) => <li>{ant}</li>);
          })
        )
      )}
    </div>
  );
};

export default Antonym;
