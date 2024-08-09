import axios from "axios";
import React from "react";
import { useTable } from "react-table";
import TimePicker from "react-time-picker";

export const GetEmployeeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const [Employee, setEmployee] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  React.useEffect(() => {
    axios.get("http://localhost:8090/timeSheet/getEmployeesName").then((res)=>{
      setEmployee(res.data);
    })
  }, []);

  return (
    <select value={Value} onChange={onChange} onBlur={onBlur}>
      <option selected value="0">
        Choose
      </option>
      {Employee?.map((emp, index) => (
        <option key={index} value={emp.EmployeeID}>
          {`${emp.FirstName} ${emp.MiddleName} ${emp.LastName}`}
        </option>
      ))}
    </select>
  );
};

export const GetJobEditableCell = ({ value, column, row, updateMyData }) => {
  const [Value, setValue] = React.useState(value);
  const [Job, setJob] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  
  React.useEffect(() => {
    axios.get("http://localhost:8090/timeSheet/getContractNumber").then((res)=>{
      setJob(res.data);
    })
  }, []);

  return (
    <select value={Value} onChange={onChange} onBlur={onBlur}>
      <option selected value="0">
        Choose
      </option>
      {Job?.map((job, index) => (
        <option key={index} value={job.ContractID}>
          {job.ContractNo}
        </option>
      ))}
    </select>
  );
};

export const MondayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const TuesdayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const WednesdayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const ThursdayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const FridayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const SaturdayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const SundayNightEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);
  const onChange = (e) => {
    if (!e.target.checked) {
      setValue("0");
    } else {
      setValue("1");
    }
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <input
      type="checkbox"
      defaultChecked={Value === "1" ? true : false}
      value={Value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export const MondayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const TuesdayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const WednesdayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const ThursdayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const FridayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const SaturdayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const SundayInTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const MondayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const TuesdayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const WednesdayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const ThursdayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const FridayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const SaturdayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

export const SundayOutTimeEditableCell = ({
  value,
  column,
  row,
  updateMyData,
}) => {
  const [Value, setValue] = React.useState(value);

  const onChange = (time) => {
    setValue(time);
  };
  const onBlur = () => {
    updateMyData(row.index, column.id, Value);
  };

  return (
    <TimePicker
      onChange={onChange}
      clearIcon={false}
      onClockClose={onBlur}
      value={Value}
      locale="sv-sv"
    />
  );
};

function Table({ columns, data, updateMyData }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      updateMyData,
    });
  console.log("data", data);
  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
