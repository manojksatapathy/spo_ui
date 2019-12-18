import React, {Component, useState } from 'react';
import ScenarioTable from './ScenarioTable';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import ScenarioConstant from './ScenarioConstant';
import downloadIcon from "../../image/download.png";
import viewIcon from "../../image/eye-icon.png";
import setActiveIcon from "../../image/set-active.png";
import deleteIcon from "../../image/delete.png";
import moment from 'moment';
import axios from 'axios';

  const LoadingIndicator = props => {
    console.log(props);
    if(props.show)
    return (
      <DataTableSkeleton
        columnCount={headers.length + 1}
        rowCount={10}
        headers={headers}
      />
    );  
  }

  const headers = [
    {
      key: 'name',
      header: 'NAME',
    },
    {
      key: 'author',
      header: 'AUTHOR',
    },
    {
      key: 'temporalHorizon',
      header: 'TEMPORAL HORIZON',
    },
    {
      key: 'createdDate',
      header: 'CREATED DATE',
    },
    {
      key: 'lastModified',
      header: 'LAST MODIFIED',
    },
    {
      key: 'status',
      header: 'STATUS',
    },
    {
      key: 'links',
      header: '',
    },
  ];
  const ScenarioLinkList = () => (
    <ul style={{ display: 'flex' }}>
      <li style={{ padding: "5px", cursor: "pointer" }}>
        <Link href={'#'}><img src={downloadIcon} /></Link>
      </li>
      <li style={{ padding: "5px", cursor: "pointer" }}>
        <Link href={'#'}><img src={viewIcon} /></Link>
      </li>
      <li style={{ padding: "5px", cursor: "pointer" }}>
        <Link href={'#'}><img src={setActiveIcon} /></Link>
      </li>
      <li style={{ padding: "5px", cursor: "pointer" }}>
        <Link href={'#'}><img src={deleteIcon} /></Link>
      </li>
    </ul>
  );
  const parseDate = date =>{
    console.log(date);
    return moment(new Date(date.substr(0, 16))).format("YYYY-MM-DD");
  }
  const getScenarioRowItems = rows =>
    rows.map(row => ({
      ...row,
      key: row.id,
      name: row.name,
      author: row.author.firstName,
      temporalHorizon: parseDate(row.temporalHorizon),
      lastModified: parseDate(row.lastModified),
      createdDate: parseDate(row.createdDate),
      status: row.status,
      links: <ScenarioLinkList />,
    }));
  const getAllScenarios = () => {
    //return axios.get("https://localhost:9443/ibm/spo/api/v1/scenario/all")
    return axios.get("/ibm/spo/api/v1/scenario/all")
    //return axios.get("https://SPOAPI:9443/ibm/spo/api/v1/scenario/all")
      .then(datas => {
        console.log(datas);
        return getScenarioRowItems(datas.data);
        //LoadingIndicator({show: false});
      }).catch(error => {
        console.log(error);
        return (
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        );
      });
  };
  
  const ScenarioList = data => {
    console.log(data);
    if(data.length === 0){
      return (
        <DataTableSkeleton
          columnCount={headers.length + 1}
          rowCount={10}
          headers={headers}
        />
      );
    }
    const WithStateComponent = () => {
      const [totalItems, setTotalItems] = useState(0);
      const [firstRowIndex, setFirstRowIndex] = useState(0);
      const [currentPageSize, setCurrentPageSize] = useState(10);
      const { totalCount, nodes } = ScenarioConstant;  
      const rows = data;
      console.log(rows);
      return (
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter scenario-page">
          <div className="bx--row scenario-page__r1">
              <div className="bx--col-lg-16">  
                <>
                <ScenarioTable
                    headers={headers}
                    rows={rows.slice(
                    firstRowIndex,
                    firstRowIndex + currentPageSize
                    )}
                />
                <Pagination
                  //totalItems={totalItems}
                  totalItems={totalCount}
                  backwardText="Previous page"
                  forwardText="Next page"
                  pageSize={currentPageSize}
                  pageSizes={[5, 10, 15, 25]}
                  itemsPerPageText="Items per page"
                  onChange={({ page, pageSize }) => {
                    if (pageSize !== currentPageSize) {
                      setCurrentPageSize(pageSize);
                    }
                    setFirstRowIndex(pageSize * (page - 1));
                  }}
                />
                </>
            </div>
          </div>
        </div>
      );
    }
    return <WithStateComponent />;
  }
/* const Scenario = () => {
  return (
    getAllScenarios().then((data) => {
       ScenarioList(data);
    }));
} */
export default class Scenario extends Component {
  constructor() {
    super();
    this.state = {
      data:[] 
    };
    getAllScenarios().then((data) => {
      console.log(data);
      this.setState({data: data})
    });
  }
  render(){
    if(this.state.data)
    return(
      ScenarioList(this.state.data)   
    );
  }
} 
//export default Scenario;