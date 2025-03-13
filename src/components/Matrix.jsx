import "../css/Matrix.css";

export const MatrixAll = ({ plants, plantCompatibility, plantAttributes }) => {
  if (!plants) {
    return <p>loading...</p>;
  }

  const companionPlants = (id1, id2) => {
    if (id1 == id2) {
      return "n/a";
    }

    let search_ids = [id1,id2].sort((a, b) => a - b).toString();
    let found = plantCompatibility.find(
      (item) => (item.plant_ids == search_ids)
    );

    if (found) {
      return <span className={found.compatible}>{found.compatible}</span>;
    } else {
      return <span className="neutral"></span>;
    }
  };

  const companionCellData = (rowId) => {
    const companionCells = plants.map((plant, index) => (
      <td key={"td" + rowId + plant.id} className={index % 2 === 0 ? 'altRowColor' : ''}>
        {companionPlants(rowId, plant.id)}
      </td>
    ));
    return companionCells;
  };

  const headerLabels = () => {
    const labels = plants.map((plant) => (
      <th key={"th" + plant.id}>{plant.name}</th>
    ));
    return labels;
  };
  const rowData = () => {
    const rows = plants.map((plant) => (
      <tr key={"row" + plant.id}>
        <td className="leftCol">{plant.name}</td>
        {companionCellData(plant.id)}
      </tr>
    ));
    return rows;
  };

  return (
    <div className="fullMatrixContainer">
      <table className="fullMatrix">
        <thead>
          <tr>
            <th className="leftCol">PLANTS</th>
            {headerLabels()}
          </tr>
        </thead>
        <tbody>{rowData()}</tbody>
      </table>
    </div>
  );
};
