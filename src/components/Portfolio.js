import React, { Component } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import MaterialTable from "material-table";

import { dataArea } from '../db'

class Portfolio extends Component {
  render() {

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-12">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Performance Investements</h4>
                  <p className="card-category">Current Year</p>
                </div>
                <div className="card-body ">
                  <AreaChart
                    width={1500}
                    height={400}
                    data={dataArea}
                    margin={{
                      top: 10, right: 30, left: 0, bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div style={{ maxWidth: "100%" }}>
              <MaterialTable
                columns={[
                  { title: "Sector", field: 'sector' },
                  { title: "Purchase Price",  field: 'purchasePrice'},
                  { title: "Current Price", field: 'currentPRice' },
                  { title: "Sector Evaluation", field: 'sectorEvaluation' },
                ]}
                options={{
                  search: true
                }}
                data={[
                  {
                    sector: "Lorem ipsum",
                    purchasePrice: 2.50,
                    currentPRice: 3.50,
                    sectorEvaluation: 630,
                  },
                  {
                    sector: "dolor sit amet",
                    purchasePrice: 4.50,
                    currentPRice: 5.50,
                    sectorEvaluation: 800,
                  },
                  {
                    sector: "consectetur adipiscing elit",
                    purchasePrice: 9.50,
                    currentPRice: -7.50,
                    sectorEvaluation: 500,
                  },
                  {
                    sector: "Ut enim ad minim",
                    purchasePrice: 4.50,
                    currentPRice: 3.50,
                    sectorEvaluation: 600,
                  },
                  {
                    sector: "quis nostrud",
                    purchasePrice: 9.50,
                    currentPRice: 8.50,
                    sectorEvaluation: 500,
                  },
                  {
                    sector: "Duis aute irure",
                    purchasePrice: 6.50,
                    currentPRice: -5.50,
                    sectorEvaluation: 100,
                  },
                  {
                    sector: "Excepteur sint occaecat",
                    purchasePrice: 3.50,
                    currentPRice: 4.50,
                    sectorEvaluation: 730,
                  },
                ]}
                title="Summary"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio