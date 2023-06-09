import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function EmptyCsv({ filename = 10 }) {
  const [data, setData] = useState([]);
  const [, setSearchTerms] = useState({});
  const [leastFilledRows, setLeastFilledRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/data/${filename}`);
      const jsonData = await response.json();
      setData(jsonData);
      setSearchTerms(
        Object.keys(jsonData[0]).reduce((acc, key) => {
          acc[key] = '';
          return acc;
        }, {}),
      );
    };

    fetchData();
  }, [filename]);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const rowStats = [];

    data.forEach((row, index) => {
      let filledCount = 0;
      let totalCount = 0;

      for (const [, value] of Object.entries(row)) {
        const trimmedValue = value?.trim();
        totalCount++;

        if (trimmedValue !== '') {
          filledCount++;
        }
      }

      const percentFilled = (filledCount / totalCount) * 100;
      rowStats.push({ index, percentFilled });
    });

    const sortedRows = rowStats.sort((a, b) => {
      return a.percentFilled - b.percentFilled;
    });

    setLeastFilledRows(sortedRows.slice(0, 10));
  }, [data]);

  return (
    <div>
      <h1>Analyse du fichier CSV &quot;{filename}&quot;</h1>
      <h2>Enregistrements les moins complets :</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Champ 1</h3>
              </TableCell>
              <TableCell>
                <h3>Taux de remplissage</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leastFilledRows.map((row) => (
              <TableRow key={row.index}>
                <TableCell>
                  {data[row.index][Object.keys(data[row.index])[0]]}
                </TableCell>
                <TableCell>{row.percentFilled.toFixed(2)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmptyCsv;
