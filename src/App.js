import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table, {
  FridayInTimeEditableCell,
  FridayNightEditableCell,
  FridayOutTimeEditableCell,
  GetEmployeeEditableCell,
  GetJobEditableCell,
  MondayInTimeEditableCell,
  MondayNightEditableCell,
  MondayOutTimeEditableCell,
  SaturdayInTimeEditableCell,
  SaturdayNightEditableCell,
  SaturdayOutTimeEditableCell,
  SundayInTimeEditableCell,
  SundayNightEditableCell,
  SundayOutTimeEditableCell,
  ThursdayInTimeEditableCell,
  ThursdayNightEditableCell,
  ThursdayOutTimeEditableCell,
  TuesdayInTimeEditableCell,
  TuesdayNightEditableCell,
  TuesdayOutTimeEditableCell,
  WednesdayInTimeEditableCell,
  WednesdayNightEditableCell,
  WednesdayOutTimeEditableCell,
} from "./Components/Table";
import "./App.css";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function App() {
  const [JobType, setJobType] = useState();
  const [JobTypeValue, setJobTypeValue] = useState();
  console.log("JobTypeValue", JobTypeValue);
  const GetTableData = () => {
    axios
      .get("http://localhost:8090/timeSheet/getEmployeesTimeSheetData")
      .then((res) => {
        setData(res.data);
        console.log("DATA", res.data);
      });
  };
  const GetJobType = () => {
    axios
      .get("http://localhost:8090/timeSheet/getContractNumber")
      .then((res) => {
        setJobType(res.data);
      });
  };

  useEffect(() => {
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    console.log("WEEK", result);
    axios.post("http://localhost:8090/timeSheet/posttruncateTableBasedOnWeek", {
      pCurrentWeekNo: `${result}`,
    });
    GetTableData();
    GetJobType();
  }, []);
  const [Data, setData] = useState();
  const [Loader, setLoader] = useState(false);
  const SubmitTable = () => {
    setLoader(true);
    console.log("Data", Data);
    axios
      .post("http://localhost:8090/timeSheet/persistsWeeklyTimeSheet", Data)
      .then((res) => {
        console.log(res);
        setLoader(false);
        GetTableData();
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  const DeleteRow = (value) => {
    const Index = value.row.original.pWeeklyTimesheetID;
    axios
      .post("http://localhost:8090/timeSheet/deleteBasedOnWeeklyTimeSheetId", {
        pWeeklyTimesheetID: Index,
      })
      .then((res) => {
        GetTableData();
      });
  };
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };
  const AddRow = () => {
    const DataCopy = [...Data];
    DataCopy.push({
      pWeeklyTimesheetID: "0",
      pEmployeeID: "",
      pContractID: "",
      pSatStart: "",
      pSatEnd: "",
      pSatNight: "0",
      pSunStart: "",
      pSunEnd: "",
      pSunNight: "0",
      pMonStart: "",
      pMonEnd: "",
      pMonNight: "0",
      pTuesStart: "",
      pTuesEnd: "",
      pTuesNight: "0",
      pWedStart: "",
      pWedEnd: "",
      pWedNight: "0",
      pThurStart: "",
      pThurEnd: "",
      pThurNight: "0",
      pFriStart: "",
      pFriEnd: "",
      pFriNight: "0",
    });
    setData(DataCopy);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Select",
        columns: [
          {
            Header: "Job Type",
            accessor: "pContractID",
            Cell: GetJobEditableCell,
          },
          {
            Header: "Employee Name",
            accessor: "pEmployeeID",
            Cell: GetEmployeeEditableCell,
          },
        ],
      },
      {
        Header: "Monday",
        columns: [
          {
            Header: "In",
            accessor: "pMonStart",
            Cell: MondayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pMonEnd",
            Cell: MondayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pMonNight",
            Cell: MondayNightEditableCell,
          },
        ],
      },
      {
        Header: "Tuesday",
        columns: [
          {
            Header: "In",
            accessor: "pTuesStart",
            Cell: TuesdayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pTuesEnd",
            Cell: TuesdayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pTuesNight",
            Cell: TuesdayNightEditableCell,
          },
        ],
      },
      {
        Header: "Wednesday",
        columns: [
          {
            Header: "In",
            accessor: "pWedStart",
            Cell: WednesdayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pWedEnd",
            Cell: WednesdayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pWedNight",
            Cell: WednesdayNightEditableCell,
          },
        ],
      },
      {
        Header: "Thursday",
        columns: [
          {
            Header: "In",
            accessor: "pThurStart",
            Cell: ThursdayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pThurEnd",
            Cell: ThursdayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pThurNight",
            Cell: ThursdayNightEditableCell,
          },
        ],
      },
      {
        Header: "Fri",
        columns: [
          {
            Header: "In",
            accessor: "pFriStart",
            Cell: FridayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pFriEnd",
            Cell: FridayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pFriNight",
            Cell: FridayNightEditableCell,
          },
        ],
      },
      {
        Header: "Saturday",
        columns: [
          {
            Header: "In",
            accessor: "pSatStart",
            Cell: SaturdayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pSatEnd",
            Cell: SaturdayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pSatNight",
            Cell: SaturdayNightEditableCell,
          },
        ],
      },
      {
        Header: "Sunday",
        columns: [
          {
            Header: "In",
            accessor: "pSunStart",
            Cell: SundayInTimeEditableCell,
          },
          {
            Header: "Out",
            accessor: "pSunEnd",
            Cell: SundayOutTimeEditableCell,
          },
          {
            Header: "Night Shift",
            accessor: "pSunNight",
            Cell: SundayNightEditableCell,
          },
        ],
      },
      {
        Header: "Weekly Hours",
        accessor: "WeeklyHours",
      },
      {
        Header: "Action",
        Cell: (value) => (
          <button
            type="button"
            style={{
              backgroundColor: "#C81A16",
              color: "white",
              padding: "4px 8px",
            }}
            onClick={() => DeleteRow(value)}
          >
            Delete
          </button>
        ),
      },
    ],
    [Data]
  );
  console.log("DATA", Data);
  const onChange = (e) => {
    setJobTypeValue(e.target.value);
    // axios.post("", JobTypeValue).then(res=>{
    //   setData(res.data)
    // }).catch(err=>{
    //   console.log("Error",err)
    // })
  };

  return (
    <Styles>
      <div
        style={{
          marginBottom: "10px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          className="buttonSaveTable"
          type="button"
          onClick={() => AddRow()}
        >
          Add Employee Data
        </button>
        {/* Loader */}
        {Loader ? (
          <div className="loader" style={{ marginLeft: "50px" }}></div>
        ) : (
          <button
            className="buttonAddEmployee"
            type="button"
            onClick={SubmitTable}
            style={{ marginLeft: "10px" }}
          >
            Save Schedule
          </button>
        )}
        <select
          style={{ marginLeft: "10px", borderRadius: "12px" }}
          value={JobTypeValue}
          onChange={onChange}
        >
          <option selected value="0">
            Choose
          </option>
          {JobType?.map((job, index) => (
            <option key={index} value={job.ContractID}>
              {job.ContractNo}
            </option>
          ))}
        </select>
      </div>
      <Table
        columns={columns}
        data={Data === undefined ? [] : Data}
        updateMyData={updateMyData}
      />
    </Styles>
  );
}

export default App;
