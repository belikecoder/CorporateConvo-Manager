
import React, { useState } from 'react';
import '../assets/css/dash.css';
import { Link } from 'react-router-dom';
import ASide from '../components/side';
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const [records, setRecords] = useState([
    { id: 1, clientName: 'Andrew Bruno', clientEmail: 'bruno@crossover.org', company: 'Zoho', role: 'User', bookings: 5 },
    { id: 1, clientName: 'Vinoth', clientEmail: 'bruno@crossover.org', company: 'Zoho', role: 'User', bookings: 5 },
    { id: 1, clientName: 'Sanjay', clientEmail: 'bruno@crossover.org', company: 'Zoho', role: 'User', bookings: 5 },
    // Add more records as needed
  ]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = records.filter(record =>
    record.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const logout = () => {
    navigate('/signup')
  };

  return (
    <div>
      <ASide />

      <div className="main-content">
        <header>
        <div className="header-content">
            <label  className="le"htmlFor="menu-toggle">
              <span className="las la-bars"></span>
            </label>

            <div className="header-menu">
              <label htmlFor="">
                <span className="las la-search"></span>
              </label>

              <div className="notify-icon">
                <span className="las la-envelope"></span>
                <span className="notify">4</span>
              </div>

              <div className="notify-icon">
                <span className="las la-bell"></span>
                <span className="notify">1</span>
              </div>

              <div className="user">
                <div className="bg-img"></div>
                <span className="las la-power-off"></span>
                <span onClick={logout}>Logout</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="page-header">
          <h1>Dashboard</h1>
            <small>Welcome Vignesh</small>
          </div>

          <div className="page-content">
            <div className="analytics">
            <div className="card">
              <div className="card-head">
                            <h2>40</h2>
                            <span className="las la-user-friends"></span>
                        </div>
                        <div className="card-progress">
                            <small>User activity this month</small>
                            <div className="card-indicator">
                                <div className="indicator one" ></div>
                            </div>
                        </div>
              </div>
             

                    <div className="card">
                        <div className="card-head">
                            <h2>4</h2>
                            <span className="las la-envelope"></span>
                        </div>
                        <div className="card-progress">
                            <small>messages received</small>
                            <div className="card-indicator">
                                <div className="indicator four" ></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <h2>30</h2>
                            <span class="las la-eye"></span>
                        </div>
                        <div class="card-progress">
                            <small>Page views</small>
                            <div class="card-indicator">
                                <div class="indicator two"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <h2>45</h2>
                            <span class=" las la-clipboard-list"></span>
                        </div>
                        <div class="card-progress">
                            <small>Monthly Bookings</small>
                            <div class="card-indicator">
                                <div class="indicator three" ></div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="records table-responsive">
              <div className="record-header">
                <div className="add">
                <div className="add">
                             <span>Entries</span>
                             <select name="" id="">
                                 <option value="">ID</option>
                             </select>
                             <button>Add record</button>
                         </div>
                 </div>
       

                <div className="browse">
                  <input
                    type="search"
                    placeholder="Search by username"
                    className="record-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select name="" id="">
                    <option value="">Status</option>
                  </select>
                </div>
              </div>

              <div>
                <table width="100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th><span className="las la-sort"></span> CLIENT</th>
                      <th><span className="las la-sort"></span>COMPANY</th>
                      <th><span className="las la-sort"></span>ROLE</th>
                      <th><span className="las la-sort"></span> BOOKINGS</th>
                      <th><span className="las la-sort"></span> ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map(record => (
                      <tr key={record.id}>
                        <td>#{record.id}</td>
                        <td>
                          <div className="client">
                            <div className="client-img bg-img"></div>
                            <div className="client-info">
                              <h4>{record.clientName}</h4>
                              <small>{record.clientEmail}</small>
                            </div>
                          </div>
                        </td>
                        <td>{record.company}</td>
                        <td>{record.role}</td>
                        <td>{record.bookings}</td>
                        <td>
                          <div className="actions">
                            <span className="lab la-telegram-plane"></span>
                            <span className="las la-eye"></span>
                            <span className="las la-ellipsis-v"></span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dash;

