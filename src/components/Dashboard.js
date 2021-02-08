import React, { Component } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  BarChart, Bar,
} from 'recharts';
import CountUp from 'react-countup';

import { data, dataBar } from '../db'

class Dashboard extends Component {
  render() {

    return (
      <div className="content">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-3">
            <div className="card  mx-sm-1 p-3">
                <div className="text-dark text-center p-3" ><span className="fa fa-users fa-2x pb-3" aria-hidden="true"></span><h3 className="text">TOTAL USERS</h3></div>
                <div className="text-light text-center mt-2">
                <h1 className="text-dark"><CountUp
                    className="account-balance"
                    start={0}
                    end={2500}
                    duration={2.5}
                    useEasing={true}
                    useGrouping={true}
                /></h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card  mx-sm-1 p-3">
                <div className="text-dark text-center p-3" ><span className="fa fa-globe fa-2x pb-3" aria-hidden="true"></span><h3>ONLINE USERS</h3></div>
                <div className="text-light text-center mt-2">
                <h1 className="text-dark"><CountUp
                    className="account-balance"
                    start={0}
                    end={235}
                    duration={2.2}
                    useEasing={true}
                    useGrouping={true}
                /></h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card  mx-sm-1 p-3">
                <div className="text-dark text-center p-3" ><span className="fa fa-history fa-2x pb-3" aria-hidden="true"></span><h3>LAST MONTH</h3></div>
                <div className="text-light text-center mt-2">
                <h1 className="text-dark"><CountUp
                    className="account-balance"
                    start={0}
                    end={340}
                    duration={2.1}
                    useEasing={true}
                    useGrouping={true}
                /></h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card  mx-sm-1 p-3">
                <div className="text-dark text-center p-3" ><span className="fa fa-calendar fa-2x pb-3" aria-hidden="true"></span><h3>CURRENT MONTH</h3></div>
                <div className="text-light text-center mt-2">
                <h1 className="text-dark"><CountUp
                    className="account-balance"
                    start={0}
                    end={645}
                    duration={2}
                    useEasing={true}
                    useGrouping={true}
                /></h1>
                </div>
            </div>
        </div>
            
        </div>
          <div className="row">

            <div className="col-md-7">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Email Statistics</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-body ">
                 <LineChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#cc0e74" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="bounce" stroke="#6886c5" />
                </LineChart>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Users Behavior</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                <BarChart
                    width={500}
                    height={300}
                    data={dataBar}
                    margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#cc0e74" />
                    <Bar dataKey="uv" stackId="a" fill="#6886c5" />
                </BarChart>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard