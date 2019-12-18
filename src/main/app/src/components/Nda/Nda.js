import React, {Component, useState } from 'react';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import NDA_IN_TABLE from './NDA_IN_Table';
import NDA_OUT_TABLE from './NDA_OUT_Table';
import moment from 'moment';
import axios from 'axios';

const headers = [
    {
      key: 'idNda',
      header: 'Nda Id',
    },
    {
      key: 'assetName',
      header: 'Asset Name',
    },
    {
      key: 'assetDs',
      header: 'Asset Description',
    },
    {
        key: 'substation',
        header: 'Substation',
    },
    {
        key: 'maintenanceArea',
        header: 'Maintenance Area',
    },
    ,
    {
        key: 'geographicalArea',
        header: 'Geographical Area',
    },
    {
        key: 'nda_type',
        header: 'NdA Type',
    },
    {
        key: 'nda_type_ds',
        header: 'NdA Type Description',
    }
  ];

const getNDARowItems = rows =>
    rows.map(row => ({
      ...row,
      key: row.id,
      idNda: row.idNda,
      assetName: row.assetName,
      assetDs: row.assetDs,
      substation: row.substation,
      maintenanceArea: row.maintenanceArea,
      geographicalArea: row.geographicalArea,
      nda_type: row.nda_type,
      nda_type_ds: row.nda_type_ds
    }));
const getAllNDA = () => {
    return axios.get("/ibm/spo/api/v1/nda/all")
        .then(datas => {
        console.log(datas);
        return getNDARowItems(datas.data);
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
const NDA_IN = data => {
    if(data.data.length === 0){
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
        //const { totalCount, nodes } = ScenarioConstant; 
        const totalCount = data.data.length;
        const rows = data.data;
        console.log(rows);
        return (
          <div className="bx--grid bx--grid--full-width bx--grid--no-gutter scenario-page">
            <div className="bx--row scenario-page__r1">
                <div className="bx--col-lg-16">  
                  <>
                  <NDA_IN_TABLE
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
};
const NDA_OUT = data => {
  if(data.data.length === 0){
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
    //const { totalCount, nodes } = ScenarioConstant; 
    const totalCount = data.data.length;
    const rows = data.data;
    console.log(rows);
    return (
      <div className="bx--grid bx--grid--full-width bx--grid--no-gutter scenario-page">
        <div className="bx--row scenario-page__r1">
            <div className="bx--col-lg-16">  
              <>
              <NDA_OUT_TABLE
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
};
const NDA = data => {
    console.log(data);
    return (
    <div>
        <NDA_IN data={data}/>
        <NDA_OUT data={data}/>
    </div>
    );
}
export default class Nda extends Component {
    constructor(){
        super();
        this.state = {
            data:[] 
        };
        getAllNDA().then((data) => {
            console.log(data);
            this.setState({data: data})
        });
    }
    render(){
        if(this.state.data){
            console.log(this.state.data);
            return(
                NDA(this.state.data)
            );
        }
    }
}